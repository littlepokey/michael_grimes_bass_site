console.log("loaded myscript.js");

var init = 0;

function scrollTo(myID) {
	var location = '#' + myID;
	$(document.body).animate({
		'scrollTop' : $(location).offset().top -50
	}, 700);
}

function reset() {
	init = 0;
	scrollTo('Top');
}

function closeNav() {
	var navMain = $("#nav-main");
	$("#nav-main").click();
	console.log('bio-nav clicked');
}


/* 

	  <li><a href="#"><img src="./assets/MichaelGrimesHeaderLogo.png" style="margin-top: 5px" id="topLink"></img></a></li>
	  <li class="w3-hide-small"><a href="#about" class="w3-padding-large " id="aboutLink">ABOUT</a></li>
	  <li class="w3-hide-small"><a href="#tour" class="w3-padding-large" id="datesLink">DATES</a></li>
	  <li class="w3-hide-small"><a href="#discog" class="w3-padding-large" id="musicLink">MUSIC</a></li>
	  <li class="w3-hide-small"><a href="#contact" class=" w3-padding-large" id="contactLink">CONTACT</a></li>
	  
	   */
	  
	  

$(document).ready(function () {

	
	$('#contactLink').click(function () {
		scrollTo('contact');
		closeNav();
	});

	$('#musicLink').click(function () {
		scrollTo('discog');
		closeNav();
	});

	$('#datesLink').click(function () {
		scrollTo('tour');
		closeNav();
	});
	
	$('#aboutLink').click(function () {
		scrollTo('about');
		closeNav();
	});
	
	$('#topLink').click(function () {
	scrollTo('tippety-top');
	closeNav();
	console.log("top link clicked")
	});
	

});

