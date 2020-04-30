'use strict';
var today = new Date();
var hourNow = today.getHours();
var greeting;

var fName = prompt ("Enter Your First Name");
var lName = prompt ("Enter Your Last Name");
var mobile = prompt ("Enter Your Mobile Number");
var email = prompt("Enter Your Email");
 

if (hourNow > 18) {
    greeting = 'Good evening, ';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, ';
  } else if (hourNow >= 0) {
    greeting = 'Good morning,';
  } else {
    greeting = 'Hi';
  }

document.write('<h3>'+greeting + fName +"<br>"+'First Name: '+fName  +"<br>"+'Last Name: ' +lName +"<br>"+ 'Mobile Number '+ mobile+ +"<br>"+'Email '+ email+'</h3>');
