<?php
namespace Hermetic\Ltitools\Controllers;

use Illuminate\Routing\Controller;
use Delphinium\Roots\Roots;
use Delphinium\Roots\Enums\ActionType;
use Delphinium\Roots\Models\Assignment as AssignmentModel;// for submissions
use Delphinium\Roots\Requestobjects\AssignmentsRequest;// for submissions
use Delphinium\Roots\Requestobjects\SubmissionsRequest;// student progress

use Hermetic\Ltitools\Models\Quizlesson as QuizlessonModel;// onUpdateTable

use Hermetic\Ltitools\Models\Popquiz as popModel;// db Table
use Delphinium\Roots\Classes\OAuthRequest as auth;// sendOAuthBodyPOST
use Delphinium\Roots\Models\LtiConfiguration as LtiConfigurations;

class RestApi extends Controller 
{
    /**
     *   called from popquiz.js
     *   update record quiz_name & questions
     *   selected game_style
     */
    public function onUpdatePopquiz()
    {
        $data = \Input::get('Popquiz');
        $id = intval($data['id']);// convert string to integer
        $config = PopModel::find($id);// retrieve this record
        //update record with new data coming from POST
        $config->name = $data['name'];
        $config->quiz_name = $data['quiz_name'];//title
        $config->quiz_description = $data['quiz_description'];//user input html
        $config->questions = $data['questions'];//selected ids
        $config->game_style = $data['game_style'];// selected game
        $result = $config->save();// update record
        return json_encode($result);// T/F back to js
    }

    /**
     *  called from {game} upon completion
     *  grade assignment 100%
     *  https://canvas.instructure.com/doc/api/file.assignment_tools.html
     */
    public function onGradePopquiz()
    {
        $outcomeurl = \Input::get('outcomeurl');//Canvas: lis_outcome_service_url
        $sourcedid = \Input::get('sourcedid');//Canvas: lis_result_sourcedid
        $grade = \Input::get('grade');// 0~1
        $key = \Input::get('consumerkey');
        $record = LtiConfigurations::where('consumer_key', $key)->first();
        $secret = $record['shared_secret'];//look up secret

        //create XML body to set grade
        $body = '<?xml version = "1.0" encoding = "UTF-8"?>
        <imsx_POXEnvelopeRequest xmlns="http://www.imsglobal.org/services/ltiv1p1/xsd/imsoms_v1p0">
          <imsx_POXHeader>
            <imsx_POXRequestHeaderInfo>
              <imsx_version>V1.0</imsx_version>
              <imsx_messageIdentifier>999999123</imsx_messageIdentifier>
            </imsx_POXRequestHeaderInfo>
          </imsx_POXHeader>
          <imsx_POXBody>
            <replaceResultRequest>
              <resultRecord>
                <sourcedGUID>
                  <sourcedId>'.$sourcedid.'</sourcedId>
                </sourcedGUID>
                <result>
                  <resultScore>
                    <language>en</language>
                    <textString>'.$grade.'</textString>
                  </resultScore>
                </result>
              </resultRecord>
            </replaceResultRequest>
          </imsx_POXBody>
        </imsx_POXEnvelopeRequest>';

        //Set variables to be used in the sendOAuthBodyPOST function
        $method = 'POST';
        $content_type = 'application/xml';
        //function added to OAuthRequest;
        $result = auth::sendOAuthBodyPOST($method, $outcomeurl, $key, $secret, $content_type, $body);
        return json_encode($result);
    }


    /**
    *   called from quizlesson.js
    *   update delphinium_orchid_quizlessons record
    *   fields: quiz_id and questions_used
    */
    public function onUpdateQuizlesson()
    {
        $data = \Input::get('Quizlesson');
        $did = intval($data['id']);// convert string to integer
        $config = QuizlessonModel::find($did);// retrieve existing record
        $config->quiz_name = $data['quiz_name'];
        $config->quiz_id = $data['quiz_id'];
        $config->questions_used = $data['questions_used'];
        $config->save();// update original record
        $result = $config->save();// update original record
        return json_encode($result);// T/F back to quizlesson.js
    }
    /**
    *   Remember that this runs for each question on a page
    *   Store first result in localStorage and only call once per page from .js
    *
    *   get submission for single user, all assignments because id is not available.
    *   if submission_id == quiz_submission[submission_id] ???
    *   if GRADE != NULL { render question & correct answer + submission_comments?
    *   
    *   onGradeQuestion() & onRetryQuestion()
    *   onSubmitQuiz()
    */
    public function onGetSubmissions()
    {
        $student = $_SESSION['userID'];//intval($_SESSION['userID']);
        $studentIds = array($student);//array(1603772);//TestStudent 1603772
        $allStudents = false;
        $assignmentIds = array();// all assignments. id not available
        $allAssignments = true;
        $multipleStudents = false;
        $multipleAssignments = true;
        $includeTags = false;
        $grouped = true;// ?

        $req = new SubmissionsRequest(ActionType::GET, $studentIds, $allStudents, $assignmentIds, 
                                      $allAssignments, $multipleStudents, $multipleAssignments, $includeTags, $grouped);
        $roots = new Roots();
        $submissions = $roots->submissions($req);

        // find one submission from all
        // "body":"user: 1603772, quiz: 697063, score: 2.3333333333333335, time: 2016-09-01 21:42:57 +0000",
        $quizid = \Input::get('quizid');
        $result = array();
        foreach ($submissions as $submission) {
            $body = explode(",", $submission["body"]);

            foreach ($body as $key=>$item) {
                $body[$key] = explode(':', $item);

                if ($key == 1) {
                    if (trim($body[1][1]) == $quizid) {
                        array_push($result, $submission);
                    }
                }
            }
        }

        return json_encode($result);
    }
    /* EXAMPLE SUBMISSION: 
        assignment_visible:null
        attempt:null
        body:null
        course:null
        grade:null
        grade_matches_current_submission:null
        graded_at:null
        grader_id:null
        html_url:null
        late:false
        module_item_id:2368111
        preview_url:"https://uvu.instructure.com/courses/343331/assignments/1660390/submissions/1662025?preview=1&version=0"
        score:null
        submission_comments:null
        submission_id:48623658
        submission_type:null
        submitted_at:null
        tags:"C:Align"
        url:null
        user_id:1662025
    */


}


















