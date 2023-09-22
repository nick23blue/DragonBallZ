/* Author: Nicholas Lee
Date: 4/23/2020

Filename: Lee.js
*/


function favShows(){
	document.write("<ol>");
	    document.write("<li>Awakening</li>");
	    document.write("<li>Final Atonement</li>");
	    document.write("<li>The Last Defense</li>");
	document.write("</ol>");
}

function reviews(e){
	var name = document.getElementById("field1");
	var email = document.getElementById("field2");
	var age = document.getElementById("field3");
	var male = document.getElementById("field4");
	var female = document.getElementById("field5");
	var perfernottoanswer = document.getElementById("field6");
	var other = document.getElementById("field7");
	
	if(name.value !="" && email.value !="" && age.value !="" && (male.checked || female.checked || perfernottoanswer.checked || other.checked) ){
		
	alert("You have filled in all fields");
	}else{
		alert("You are missing data");
		e.preventDefault();
	}
}

function actors(DBZ){
	alert("You have clicked on the actor" + DBZ);
}

var title = ["The Unleashing", "Final Atonement", "The Last Defense", "The Mysterious Youth", "Free The Future",
              "The Monster Is Coming", "He's Here", "Sacrifice"];

var date = ["December 13, 2000", "November 13, 2001", "October 31, 2000", "September 5, 2000", "December 29, 2000",
             "October 16, 2000", "October 17, 2000", "October 23, 2000"];
			 
var length = ["24 min", "24 min", "24 min", "24 min", "24 min", "24 min", "24 min", "24 min"];

var reception = ["7.2/10", "8.6/10", "6.3/10", "8.2/10", "7.2/10", "7.8/10", "7.0/10", "7.2/10"];

function episodes(){
	document.write("<table>");
    document.write("<tr>");
	document.write("<th>Episode Title</th>");
	document.write("<th>Date Aired</th>");
	document.write("<th>Length of Episode</th>");
	document.write("<th>Viewer Reception</th>");
	document.write("</tr>");
	
	for(var i = 0; i < title.length; i++){
		document.write("<tr>");
		document.write("<td>" + title[i] + "</td>");
			document.write("<td>" + date[i] + "</td>");
			document.write("<td>" + length[i] + "</td>");
			document.write("<td>" +reception[i] + "</td>");
			document.write("</tr>");
	}
	document.write("</tr>");
}
