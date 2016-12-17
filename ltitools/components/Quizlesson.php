<?php
namespace Hermetic\Ltitools\Components;

use Cms\Classes\ComponentBase;
use Delphinium\Roots\Roots;
use Delphinium\Roots\db\DbHelper;
use Delphinium\Roots\lmsclasses\CanvasHelper;
use Delphinium\Roots\Enums\ActionType;
use Delphinium\Roots\Requestobjects\QuizRequest;

use Hermetic\ltitools\Models\Quizlesson as QuizlessonModel;
use Hermetic\ltitools\Controllers\Quizlesson as QuizlessonController;

class Quizlesson extends ComponentBase
{

    public $quizlessonrecordId;
    /**
     * @return array An array of details to be shown in the CMS section of OctoberCMS
     */
    public function componentDetails()
    {
        return [
            'name'        => 'Quiz Lesson',
            'description' => 'Embed quiz questions into Canvas Pages'
        ];
    }

    /**
     * @return array Array of properties that can be configured in this instance of this component
     */
    public function defineProperties()
    {
        return [
            'instance'	=> [
                'title'             => '(Optional) Quizlesson instance',
                'description'       => 'Select the quizlesson instance to display. If an instance is selected, it will be
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
     */
    public function onRun()
    {

        //try {
            //foreach($_POST as $key => $value ) { echo "<br/>$key = $value"; }
            //echo 'post: '.$_POST['lti_message_type'];
            //die();

            $config = $this->getInstance();
            //use the record in the component and frontend form
            $this->page['config'] = json_encode($config);
            //Use the primary key of the record you want to update
            //$this->page['recordId'] = $config->id;
            $this->page->quizlessonrecordId = $config->id;
            if (!isset($_SESSION)) {
                 session_start();
            }
            //get LMS roles --used to determine functions and display options
            $roleStr = $_SESSION['roles'];
            $this->page['role'] = $roleStr;

            $quizList = '';//init for localhost
            /** This component switches by messageType and role. it will not work in localhost
                https://www.imsglobal.org/specs/lticiv1p0/specification-3
            */
            if (isset($_POST['lti_message_type'])) {

                // TEST DEBUGGING
                //echo 'message_type: '.$_POST['lti_message_type'].'<br/>';// TEST
                //echo 'course_id: '.$_SESSION['courseID'].'<br/>';
                //echo 'userToken: '.$_SESSION['userToken'].'<br/>';
                //echo 'quiz_id:'.$config->quiz_id;
                
                //foreach($_POST as $key => $value ) { echo "$key = $value <br/>"; }
                
                $messageType = $_POST['lti_message_type'];// online
                $this->page['messageType'] = $messageType;

                switch ($messageType) {

                    case "ContentItemSelectionRequest": // first launch add question or submit to page

                        //FRONTEND configuration FORM IS UNUSED
                        // INSTRUCTIONS IN MODAL
                        //$formController = new QuizlessonController
				        //$formController->create('frontend');
                        // Append the Instructions to the page
                        $instructions = $formController->makePartial('quizlessoninstructions');
                        $this->page['quizlessoninstructions'] = $instructions;

                        $this->page['return_url'] = $_POST["content_item_return_url"];// first launch
                        // if a quiz has not been selected, get all quizzes else only get the selected quiz
                        if ($config->quiz_id == '') {
                            $quizList = $this->getAllQuizzes();// to select one
                        } else { 
                            $quizList = $this->getQuiz($config->quiz_id);//only get selected quiz
                        }
                        break;

                    case "basic-lti-launch-request": // second launch render question or submit

                        // display renderQuestion.htm with
                        // array of question_id's from content_items
                        // retrieve from launch url
                        $postcontent = '{"quizid":'.$_POST["quizid"].',"questionid":"'.$_POST["questionid"].'"}';
                        
                        //used at .js lines 89 -93
                        $this->page['content_items'] = json_encode($postcontent);
                        $quizId = intval($_POST["quizid"]);
                        $_SESSION['quizID'] = $quizId;//for onSubmitQuiz()
                        
                        if ($_POST['questionid'] == 'submit') {
                            $quizList = json_encode('{"res":{}}');// empty if 'submit', length=10 characters
                        } else {
                            $quizList = $this->getQuiz($quizId);
                        }
                        break;
                }
            }// End isset

            $this->page['quizList'] = $quizList;

            // ready to finish loading assets. storm changes modal-header. override in css
            $this->addCss("/modules/system/assets/ui/storm.css", "core");
            $this->addJs("/modules/system/assets/ui/storm-min.js", "core");
            $this->addCss("/plugins/hermetic/ltitools/assets/css/quizlesson.css");
            $this->addJs("/plugins/hermetic/ltitools/assets/javascript/quizlesson.js");

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

    /**
     * @return array An array of instances (eloquent models) to populate the instance dropdown to configure this component
     */
    public function getInstanceOptions() {
        //In order for this to work, you must create a model and controller to store the instances of this component.
        //Modify use statement above to include the model and controller and uncomment the following code

        $instances = QuizlessonModel::all();

        if (count($instances) === 0) {
            return $array_dropdown = ["0" => "No instances available."];
        } else {
            $array_dropdown = ["0" => "- select QuizlessonModel Instance - "];
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
            $config = QuizlessonModel::find($this->property('instance'));
        } else {
            if (is_null($name)) {
                $name = $this->alias . '_' . $courseId;
            }
            $config = QuizlessonModel::firstOrNew(array('name' => $name));
            if (is_null($config->name)) {$config->name = $name;}
            //TODO: finish setting any default values
        }
        $config->save();
        return $config;
    }

    /**
     * Ajax Handler for when teachers update the component from their view
     * @return string Json encoded instance of component
     */
    public function onUpdate()
    {
        $data = post('Quizlesson');//model name
        $id = intval($this->page->quizlessonrecordId);// convert string to integer
        $config = $this->getInstance($data['name']);// retrieve existing record

        //update record with new data coming from POST
        $config->name = $data['name'];
        $config->animate = intval($data['animate']);
        $config->size = intval($data['size']);
        $config->custom_css = trim(preg_replace('/\s+/', ' ',  $data['custom_css']));

        //TODO: must finish updating the rest of the fields in your table
        $config->save();// update original record
        return json_encode($config);// back to instructor view
    }


    /**
    * return the selected quiz
    */
    public function getQuiz($quizId)
    {
        $quizId = intval($quizId);
        $fresh_data = false;
        $roots = new Roots();
        $req = new QuizRequest(ActionType::GET, $quizId, $fresh_data, true);
        $result = $roots->quizzes($req);
        return json_encode(array($result));
    }

    /** 
    *   return list of all quizzes for instructor to choose one
    *   contains questions and answers for each quiz
    */
    public function getAllQuizzes()
    {
        $fresh_data = false;//true; // instructor may have just built one!
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

    /**
    *   called from js Submit Answer button
    *
    *   only called if role is Learner
    *   requires studentId
    *       see TestRoots: testQuizTakingWorkflow
    *       https://canvas.instructure.com/doc/api/quiz_submission_questions.html#method.quizzes/quiz_submission_questions.answer
    */
    public function onGradeQuestion()
    {
        //get passed parameters from js
        $questionId = $_POST["quest"];//intval($_POST["quest"]);
        $quizId = $_POST["quiz"];//intval($_POST["quiz"]);
        $type = $_POST["type"];// multiple_choice_question, multiple_answers_question, ...
        
        if (!isset($_SESSION)) { session_start(); }
        $studentId = $_SESSION['userID'];//$studentId = 1603772;// TEST manually set to Test Student
        $totalPointsToFudge = 1;
        
        $roots = new Roots();
        $quizSubmission = $roots->getQuizSubmission($quizId, null, $studentId);
        
        if (is_null($quizSubmission))
        {
            //it wasn't on canvas or in the db so create a new submission
            echo "Starting new quiz taking session. ";
            $quizSubmission = $roots->postQuizTakingSession($quizId, $studentId);
        }
        
        //see if the question is answered
        $isAnswered = false;
        $isAnswered = $roots->isQuestionAnswered($quizId, $questionId, $quizSubmission->quiz_submission_id);
        
        // if false send answer selected to postAnswerQuestion()
        if ($isAnswered) {
            echo "was already answered. ";
            //do something if the question has already been answered
            
        } else {
            //prepare the answer for postAnswerQuestion the $answer will vary by question_type
            //https://canvas.instructure.com/doc/api/quiz_submission_questions.html#Question+Answer+Formats-appendix
            $answer = $_POST["answer"];// multiple_choice_question
            // & true_false_question & short_answer_question & essay_question
            
            if ($type == 'multiple_answers_question') { $answer = array(intval($_POST["answer"])); }
            // fill_in_multiple_blanks_question
            // multiple_dropdowns_question
            // matching_question
            
            $answerArr = array(
                "attempt"=>$quizSubmission->attempt,
                "validation_token"=> trim($quizSubmission->validation_token),
                "access_code"=>null,//TODO: where do we get this from?
                "quiz_questions"=> array([
                    "id"=> strval($questionId),
                    "answer"=> $answer
                ])
            );
            
            $canvasHelper = new CanvasHelper();
            $result = $canvasHelper->postAnswerQuestion($quizSubmission, $answerArr, $studentId);
            echo json_encode($result);
        }
    }

    /**
    *   called from js Submit Quiz button
    */
    public function onSubmitQuiz()
    {
        if (!isset($_SESSION)) { session_start(); }
        $userId = $_SESSION['userID'];
        $quizId = $_SESSION['quizID'];
        
        $dbHelper = new DbHelper();
        $quizSubmission = $dbHelper->getQuizSubmission($quizId, $userId);// null
        
        if ($quizSubmission != null) {
            $roots = new Roots();// line 1158
            $result = $roots->postTurnInQuiz($quizId, $quizSubmission);// roots calls canvasHelper line 257
            /* if role is Instructor?
                Argument 2 passed to Delphinium\Roots\Lmsclasses\CanvasHelper::postTurnInQuiz() 
                must be an instance of Delphinium\Roots\Models\QuizSubmission,
                null given, called in /delphinium/roots/Roots.php on line 1172 and defined" 
                on line 257 of /delphinium/roots/lmsclasses/CanvasHelper.php
            */
        }
        echo json_encode($result);
    }

/*
    public function onRetryQuestion()
    {
        // for submission create an instance of submission which has all quiz
        // data submission check submission.php
        // IsQuestionAnswered() returns answer if success or no
        // NOTE: submit one and check if submission feedback
        //$studentId = $_SESSION['userID'];

        //note jesus code
        $result = array(
            'correct_comments' => 'correct one point deducted!',
            'incorrect_comments' => 'Upps.',
            'neutral_comments' => ' McDonals is not hirimg cuz I canot spel'
        );

        $retString = "";
        foreach ($result as $key => $value)
        {
            $retString .=  $key. ":". $value .",";
        }

        $this->gradePerQuestion .= 5; // add grade to array of grades
        //$retString = $this->gradePerQuestion;
        echo json_encode($result, JSON_PRETTY_PRINT);// $retString;
    }
*/

}