$(document).ready(function(){

	$(".splash").click(function(event) {
		$(".splash").hide();
	});

	$(document).keyup(function(event) {
		if (event.keyCode == 27) {
			$(".splash").hide();
		}
	});

	$(".splash .content").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
	});

	$(".splash .dismiss").click(function(event) {
		$(".splash").hide();
	});

	$(".splash a").click(function(event) {
		window.open(event.target.href, '_blank');
		$(".splash").hide();
	});
	
});
