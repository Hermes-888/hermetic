<?php namespace Hermetic\Ltitools\Components;

use Cms\Classes\ComponentBase;
use Hermetic\ltitools\Models\Popquiz as popModel;
use Hermetic\ltitools\Controllers\Popquiz as popController;

use Delphinium\Roots\Roots;
use Delphinium\Roots\db\DbHelper;
use Delphinium\Roots\Enums\ActionType;
use Delphinium\Roots\Requestobjects\QuizRequest;
use Delphinium\Roots\Models\Quizquestion as questionsModel;

class Popquiz extends ComponentBase
{
    public $popquizrecordId;

    public function componentDetails()
    {
        return [
            'name'        => 'Pop Quiz',
            'description' => 'Games using quiz questions.'
        ];
    }

    public function defineProperties()
    {
        return [
            'instance'	=> [
                'title'             => '(Optional) PopQuiz Instance',
                'description'       => 'Select the pop quiz instance to display. If an instance is selected, it will be
                                    the configuration for all courses that use this page. Leaving this field blank will allow
                                    different configurations for every course.',
                'type'              => 'dropdown',
                'default'           => 0
            ]
        ];
    }

    /**
     * This function will run every time this component runs. To use this component, drop it on a OctoberCMS page along with the dev component
     * (for development) or LTIConfiguration component (for production)
     * Requires minimal.htm layout
     */
    public function onRun()
    {
        //try {
            // Type = ResourceSelection
            //foreach($_POST as $key => $value ) { echo "<br/>$key = $value"; }
            $assignmentID = '';//1st launch no questions yet
            if (isset($_POST['custom_canvas_assignment_id'])) {
                //2nd launch return_url is set. Questions set. instance name set
                $assignmentID = $_POST['custom_canvas_assignment_id'];
                $name = $this->alias . '_' . $assignmentID;
                $config = $this->getInstance($name);//create new table with assignmentID
                // instructor can now set the questions
            } else {
                $config = $this->getInstance();// will always have one blank for courseID
            }
            // used to determine if first launch
            $this->page['assignmentID'] = json_encode($assignmentID);
            
            //use the record in the component and frontend form
            $this->page['config'] = json_encode($config);
            //Use the primary key of the record you want to update
            $this->page->popquizrecordId = $config->id;
            if (!isset($_SESSION)) {
                 session_start();
            }
            //get LMS roles --used to determine functions and display options
            $roleStr = $_SESSION['roles'];
            $this->page['role'] = $roleStr;

            /* if questions have been selected, both roles will use them
             * get questions from $config->questions and show game style chosen
             * selected questions are stored in db as comma delimited string of question_id
             * retrieve questions from delphinium_roots_quiz_questions
             */
            $gameQuest = $this->getTheseQuestions($config->questions);
            $this->page['gameQuest'] = $gameQuest;
            $this->page['game'] = $config['game_style'];// select in frontend form
            
            $consumerkey = 'x';// localhost
            if (isset($_POST['oauth_consumer_key'])) {
                // from roots_lti_configuration
                $consumerkey = json_encode($_POST['oauth_consumer_key']);
            }
            // used to find secret for onGradePopquiz
            $this->page['consumerkey'] = $consumerkey;
            
            // used in popquiz.js - if contentItemSelectionRequest submit form to return_url
            $messageType = '';// if lti type = Editor
            if (isset($_POST['lti_message_type'])) {
                $messageType = $_POST['lti_message_type'];// online
            }
            $this->page['messageType'] = $messageType;//OBSOLETE
            
            //outcomeurl & sourcedid are sent with grade
            $sourcedid = 'x';// localhost
            $outcomeurl = 'x';
            if (isset($_POST['lis_result_sourcedid'])) {
                $sourcedid = json_encode($_POST['lis_result_sourcedid']);
                $outcomeurl = json_encode($_POST['lis_outcome_service_url']);
            }
            $this->page['sourcedid'] = $sourcedid;
            $this->page['outcomeurl'] = $outcomeurl;
            
            // include the backend form with instructions for instructor.htm
            if (stristr($roleStr, 'Instructor')||stristr($roleStr, 'TeachingAssistant'))
            {
                //include your js & css. Note: bootstrap.min.css is part of minimal layout.
                //See #10 in https://github.com/ProjectDelphinium/delphinium/wiki/1.-Installation#setup
                //Include OctoberCMS' ui library (See https://octobercms.com/docs/ui/form)

                $this->addCss('/modules/system/assets/ui/storm.css', 'core');
                $this->addJs('/modules/system/assets/ui/js/flashmessage.js', 'core');
                //$this->addCss('/modules/system/assets/ui/storm.less', 'core');// UNUSED
                
                $formController = new popController();
                $formController->create('frontend');

                //Append the formController to the page
                $this->page['popquizform'] = $formController;

                //Append the Instructions to the page
                $instructions = $formController->makePartial('popquizinstructions');
                $this->page['popquizinstructions'] = $instructions;
                
                // get quiz questions to choose from
                $quizList = $this->getAllQuizzes();
				$this->page['quizList'] = $quizList;
                
                $this->page['toolurl'] = 'https://'.$_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
                $returnurl = '';
                if (isset($_POST['launch_presentation_return_url'])) {
                    $returnurl = $_POST['launch_presentation_return_url'];
                }
                $this->page['returnurl'] = $returnurl;
                
                // used only for instructors
                $this->addCss('/plugins/hermetic/ltitools/assets/css/popquiz.css');
				$this->addJs('/plugins/hermetic/ltitools/assets/js/popquiz_instructor.js');
                $this->addJs('/plugins/hermetic/ltitools/assets/js/popquiz.js');//instructor only
                
            }
            else if (stristr($roleStr, 'Learner'))
            {
                //default.htm will load student.htm and view the game which loads gameQuest[questionid,
            }
            

        //Error handling requires nonlti.htm. See #11 in https://github.com/ProjectDelphinium/delphinium/wiki/1.-Installation#setup
/*        }
        catch (\GuzzleHttp\Exception\ClientException $e) {
            return;
        }
        catch(Delphinium\Roots\Exceptions\NonLtiException $e)
        {
            if($e->getCode()==584)
            {
                return \Response::make($this->controller->run('nonlti'), 500);
            }
        }
        catch(\Exception $e)
        {
            if($e->getMessage()=='Invalid LMS')
            {
                return \Response::make($this->controller->run('nonlti'), 500);
            }
            return \Response::make($this->controller->run('error'), 500);
        }
*/
    }

