<?php
namespace Hermetic\Ltitools\Controllers;

use Illuminate\Routing\Controller;
use Delphinium\Roots\Roots;
use Delphinium\Roots\Enums\ActionType;
use Delphinium\Roots\Models\Assignment as AssignmentModel;// for submissions
use Delphinium\Roots\Requestobjects\AssignmentsRequest;// for submissions
use Delphinium\Roots\Requestobjects\SubmissionsRequest;// student progress
use Delphinium\Roots\Guzzle\GuzzleHelper;// post grade
use Hermetic\Ltitools\Models\Popquiz as popModel;// db Table

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
     *  grade assignment
     *  https://canvas.instructure.com/doc/api/submissions.html
     *  https://github.com/Hermes-888/delphinium/blob/master/dev/components/TestRoots.php
     *  post submission: POST /api/v1/courses/:course_id/assignments/:assignment_id/submissions 
     */
    public function onGradePopquiz()
    {
        $outcomeurl = \Input::get('outcomeurl');
        $sourcedid = \Input::get('sourcedid');
        $grade = \Input::get('grade');// 0~1
        //$grade = intval( \Input::get('grade') );// 0~1
        
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
				  <sourcedId>' . $sourcedid . '</sourcedId>
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
        
        // POST $body to $outcomeurl with curl
        //$data_string = json_encode($body);
        
        if (!isset($_SESSION)) { session_start(); }
        $token = \Crypt::decrypt($_SESSION['userToken']);
        $tokenHeader = array("Content-type:application/xml","Authorization: Bearer ".$token);
        //GuzzleHelper::postOrPutWithCurl($url, $questionsWrap, $token);
        // 
        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => $outcomeurl,
            CURLOPT_POST => true,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $tokenHeader
        ));
        $result = curl_exec($ch);
        curl_close($ch);
        return json_encode($result);//PROMISE result: "{\"errors\":[{\"message\":\"Invalid authorization header\"}],\"error_report_id\":79832388}"
        
        /*
        if (!isset($_SESSION)) {
            session_start();
        }
        $assignmentId = intval( \Input::get('assignment') );// convert string to integer
        $courseId = $_SESSION['courseID'];
        $studentIds = array($_SESSION['userID']);
        $assignmentIds = array($assignmentId);
        $multipleStudents = false;
        $multipleAssignments = false;
        $allStudents = false;
        $allAssignments = false;
        //can have the student Id param null if multipleUsers is set to false (we'll only get the current user's submissions)
        $req = new SubmissionsRequest(ActionType::POST, $studentIds, $allStudents,
            $assignmentIds, $allAssignments, $multipleStudents, $multipleAssignments);
        
        $params[] = "submission[submission_type]=online_text_entry";//basic_lti_launch ???
        $params[] = "submission[body]=".$body;
        // added
        //$params[] = "submission[assignment_id]=".$assignmentId;
        //$params[] = "submission[score]=".$grade;
        //$params[] = "submission[user_id]=".$_SESSION['userID'];
        
        $roots = new Roots();
        $res = $roots->submissions($req, $params);
        //echo json_encode($res);
        return json_encode($res);
        */
    }
     
}


















