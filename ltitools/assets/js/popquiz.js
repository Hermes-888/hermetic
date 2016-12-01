/* popquiz.js

	Pop Quiz Game:
	Instructor
		choose which quiz to use from getAllQuizzes
			click quiz to see questions 
		select questions to use in game
			can choose questions from multiple quizzes
			question_ids are added to db
    is it possible to get question_banks instead?
			
		each question has points_possible but is not used
        select total points for game in the assignment
		add Intro text in assignment, or _description, used in game
		
	choose game type from list [YouGotThis, ...]?
		possibly let the Learner choose which game?
		preview of game with questions chosen
	
	Learner:
	let the Learner choose which game?
		get Questions from db
		see Intro text, Play game
		
		pass back points for the assignment, not a quiz
*/

// Instructor view vars & functions
// globals
var selecteditems=[];// quiz question_id selections
var chosenitems=[];// question_id of gameitems to use, view, remove, clear all
var quests=[];// quiz questions to selected from
console.log(config);
	/*	Note: these functions are only for instructor view
		list of all quizzes to choose questions for game
        //ONLY? if type == "multiple_choice_question" ONLY?
        instructions are in the cog instructions tab
    */
	//quizList = {{quizList|raw}};
    //console.log('quizList:', quizList.length, quizList);
    showQuizzes();// all quizzes to choose from
    console.log('if gameQuest:', gameQuest.length);//, gameQuest);
    if (gameQuest != null && gameQuest.length > 1) {
        //gameitems = {{gameQuest|raw}};
        $('#accordion-1').collapse('hide');
        showSelected();// from config.questions
    }
    
	nextcount=0;//index for question details
	
	/* activate accordion and button functions */
    $('.panel-trigger').click(function(e) {
        //e.preventDefault();
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
        //console.log('currentAttrValue:', currentAttrValue);
        if (currentAttrValue == '#accordion-4') { showIntro(); }
        //$('.panel-trigger').addClass('collapsed');//.collapse('hide');// ALL
        $(this).collapse('show');
	});
    
    /* Add Selected Questions button in accordion-2 */
    $('#confirmit').click(function(e) {
        e.preventDefault();
        // selecteditems is array of question_id
        // transfer selecteditems[question_id,] to qameitems[question object,]
		console.log('selecteditems:',selecteditems);
        for (var i=0; i<selecteditems.length; i++) {
            var quest = $.grep(quests, function(elem, index){
                return elem.question_id == selecteditems[i];
            });
            gameitems.push(quest[0]);//quest[0] array of objects fix this
        }
        console.log('gameitems:',gameitems);
        // should be array of objects
        // reset gameselectable list
        $('#accordion-2').collapse('hide');
        showSelected();
        selecteditems=[];
    });
    
     /* Remove All Questions button from gameitems */
    $('#clearit').click(function(e) {
        e.preventDefault();
		current=0;// questnum
		nextcount=0;// see question
        gameitems=[];
        chosenitems=[];
		$('#questcount').html(gameitems.length+' Questions');
        $('#gameselectable').empty();
    });
    
    /* Remove Selected Questions btn in chosenitems from gameitems */
    $('#removeit').click(function(e) {
        e.preventDefault();
        for (var i=0; i<chosenitems.length; i++) {
            var item = 0;
            for(var c=0; c<gameitems.length; c++) {
                if(gameitems[c].question_id == chosenitems[i]) { item=c; break; }
            }
            gameitems.splice(item,1);// remove from array
            // remove <li>st node
            $('#gameselectable').find('[data-id='+chosenitems[i]+']').remove();
			$('#questcount').html(gameitems.length+' Game Questions');
        }
        //console.log('chosenitems:',chosenitems);
        //console.log('gameitems:',gameitems);
        chosenitems=[];
		nextcount = 0;//none selected
    });
    
    /*  use gameitems to play game 
		save gameitem to db questions as array of question_id
		retrieve questions from delphinium_roots_quiz_questions
	*/
    $('#useit').click(function(e) {
        e.preventDefault();
		//console.log('gameitems:',gameitems.length, gameitems);
		if (gameitems.length>0) {
            /* gameitems = questions to use in game */
			gameQuest=gameitems;
			/* gameQuest is array of questions for game
                store config.questions[question_id, ...]
                in db table to retrieve question objects 
                from delphinium_roots_quiz_questions
            */
			var idArray = [];
			for (var i=0; i<gameitems.length; i++) {
            //ONLY? if type == "multiple_choice_question"
				idArray.push(gameitems[i].question_id);
			}
			//console.log('idArray:',idArray);
			$('#Form-field-Popquiz-questions').val(idArray);
            config.questions=idArray.toString();// and internal array
            console.log('config:', config.id, config.questions);
            
        /*
        *   https://groups.google.com/forum/#!topic/canvas-lms-users/7N2CJL8P9xk
        *   content item url launches this with an lti_message type of basic-lti-launch-request
        *   display the game with questions in the canvas iframe
        *   submitting form to return_url
        */
        //var parameters = '?questionid='+config.questions;//UNUSED
        var contentval = '{"@context" : "http://purl.imsglobal.org/ctx/lti/v1/ContentItem",';
            contentval += '"@graph":[{';
            contentval += '"@type":"LtiLinkItem",';
            contentval += '"@id":"https://mediafiles.uvu.edu/delphinium/popquiz",';
            contentval += '"url":"https://mediafiles.uvu.edu/delphinium/popquiz",';// dynamic!!! selfurl???
            contentval += '"title":"Pop Quiz","text":"placed in assignment",';
            contentval += '"mediaType":"application/vnd.ims.lti.v1.ltilink",';
            contentval += '"placementAdvice":{ "presentationDocumentTarget" : "iframe",';
            contentval += '"displayWidth":"970","displayHeight":"550"}}]}';// actual+10
            
            $('#content_items').val(contentval);// instructor.htm form
            
            updateTable();//RestAPI
			//open the game
            $('#accordion-3').collapse('hide');
			$('#accordion-4').collapse('show');
            showIntro();// restart game with updated questions
		}
		// else no questions to use
	});

    /* called from cog form */
    function updateForm(e) {
        e.preventDefault();
        // transfer form to config
        config.quiz_name = $('#Form-field-Popquiz-quiz_name').val();
        config.questions = $('#Form-field-Popquiz-questions').val();
        config.game_style = $('#Form-field-Popquiz-game_style').val();
        config.quiz_description = $('#Form-field-Popquiz-quiz_description').val();
        updateTable();
    }
    function updateTable() {
        // use RestAPI to update db table then submit to returnUrl
        console.log('config:',config);
        var promise = $.get('onUpdatePopquiz', {'Popquiz':config}, function (data) {
            console.log('PROMISE result:',data);// T/F
            // if messageType == "ContentItemSelectionRequest"
            //console.log('messageType:',messageType);
            if (messageType == "ContentItemSelectionRequest") {
                //Now autosubmit form to return_url to set iframe
                $('#contentSelector').submit();
            }
        }).fail(function (data1) { console.log('PROMISE failed:',data1); });
    }

    /*  see details of each question with answers and comments
        in #detailed modal
        nextcount is index of starting question
        use next btn to view each question
    */
    var viewitems =[];
    $('#viewit').click(function(e) {
        e.preventDefault();
        viewitems = quests;
		if(viewitems.length>0) { 
			constructQuestion(nextcount);
			$('#detailed').modal('show');
		 }
		 // else no questions to see
    });
	$('#seeit').click(function(e) {
        e.preventDefault();
        viewitems = gameitems;
		if(viewitems.length>0) { 
			constructQuestion(nextcount);
			$('#detailed').modal('show');
		 }
		 // else no questions to see
    });
    $('#nextbtn').click(function(e) {
        e.preventDefault();
        //detailed-body replace content with next question
		nextcount++;
		if (nextcount==viewitems.length){ nextcount=0; }
		constructQuestion(nextcount);
    });
     $('#backbtn').on('click', function(e) {
        e.preventDefault();
        //previous question
		nextcount--;
		if(nextcount<0){ nextcount=viewitems.length-1; }
		constructQuestion(nextcount);
    });
	/* also see selected questions accordion-2 quests[]
	   index is first selected question to see in #detailed modal
       construct: type, points, question, answers and comments
	*/
	function constructQuestion(index)
	{	
		var quest = viewitems[index];
		$('#detailed-title').html('Question '+(index+1));
		$('#qtype').html('Type: '+viewitems[index].type);
		$('#qpoints').html('Points: '+viewitems[index].points_possible);
		var txt = viewitems[index].text;//.toString();
			txt = $.parseHTML(txt);
			txt = txt[0].textContent;
		$('#qtext').html(txt);
		var answers= $.parseJSON(viewitems[index].answers);
		var ansdiv='';
		console.log(answers);//for each
		for (var i=0; i<answers.length; i++) {
			if (answers[i].weight==0) {
				ansdiv+='<div class="alert alert-danger">';
			} else {
				ansdiv+='<div class="alert alert-success">';
			}
			ansdiv+=answers[i].text;
			ansdiv+='</div>';
		}
		$('#qanswers').html('<hr/>Answers:<br/>'+ansdiv);
		
		var comdiv='';
		if (viewitems[index].correct_comments!= "") {
			comdiv+='<div class=bg-success>';
			comdiv+=viewitems[index].correct_comments;
			comdiv+='</div>';
		}
		if (viewitems[index].incorrect_comments != "") {
			comdiv+='<div class=bg-danger>';
			comdiv+=viewitems[index].incorrect_comments;
			comdiv+='</div>';
		}
		if (viewitems[index].neutral_comments != "") {
			comdiv+='<div class=bg-warning>';
			comdiv+=viewitems[index].neutral_comments;
			comdiv+='</div>';
		}
		$('#qfeedback').html('<hr/>Comments:<br/>'+comdiv);
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


/* show all quizzes as buttons */
function showQuizzes()
{
	//console.log('quizList.length:',quizList.length);
	/* put 1/3 in each column inc to count, reset : inc colm */
	var count = Math.ceil(quizList.length/3);
	var col=0;
	var row=0;
	for (var i=0; i<quizList.length; i++) {
		content = '<div id='+quizList[i].quiz_id+' class="alert alert-info" data-title="'+quizList[i].title+'">';// blue
		content += quizList[i].title;
		content += ': total questions: '+quizList[i].questions.length;//.question_count;
		//content += ' worth: '+quizList[i].points_possible;
		content += '</div>';
		$('#col_'+col).append(content);
		row++;
		if (row==count) { row=0; col++; }
	}
	//click quiz to view questions
	$('.alert').on('click', function(e){
        $('#accordion-1').collapse('hide');
        $('#Form-field-Popquiz-quiz_name').val($(this).data('title'));
		showQuizQuestions(e.target.id);// quiz_id
	});
	// open All Quizzes panel
    $('#accordion-1').collapse('show');
}

/*	show all questions from selected quiz
	Questions are selectable or all
	submit btn adds questions to gameitems
*/
function showQuizQuestions(id)
{
	// fill id=quizdata with selected quiz and show it
	// qtitle quiz_details, quizdata
	console.log('view quiz_id:'+id);
	var quiz = $.grep(quizList, function(elem, indx){
        return elem.quiz_id == id; }
	);
	console.log('quiz:', quiz);
	quests=quiz[0].questions;
	//console.log('quests:',quests);
	//properties of quiz, title, q_count, points, id?
	$('#qtitle').text(quiz[0].title+' Points: '+quiz[0].points_possible);
	
	// show the quiz questions in modal when clicked?
	$('#quizselectable').empty();
	selecteditems=[];// no questions selected
	for (var i=0; i<quests.length; i++) {
		//ONLY? if type == "multiple_choice_question" ONLY?
        if (quests[i].type == "multiple_choice_question") {
            var txt = quests[i].text;
            //console.log(txt);// &lt;strong&gt; ...
            txt = $.parseHTML(txt);
            txt = txt[0].textContent;
            //console.log(txt);//<strong>
            $('#quizselectable').append('<li class="list-group-item questgrp" data-id="'+quests[i].question_id+'">'+txt+'</li>');
            selecteditems.push(quests[i].question_id);// all questions selected
        }
	}
	$('.questgrp').on('click', function(){
        $(this).toggleClass('active');
        selecteditems=[];// accumulated selections if mouse dragged
        $("#quizselectable .active").each(function() {
            var qid = $(this).attr('data-id');
            selecteditems.push(qid);
        });// or only one clicked
        console.log('selecteditems:', selecteditems.length, selecteditems);// array of question_ids
    });
    $('#accordion-2').collapse('show');
}

/* Display questions selected for game */
function showSelected()
{
    $('#qtitle').text(config.quiz_name);
    //gameitems [question, ]
    $('#gameselectable').empty();
	$('#questcount').html(gameitems.length+' Game Questions');
	chosenitems=[];// none yet
    for (var i=0; i<gameitems.length; i++) {
		var txt = gameitems[i].text;//.toString();
		//console.log(txt);// &lt;strong&gt; ...
		txt = $.parseHTML(txt);
		txt = txt[0].textContent;
		//console.log(txt);//<strong>
		$('#gameselectable').append('<li class="list-group-item ugrp" data-id="'+gameitems[i].question_id+'">'+txt+'</li>');
		chosenitems.push(gameitems[i].question_id);
	}
	$('.ugrp').on('click', function(){
        $(this).toggleClass('active');
        chosenitems=[];// accumulated selections if mouse dragged
        $("#gameselectable .active").each(function() {
            var qid = $(this).attr('data-id');
            chosenitems.push(qid);// push id for each to an array
        });// or only one clicked
        //set nextcount to gameitems.indexOf(chosenitems[0]) for constructQuestion
		for (var i=0; i<gameitems.length; i++) {
			if (chosenitems[0]==gameitems[i].question_id) { nextcount=i; }
		}
        console.log('chosenitems:', chosenitems.length, chosenitems);// array of question_ids
		console.log('nextcount:',nextcount);
    });
    $('#accordion-3').collapse('show');
}



















