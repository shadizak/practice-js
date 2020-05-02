'use strict';
// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// var fName = prompt ("Enter Your First Name");
// var lName = prompt ("Enter Your Last Name");
// var mobile = prompt ("Enter Your Mobile Number");
// var email = prompt("Enter Your Email");
 

// if (hourNow > 18) {
//     greeting = 'Good evening, ';
//   } else if (hourNow > 12) {
//     greeting = 'Good afternoon, ';
//   } else if (hourNow >= 0) {
//     greeting = 'Good morning,';
//   } else {
//     greeting = 'Hi';
//   }

function userOrder(){
  var userOrder = prompt('What would you like to order? hotel or house');
  var item;

  while(userOrder !== 'hotel' && userOrder !== 'house' ){
    userOrder = prompt('What would you like to order? hotel or house');
  }

  var itemNum = prompt('haw many item do you want to print');
  for(var i = 0; i< itemNum;i++){
    if(userOrder === 'hotel'){
      if (i == 0 ){item = '<img src="images/hotel.png" >';}
      item = item + '<img src="images/hotel.png" >';

    }else if(userOrder === 'house'){
      if (i == 0 ){item = '<img src="images/house.png" >';}
      item = item + '<img src="images/house.png" >';
    }
  }
  return item;
}

//document.write('<h3>'+greeting + fName +"<br>"+'First Name: '+fName  +"<br>"+'Last Name: ' +lName +"<br>"+ 'Mobile Number '+ mobile+ +"<br>"+'Email '+ email+'</h3>');