    /* Instructor can choose questions from multiple quizzes
     * return all quizzes for instructor to choose questions
     */
	public function getAllQuizzes()
    {
        $fresh_data = false;//true if recently created?
        $roots = new Roots();
        $req = new QuizRequest(ActionType::GET, null, $fresh_data, true);
        $result = $roots->quizzes($req);
        //remove quizzes with no questions. (question groups)
        $list = array();
        foreach ($result as $quiz)
        {
            if (count($quiz['questions']) > 0) {
                array_push($list, $quiz);
            }
        }
        return json_encode($list);
    }

    /* Learner needs question objects for game
     * use Delphinium\Roots\Models\Quizquestion as questionsModel; 
     */
    public function getTheseQuestions($idList)
    {
        $ids = explode(",", $idList);
        $length = count($ids);
        $questionArray = array();
        for ($i=0; $i<$length; $i++) {
            // get question matching question_id
            $question = questionsModel::where(array('question_id'=>$ids[$i]))->first();
            array_push($questionArray, $question);
        }
        return json_encode($questionArray);
    }

    /**
     * @return array An array of instances (eloquent models) to populate the instance dropdown to configure this component
     */
    public function getInstanceOptions()
    {
        //In order for this to work, you must create a model and controller to store the instances of this component.
        //Modify use statement above to include the model and controller and uncomment the following code

        $instances = popModel::all();

        if (count($instances) === 0) {
            return $array_dropdown = ["0" => "No instances available."];
        } else {
            $array_dropdown = ["0" => "- select Instance - "];
            foreach ($instances as $instance) {
                $array_dropdown[$instance->id] = $instance->name;//assuming that the model has id and name fields
            }
            return $array_dropdown;
        }
    }

    /**
     * Retrieves instance of this component. If no specific instance was selected in the CMS configuration of this component
     * then it will create a dynamic instance based on the alias_courseId in which this component was launched
     * @param null $name The name of the component
     * @return mixed Instance of Component
     */
    private function getInstance($name=null)
    {
        if (!isset($_SESSION)) {
            session_start();
        }
        $courseId = $_SESSION['courseID'];
        //if instance has been set
        if ($this->property('instance')) {
            echo "instance was set";
            //use the instance set in CMS dropdown
            $config = popModel::find($this->property('instance'));
        } else {
            if (is_null($name)) {
                $name = $this->alias . '_' . $courseId;
            }
            $config = popModel::firstOrNew(array('name' => $name));
            if (is_null($config->name)) { $config->name = $name; }
            if (is_null($config->game_style)) { $config->game_style = 'mgs'; }
            //TODO: set any default values
        }
        $config->save();
        return $config;
    }

}
