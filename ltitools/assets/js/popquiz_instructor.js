$(document).ready(function() {
    /* set up the popover content text and activate it*/
    $('#popinfo').attr('data-content','Select a Quiz, Add Selected Questions, Modify the question list as needed then Click Use These Questions. Your students will receive points for playing the game. What a great way to learn.');
    $('#popinfo').popover();// activate info
});

function completed(data)
{
    hidePopquizModal();
    $.oc.flashMsg({
        'text': 'The record has been successfully saved.',
        'class': 'success',
        'interval': 3
    });
    //location.reload();
    history.go(0);
}

function showPopquizModal()
{
    $("#popquiz-content-configuration").on("shown.bs.modal", function () {
        //you may disable fields that should not be edited by professors
        //document.getElementById('yourid').style.display='none';
    }).modal('show');
}

function hidePopquizModal()
{
    $('#popquiz-content-configuration').modal('hide');
}
