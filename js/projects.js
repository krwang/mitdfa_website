$(document).ready(function() {

	$('.project').hide();
	$('.description').show();

	$('.row').click(function(e) {
		var project = $(e.target).attr('value');
		$('.project').hide();
		$('.' + project).show();
	});
		
});
