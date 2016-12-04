<?php
namespace Hermetic\Ltitools\Controllers;

use Illuminate\Routing\Controller;
use Delphinium\Roots\Roots;
use Delphinium\Roots\Enums\ActionType;
use Delphinium\Roots\Requestobjects\AssignmentsRequest;// for submissions
use Delphinium\Roots\Requestobjects\SubmissionsRequest;// student progress
use Delphinium\Roots\Models\Assignment as AssignmentModel;// for submissions
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
        
    }
     
}


















