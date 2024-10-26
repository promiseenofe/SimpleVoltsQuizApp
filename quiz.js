/* alert ("Welcome Guest") ; */

var questionNumber = 1;
var score = 0;

function showQuestion(question) {
	$('.questionscreen').hide();
	if($('.questionscreen:nth-of-type('+ question
	 + ')').length > 0) {
	    $('.questionscreen:nth-of-type('+ question
		 + ')').show();
	 } else {
		 $('#finishedScreen').show();
	 }
}

showQuestion(questionNumber);

$('span').click(function(){
	if ($(this).hasClass('correct')) {
	score++;
	$('#scoreTally').html(score);
	}
	questionNumber++;
	showQuestion(questionNumber);
});