/*
 * Copyright (C) 2012-2016 Project Delphinium - All Rights Reserved
 *
 * This file is subject to the terms and conditions defined in
 * file 'https://github.com/ProjectDelphinium/delphinium/blob/master/EULA',
 * which is part of this source code package.
 *
 * NOTICE:  All information contained herein is, and remains the property of Project Delphinium. The intellectual and technical concepts contained
 * herein are proprietary to Project Delphinium and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained
 * from Project Delphinium.
 *
 * THE RECEIPT OR POSSESSION OF THIS SOURCE CODE AND/OR RELATED INFORMATION DOES NOT CONVEY OR IMPLY ANY RIGHTS
 * TO REPRODUCE, DISCLOSE OR DISTRIBUTE ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT IT  MAY DESCRIBE, IN WHOLE OR IN PART.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Non-commercial use only, you may not charge money for the software
 * You can modify personal copy of source-code but cannot distribute modifications
 * You may not distribute any version of this software, modified or otherwise
 */

$(document).ready(function() {
/*
	Quiz Lessons:
	Instructor actions:
    -In text editor, add text
    -select the editor LTI resources drop down icon
    
	-select a quiz to use
	save id and display the questions
		-ability to choose another quiz?
		-cannot replace questions already placed on page
	
	-select questions with check box, view details with eye icon
    -select Add QuestIons to place a group of questions on page
	-use editor to place text between question groups
	-place a quiz submit button after all questions are placed
	
	//start with a text field OBSOLETE
    
    todo:
    https://www.imsglobal.org/specs/lticiv1p0/specification-3
    
    submit button must contain quiz_id for quiz submission api call
*/

/* Delphinium functions:
	set up the popover content text and activate it
*/
     if (messageType == "ContentItemSelectionRequest") {
        $('#orchid-popinfo').attr("data-content","Choose a Quiz. Then select questions and add them to the page. Be sure to use all questions from the same quiz! Submit Quiz button will grade the quiz.");
        $('#orchid-popinfo').popover();// activate info

        $('#orchid-cog').on('click', function(e) {
            $('#orchid-configuration').modal('show');// instructions
        });
    }
/* End Delphinium functions*/

/* Quizlesson functions*/
    //var quizList = {{quizList|raw}};// all quizzes retrieved in default.htm
    //console.log('quizList:', quizList.length, quizList); 
    var quests=[];// quiz questions to select from
    var selectedQuiz='';// quiz_id
    var selecteditems=[];// quiz question_id array OBSOLETE???
    var qitems=[];// question divs
    var usedcount=0;// questions used on page
    var nextcount=0;// index for question details modal
    var index=0;// quests[index]
    var quizdone=false;// set var to determine pageContent
    
    // Done loading remove loader layer
    $('.loading-indicator-container').hide();
        
    //console.log('messageType:',messageType);// test
    console.log('quiz_id:', orchidConfig.quiz_id);
    console.log('quizList length:', quizList.length);
    //console.log('quizList:', quizList);
    
    if (messageType == "basic-lti-launch-request") {
        //display a list of questions sent from content_items.custom in renderQuestion.htm
        console.log('POSTED:', postcontent);
        var cont= $.parseJSON(postcontent);
        var qarray = cont.questionid.split(',');// to array
        //console.log('cont:',cont.quizid, qarray);
        
        if (role == 'Learner') {
            // Store first result in localStorage and only call once per page from .js
            var promise = $.get('onGetSubmissions', {'quizid':cont.quizid}, function (data) {
                    //console.log('PROMISE submissions:',data);
                    var dd = $.parseJSON(data);
                    console.log('submission:', dd.length, dd);
                    if (dd.length > 0) {
                        quizdone=true;// just render question and correct answer(s)
                        render(cont.quizid, qarray);
                    }
                }).fail(function (data1) { console.log('PROMISE failed:',data1); });
            
        } else {
            render(cont.quizid, qarray);
        }
        
    } else {
        // Select quiz and questions
        // setup tools, instructor.htm
        $('#questiongroup').hide();
        $('#addsubmit').attr("disabled","disabled");
        if (orchidConfig.quiz_id != undefined && orchidConfig.quiz_id != "") {
            selectedQuiz = orchidConfig.quiz_id;
            showQuizQuestions(selectedQuiz);// from quiz_id
        } else {
            // all quizzes to choose from
            showQuizzes();
        }
    }
    
    /* show all quizzes as buttons */
    function showQuizzes()
    {
        /* put 1/3 in each column inc to count, reset : inc colm */
        var count = Math.ceil(quizList.length/3);
        var col=0;
        var row=0;
        for(var i=0; i<quizList.length; i++)
        {
            content = '<div id='+quizList[i].quiz_id+' class="alert alert-info">';// blue
            content += quizList[i].title;
            content += ': total questions: '+quizList[i].questions.length;//.question_count;
            //content += ' worth: '+quizList[i].points_possible;
            content += '</div>';
            $('#col_'+col).append(content);
            row++;
            if (row==count) { row=0; col++; }
        }
        //click quiz to view questions
        $('.alert').on('click', function(e) {
            e.preventDefault();
            selectedQuiz=e.target.id;// quiz_id
            orchidConfig.quiz_id = selectedQuiz;
            
            showQuizQuestions(selectedQuiz);
        });
    }

    function showQuizQuestions(id)
    {
        // close quiz selector quizlist
        $('#quizlist').hide();
        $('#questiongroup').show();
        console.log('view questions for quiz_id:'+id);
        
        /* quizList can either be all quizzes
        *   or only the selected quiz */
        var quiz= $.grep(quizList, function(elem, indx){
            return elem.quiz_id == id; }
        );
        console.log('quiz:', quiz);
        orchidConfig.quiz_name = quiz[0].title;
        quests=quiz[0].questions;
        console.log('quests:',quests);
        //properties: quiz_id, title, q_count, points, description
        $('#qtitle').html(quiz[0].title+'<span class="right"> Points: '+quiz[0].points_possible+'</span>');
        
        // show the quiz questions
        $('#questionlist').empty();
        usedcount=0;// reset
        selecteditems=[];// no questions selected
        qitems=[];// question divs
        for (var i=0; i<quests.length; i++) {
            var txt = quests[i].text;
            //console.log(txt);// &lt;strong&gt; ...
            txt = $.parseHTML(txt);
            txt = txt[0].textContent;
            //console.log(txt);//<strong>
            
            // hide when selected, track id of selecteditems 
            var content = '<div class="questitem" id="'+quests[i].question_id+'">';
                content+= '<input type="checkbox" name="'+quests[i].question_id+'" value="" /> ';//checkbox
                content+= '<a id="'+i+'" class="seeit" href="#"><i class="icon-eye"></i></a> ';// view details icon
                content+= txt;
                content+= '</div>';
            $('#questionlist').append(content);
            //selecteditems.push(quests[i].question_id);// all questions selected
            qitems.push(content);// each div
        }
        
        // for each questions_used disable #questionlist.questitem
        console.log("Hide Used:", orchidConfig.questions_used);
        
        if (orchidConfig.questions_used.length != 'undefined') {
            $('#replacequiz').attr("disabled","disabled");// cannot change quiz
            
            var used = orchidConfig.questions_used.split(',');
            console.log(used.length, quests.length);
            if (used.length == quests.length) {
                $('#addselected').attr("disabled","disabled");// cannot click Add more questions
                $('#addsubmit').removeAttr( "disabled" );// show Add Submit Button
            }
            var ara = orchidConfig.questions_used.split(",");
            for (i=0; i<ara.length; i++) {
                // if question_id == used id then add used class, select the checkbox 
                $('#'+ara[i]).addClass('used');
                $('#'+ara[i]).find('input').prop('disabled',true);
            }
        }
        $('.seeit').on('click',function(e) {
            e.preventDefault();
            nextcount=e.currentTarget.id;
            constructQuestion(nextcount);
            $('#quest-details').modal('show');
        });
    }

	function updateTable() {
        // use RestAPI & Routes
        var promise = $.get('onUpdateTable', {'Quizlesson':orchidConfig}, function (data) {
				console.log('PROMISE result:',data);
                $('#contentSelector').submit();//Now autosubmit form
			}).fail(function (data1) { console.log('PROMISE failed:',data1); });
    }

    //add selected questions to page
	$('#addselected').on('click', function(e) {
		e.preventDefault();
		// cannot change quiz if questions are added
        $('#replacequiz').attr("disabled","disabled");
        
        var qids = '';
        var qhite = 260;
		var items = $( "input:checked" );
		//console.log(items.length);
        for (var i=0; i<items.length; i++) {	
			//console.log($(items[i]).attr('name'));
			//console.log($(items[i]).parent().attr('id'));
            $(items[i]).parent().addClass('used');
            $(items[i]).prop('disabled',true);
			// uncheck items so they dont get counted again
			$(items[i]).prop( "checked", false );
			// name = question_id 
			selecteditems.push($(items[i]).attr('name'));//questions selected
            
            // comma separated strings
            if (orchidConfig.questions_used.length > 0) {
                orchidConfig.questions_used += ","+$(items[i]).parent().attr('id');
            } else {
                orchidConfig.questions_used += $(items[i]).parent().attr('id');
            }
            if (qids.length > 0) {
                qids += ","+$(items[i]).parent().attr('id');// used in content_items
                qhite += 260;// iframe height, guessing for now
            } else {
                qids += $(items[i]).parent().attr('id');
            }
			usedcount+=1;// add to used count
		}
		
        /* Disable Add Selected Questions button
        *   if all questions have been used, 
        *   enable Add Submit Quiz button,
        *   let user add it to the page, they may want more text still
        *
        *   tell user to add Submit Quiz now or wait.
        *   else tell user to close the selection modal
        */
        $('#addselected').attr("disabled","disabled");
        if (usedcount == quests.length) {
            $('#addsubmit').removeAttr( "disabled" );
        }
        
        /*
        *   https://groups.google.com/forum/#!topic/canvas-lms-users/7N2CJL8P9xk
        *   content item url launches this with a lti_message of basic-lti-launch-request
        *   and loads renderQuestion.htm to display a given question in the canvas iframe
        *   
        *   construct content_items, add it to instructor.htm by submitting form to return_url
        */
        var parameters = '?quizid='+orchidConfig.quiz_id+'&questionid='+qids;
        
        var contentval = '{"@context" : "http://purl.imsglobal.org/ctx/lti/v1/ContentItem",';
            contentval += '"@graph":[{';
            contentval += '"@type":"LtiLinkItem",';
            contentval += '"@id":"https://mediafiles.uvu.edu/delphinium/orchidtest",';
            contentval += '"url":"https://mediafiles.uvu.edu/delphinium/orchidtest'+parameters+'",';
            contentval += '"title":"Quiz Questions","text":"placed in page",';
            contentval += '"mediaType":"application/vnd.ims.lti.v1.ltilink",';
            //  contentval += '"custom":{"quizid":'+orchidConfig.quiz_id+',"questionid":[ '+qids+']},';// append to url instead
            contentval += '"placementAdvice":{ "presentationDocumentTarget" : "iframe",';
            contentval += '"displayWidth":"100%","displayHeight":'+qhite+'}}]}';
        
        $('#content_items').val(contentval);
        // update table record orchidConfig
        console.log('Used:', orchidConfig.questions_used);
        updateTable();
        // wait till updateTable is done
        //$('#contentSelector').submit();// autosubmit form
        
        // warn user to close the selection modal or add the Submit Quiz button
        
    });

	/*  Add the Submit Quiz button to page
    *    remove the db fields quiz_name, quiz_id and questions_used 
    *    so the user can add another quiz to this or another page
    */
	$('#addsubmit').on('click', function(e) {
        e.preventDefault();
        // wrap in a div and center? or right?
		$('#addsubmit').attr("disabled","disabled");// disable addsubmit
        
        // render will only create the Submit Quiz button. quiz_id is stored in session
        var parameters = '?quizid='+orchidConfig.quiz_id+'&questionid=submit';
        
        var contentval = '{"@context" : "http://purl.imsglobal.org/ctx/lti/v1/ContentItem",';
            contentval += '"@graph":[{';
            contentval += '"@type":"LtiLinkItem",';
            contentval += '"@id":"https://mediafiles.uvu.edu/delphinium/orchidtest",';
            contentval += '"url":"https://mediafiles.uvu.edu/delphinium/orchidtest'+parameters+'",';
            contentval += '"title":"Quiz Submit Button","text":"placed in page",';
            contentval += '"mediaType":"application/vnd.ims.lti.v1.ltilink",';
            //  contentval += '"custom":{"quizid":'+quiz_id+',"questionid":"submit"},';// append to url instead
            contentval += '"placementAdvice":{ "presentationDocumentTarget" : "iframe",';
            contentval += '"displayWidth":"100%","displayHeight":60}}]}';// height:60px
        
        $('#content_items').val(contentval);
        // empty table fields so user can build another page with the same instance name
        orchidConfig.quiz_name='';// null?
        orchidConfig.quiz_id='';
        orchidConfig.questions_used='';
        updateTable();
        // wait till updateTable is done
        //$('#contentSelector').submit();// autosubmit form
	});

    // choose a different quiz
    $('#replacequiz').on('click', function(e) {
        e.preventDefault();
        $('#quizlist').show();
        $('#questiongroup').hide();
		// enable add questions, disable addsubmit
		$('#addselected').removeAttr( "disabled" );
		$('#addsubmit').attr("disabled","disabled");
        selecteditems=[];// empty array
    });

    // see question details 
    $('#nextbtn').on('click', function(e) {
        e.preventDefault();
        //next question
		nextcount++;
		if(nextcount==quests.length){ nextcount=0; }
		constructQuestion(nextcount);
    });
    $('#backbtn').on('click', function(e) {
        e.preventDefault();
        //previous question
		nextcount--;
		if(nextcount<0){ nextcount=quests.length-1; }
		constructQuestion(nextcount);
    });

	/*
	*   index is first selected question to see in #quest-details modal
    *   construct: type, points, question, answers and comments
	*/
	function constructQuestion(index)
	{	
		var quest = quests[index];
        index = parseInt(index);// string to integer
        //console.log(index, quest);
		$('#quest-details-title').html('Question '+(index+1));
		$('#qtype').html('Type: '+quests[index].type);
		$('#qpoints').html('Points: '+quests[index].points_possible);
		var txt = quests[index].text;//.toString();
			txt = $.parseHTML(txt);
			txt = txt[0].textContent;
		$('#qtext').html(txt);
		var answers= $.parseJSON(quests[index].answers);
		var ansdiv='';
		//console.log(answers);//for each
		for(var i=0; i<answers.length; i++)
		{
			if(answers[i].weight==0){
				ansdiv+='<div class="alert alert-danger">';
			} else {
				ansdiv+='<div class="alert alert-success">';
			}
			ansdiv+=answers[i].text;
			ansdiv+='</div>';
		}
		$('#qanswers').html('<hr/>Answers:<br/>'+ansdiv);
		
		var comdiv='';
		if(quests[index].correct_comments!= "")
		{
			comdiv+='<div class=bg-success>';
			comdiv+=quests[index].correct_comments;
			comdiv+='</div>';
		}
		if(quests[index].incorrect_comments != "")
		{
			comdiv+='<div class=bg-danger>';
			comdiv+=quests[index].incorrect_comments;
			comdiv+='</div>';
		}
		if(quests[index].neutral_comments != "")
		{
			comdiv+='<div class=bg-warning>';
			comdiv+=quests[index].neutral_comments;
			comdiv+='</div>';
		}
		$('#qfeedback').html('<hr/>Comments:<br/>'+comdiv);
	}
    
    /* Render Questions.htm 
    *   functions
    *   https://canvas.instructure.com/doc/api/quiz_submission_questions.html#method.quizzes/quiz_submission_questions.answer
    */
    function gradeQuestion(quizid, qid, aid, qtype){
        console.log('gradeQuestion:', quizid, qid, aid, qtype);
        
        // Test: role = "Learner";
        if(role=='Instructor') {
            showFeedback(quizid,qid);// only display feedback. 
            
        } else {
            // student role is required to answer a question
            $.request('onGradeQuestion', {
                data: {'quiz':quizid,'quest':qid,'answer':aid,'type':qtype}, // pass parameters to the function in Quizlesson.php
                dataType: 'text',// returning info type. returns a json string

                success: function(data) { // data contains the returning result from Quizlesson.php file
                    console.log('data:', data);//{"result":"\"464865\""}
                    showFeedback(quizid,qid);
                    // hide submit answer & and show retry? or only one chance?
                    // "<button class='btn btn-warning' onclick='gradeRetry()'>Retry</button><br>";
                }
            });
        }
    }
    function showFeedback(quizid,qid) {
        // find the quiz
        var quiz = $.grep(quizList, function(elem, indx){
            return elem.quiz_id == quizid; }
        );
        // find the question
        var quest = $.grep(quiz[0].questions, function(elem,index) {
            return elem.question_id == qid;
        });
        console.log('showFeedback:', quest);
        // find the comments
        var correct = quest[0].correct_comments;
        var incorrect = quest[0].incorrect_comments;
        var neutral = quest[0].neutral_comments;
        
        var feedtxt = ''; // if length >0 display feedback
        if (correct.length > 0) {
            feedtxt += "<i class='fa fa-check-circle' style='color:green'></i>"+correct;
        }
        if (incorrect.length > 0) {
            feedtxt += "<br><i class='fa fa-times' style='color:red'></i> "+incorrect;
        }
        if (neutral.length > 0) {
            feedtxt += "<br><i class='fa fa-comments' style='color:#2E9AFE'></i>"+neutral;
        }
        if (feedtxt != '') {
            $('#feedback'+qid).html(feedtxt+'<hr/>');
            /*
                possibly: replace answers with correct answer plus feedback
            */
        }
    }
    /*
    function gradeRetry(){
         console.log('called: gradeRetry');
        $.request('onRetryQuestion', {
            data: {val:123}, // pass parameters to the function in Quizlesson.php
            dataType: 'text',// returning info type. returns an array
            success: function(data) { // data contains the result from Quizlesson.php file

                //var t = JSON.parse(data);
                var comments  = data.split(",");

                // data will have the new grade
                console.log("comments ", comments);
                var showQuestions = document.getElementById("printQuestions");
                showQuestions.innerHTML += " <div> <i class='fa fa-check-circle' style='color:green'></i>"+comments[0]+"</div>";
            }
        });
    }
    */
    
    /* Render the questions in Page
        if Learner getSubmissions.
        Remember that this runs for each question on a page
        Store first call in localStorage and only request once from .js ?
        
    */
    function render(quizid, questions) {
        //console.log('quizList length:', quizList);
        console.log('render:', quizid, questions);
        var pageContent = '';
        
        if (questions == 'submit') {
            
            if(quizdone) {
                $('#q').html('<strong>Quiz has been Completed.</strong>');// fancier?
            } else {
                // only display the Submit Quiz button
                pageContent = '<button class="btn btn-success submitbtn">Submit Quiz</button>';
                $('#q').html(pageContent);
                 if (role == 'Learner') {
                    // add event handler
                    $('.submitbtn').on('click', function() {
                        $.request('onSubmitQuiz', {
                            data: null,
                            dataType: 'text',
                            success: function(data) {
                                console.log('data:', data);
                            }
                        });
                    });
                }
            }
            return true;// render completed
        } 
            
            
        
        // find the quiz
        var quiz = $.grep(quizList, function(elem, indx){
            return elem.quiz_id == quizid; }
        );
        //console.log(quiz[0]);
        // find the questions
        var quests = $.grep(quiz[0].questions, function(elem, indx){
           // return elem.question_id == questions[0];
           for(var q=0; q<questions.length; q++) {
               //console.log('grep:',indx, questions[q], elem.question_id);
               if (elem.question_id == questions[q]) {
                   return elem;
               }
           }
        });
        //console.log('quests:', quests.length, quests);
        
        for (var i=0; i<quests.length; i++) {
            var qid = quests[i].question_id;
            var txt = quests[i].text; //console.log(txt);// &lt;strong&gt; ...
            txt = $.parseHTML(txt);
            txt = txt[0].textContent;// <strong>
            
            var questxt = '<div class="questbox"><div class="questxt">'+txt+'</div>';
            console.log('Type: ',quests[i].type);
            var answers= $.parseJSON(quests[i].answers);
            var ansdiv='';
            //console.log(answers);//for each
            for (var a=0; a<answers.length; a++) {
                
                
                if (quizdone) {
                    // quiz has been completed, add correct answer(s)
                    if (answers[a].weight > 0) {
                        ansdiv += '<div data-type="'+quests[i].type+'">';
                        ansdiv += '<div style="padding:5px 20px;">'+answers[a].text+'</div>';
                    }
                    
                } else {
                    // quiz is not done yet
                    ansdiv += '<div class="answer" data-type="'+quests[i].type+'">';
                    ansdiv += '<label class=answerlabel>';
                    if (quests[i].type == "multiple_choice_question") {
                        ansdiv += '<input type="radio" name="answer'+i+'" data-id="'+answers[a].id+'" />';
                    }
                    if (quests[i].type == "multiple_answers_question") {
                        ansdiv += '<input type="checkbox" name="answer'+i+'" data-id="'+answers[a].id+'" />';
                    }
                    // ADD other types of questions here

                    ansdiv+='&nbsp; &nbsp;'+answers[a].text+'</label>';
                }
                
                ansdiv+='</div>';
            }
            
            pageContent += questxt + ansdiv;
            
            if ( !quizdone ) {
                // add submit answer button
                pageContent += '<hr/><div id="feedback'+qid+'"></div>';
                pageContent += '<div id="printQuestions"></div>';// retry button
                pageContent +='<button class="btn btn-xs btn-info submitanswer" data-quiz="'+quizid+'" data-question="'+qid+'" data-answer="">Submit Answer</button></div>';
            }
        }
        
        $('#q').html(pageContent);
        
        // add answer clicked to submitanswer button
        $('.answer').on('click', function(e) {
            // needs to be an array for multiple_answers_question
            // find the selected answer_id and inject into submitanswer element
            var ansid = [];
            $('input:checked').each(function(indx,elem){
                ansid.push( $(this).data('id') );
            });
            var qtype = $(this).data('type');
            //ADD other types of answers? fill in the blank, dropdown, ???
            console.log('ansid:',ansid, 'qtype:', qtype);
            $('.submitanswer').attr('data-answer',ansid);// data-answer="id,id"
            $('.submitanswer').attr('data-type',qtype);//
        });
        
        $('.submitanswer').on('click', function(e) {
            var quizid = $(this).data('quiz');
            var qid = $(this).data('question');
            var aid = $(this).data('answer');
            var qtype = $(this).data('type');
            console.log(quizid,qid,aid,qtype);
            if (aid != '') {
                // an answer has been selected
                gradeQuestion(quizid,qid,aid,qtype);
            }
        });
    }
    

/* question object
    answers: "[
        {"weight":0,"id":2028,"migration_id":"RESPONSE_1113","text":"Organizational change is..."},
        {"weight":60,"id":5595,"migration_id":"RESPONSE_2746","text":"Organizational change..."},
        {"weight":40,"id":6439,"migration_id":"RESPONSE_8703","text":"Organizational change..."},
        {"weight":0,"id":5998,"migration_id":"RESPONSE_1895","text":"Organizational change..."}]"
    
    name: "1.a Which of the followi"
    incorrect_comments: ""
    correct_comments: ""
    neutral_comments: "Organizational change can take many forms."
    points_possible: 1
    position: 1
    question_id: 8369896
    quiz_id: 464878
    text: "Which of the following statements regarding change is INCORRECT?"
    type: "multiple_choice_question"
    created_at: "2016-03-04 20:12:19"
*/

//End document.ready
});