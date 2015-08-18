$(document).ready(function(){

	$("input#events-button").click(function(ev) {
		window.location.href = "http://designforamerica.mit.edu/events.html"
	});

	$("input#dismiss-grand-event-button").click(function(ev) {
		$(".grand-event").hide();
	});


	$("input.yellowButton").click(function(ev) {
		window.location.href = "http://designforamerica.mit.edu/team_page.html"
	});
	
});

function init() {
	
	// start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 2000);
}

// fade in experience
function start() {
	
	$('body').removeClass("loading").addClass('loaded');
	
}

$(window).load(function() {
	
	// fade in page
	init();
	
});
