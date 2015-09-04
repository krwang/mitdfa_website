$(document).ready(function() {

	$('.project').hide();
	$('.description').show();

	$('.row').click(function(e) {
		var project = $(e.target).attr('value');
		$('.project').hide();
		$('.' + project).show();
	});

	var $window = $(window);
	var $tableOfContents = $('.tableOfContents');
	var $main = $('.main');
	var tableTop = $tableOfContents.offset().top;

	$window.scroll(function() {
		if ($window.width() > 600) {
			$tableOfContents.toggleClass('sticky', $window.scrollTop() > tableTop);
			$main.toggleClass('sticky', $window.scrollTop() > tableTop);			
		}
	});
		
});
