<?php
namespace Hermetic\Ltitools\Controllers;

use Illuminate\Routing\Controller;
//use Delphinium\Roots\Roots;
//use Delphinium\Roots\Enums\ActionType;
//use Delphinium\Roots\Models\Assignment as AssignmentModel;// for submissions
//use Delphinium\Roots\Requestobjects\AssignmentsRequest;// for submissions
//use Delphinium\Roots\Requestobjects\SubmissionsRequest;// student progress
use Hermetic\Ltitools\Models\Popquiz as popModel;// db Table
use Delphinium\Roots\Classes\OAuthRequest as ltii;// sendOAuthBodyPOST


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
        
        //ToDo: get key, to find secret
		$key = 'mfue-key';// hardcode for test
		$secret = 'delphinium-rocks';
        
		$content_type = 'application/xml';
        //function added to OAuthRequest;
		$result = ltii::sendOAuthBodyPOST($method, $outcomeurl, $key, $secret, $content_type, $body);
        return json_encode($result);
    }
     
}


















