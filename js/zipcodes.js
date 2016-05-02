$(document).ready(function() {
	//testing to see that js can access the form
	console.log(document.forms[0].elements[0]);
});

/*********** ZIP CODE FORM SUBMISSION MESSAGE ************/
// (function() {
// 	var form = document.getElementById('zipcode');

// //add event listener to zip code form
// 	addEvent(form, 'submit', function(e) {
// //stop zip code data from being sent
// 		e.preventDefault();
// //gather all form data
// 		var elements = this.elements;
// //select zip code data
// 		var userZipCode = elements.userzipcode.value;
// //create message to show user's city re: the zip code. placeholder thanks
// 		var msg = 'Thanks!';
// //write message to page
// 		document.getElementById('form-zipcode').textContent=msg;
// 	});
// }());

var form = document.getElementById('zipcode');
var elements = form.elements;
var elUserZipCode = elements.userzipcode;
var elSection = document.getElementById('form-zipcode');
addEvent(form, 'submit', function(e) {
	e.preventDefault();
	var msg = 'Thanks ' + elUserZipCode.value + '!';
	elSection.textContent = msg;
});

/******************************************/

function addEvent(el, event, callback) {
	if ('addEventListener' in el) {
		el.addEventListener(event, callback, false);
	} else {
		el['e' + event + callback] = callback;
		el[event + callback] = function() {
			el['e' + event + callback](window.event);
		};
		el.attachEvent('on' + event, el[event + callback]);
	}
}

function formInput() {
	var userZipCode = document.getElementsByName("user-zip")[0].value;
	console.log(userZipCode);
}