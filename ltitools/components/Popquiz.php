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

        //try{
        
        /*  // Type = Editor = contentItemSelectionRequest
            if (!isset($_SESSION)) { session_start(); }
            $_SESSION['courseID'] = \Input::get('custom_canvas_course_id');
            $_SESSION['userID'] = \Input::get('custom_canvas_user_id');
            $_SESSION['domain'] = \Input::get('custom_canvas_api_domain');
            $_SESSION['lms'] = \Input::get('custom_canvas_lms');
            $_SESSION['roles'] = \Input::get('roles');// I added this for Editor version of LtiConfiguration.php
        
            $dbHelper = new DbHelper();
            $userCheck = $dbHelper->getCourseApprover($_SESSION['courseID']);// or for userID ?
            $_SESSION['userToken'] = $userCheck->encrypted_token;
            
            if no token for user found, authorize a new one?
        */
        foreach($_POST as $key => $value ) { echo "<br/>$key = $value"; }
        //die();

            $config = $this->getInstance();
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
            $this->page['game'] = $config['game_style'];// student.htm
        
            
            
            // include the backend form with instructions for instructor.htm
            if(stristr($roleStr, 'Instructor')||stristr($roleStr, 'TeachingAssistant'))
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
                
                // UNUSED
                $messageType = $_POST['lti_message_type'];// online
                //$this->page['messageType'] = $messageType;
                switch ($messageType) {
                    case "ContentItemSelectionRequest": // first launch add questions
                        // is also set in LtiConfiguration.php
                        $this->page['return_url'] = $_POST["content_item_return_url"];// first launch
                    break;

                    case "basic-lti-launch-request": // second launch questions
                        // display array of question_id's from content_items
                        // retrieve from launch url
                        //$postcontent = '{"questionid":"'.$_POST["questionid"].'"}';//$config->questions
                        
                        // used at quizlesson.js lines 80-93
                        //$this->page['content_items'] = json_encode($postcontent);
                    break;
                }
                
                // get quiz questions to choose from
                $quizList = $this->getAllQuizzes();
				$this->page['quizList'] = $quizList;
                
                // used only for instructors
                $this->addCss('/plugins/hermetic/ltitools/assets/css/popquiz.css');
				$this->addJs('/plugins/hermetic/ltitools/assets/js/popquiz_instructor.js');
                $this->addJs('/plugins/hermetic/ltitools/assets/js/popquiz.js');
                
            }
            else if(stristr($roleStr, 'Learner'))
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
            if(is_null($config->name)){$config->name = $name;}
            //if(is_null($config->animate)){$config->animate = 1;}
            //if(is_null($config->size)){$config->size = 100;}
            //TODO: finish setting default values
        }
        $config->save();
        return $config;
    }

    /**
     * Ajax Handler for when instructors update the component from their view
     * @return string Json encoded instance of component
     * USE RestApi in form too
     
    public function onUpdate()
    {
        $data = post('Popquiz');//model name
        $id = intval($this->page->popquizrecordId);// convert string to integer
        $config = $this->getInstance($data['name']);// retrieve existing record

        //update record with new data coming from POST
        $config->name = $data['name'];
        $config->quiz_name = $data['quiz_name'];//title
        $config->quiz_description = $data['quiz_description'];//user input html
        $config->questions = $data['questions'];//selected ids
        $config->game_style = $data['game_style'];//game
        $config->save();// update original record
        return json_encode($config);// back to instructor view  
    }
    */
    
    
    
    
    
}
