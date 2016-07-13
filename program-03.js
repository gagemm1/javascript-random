function regularExpression() {
	"use strict";
    var string01 = document.getElementById("string01").value;
    var string02 = document.getElementById("string02").value;
    var n = string01.search(string02);
    if (string01.indexOf(string02)>=0){
    	alert("The text has been found");
    }
    else{
    	alert("The word in the second box was not found");
    }
}


function replacements() {
    var string03 = document.getElementById("string03").value;
    var string04 = document.getElementById("string04").value;
    var re=new RegExp(string04,"g");
    var a=string03.replace(re,"yippie ki-yay");
    document.getElementById("found").innerHTML=a;
}

function check() {
    var tries, x;
    tries = document.getElementById("try");
    tries.innerHTML="";
    x = document.getElementById("number01").value;
    try { 
        if (x=="") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 500) throw "too low";
        if(x > 2000) throw "too high";
    }
    catch(err) {
        tries.innerHTML = "Input is " + err;
    }
}

function buggy(){
	a=5;
	b=10;
	debugger;
	c=5/10;
	document.getElementById("keyword").innerHTML=c;
}


function json(){
	var text = '{"employees":[' +
	'{"stateName":"Texas","capitalName":"Austin","qualityRating":"10"},' +
	'{"stateName":"Better Texas","capitalName":"Democratic","qualityRating":"5"},' +
	'{"stateName":"Guns and Texas","capitalName":"M 16","qualityRating":"8"},' +
	'{"stateName":"Beer and Texas","capitalName":"Adelberts","qualityRating":"10"}]}';
	obj = JSON.parse(text);
	for (i=0;i<4;i++){
	document.getElementById("json").innerHTML +=
	obj.employees[i].stateName + " , " + obj.employees[i].capitalName + " , " + obj.employees[i].qualityRating + "<br>";
	}
}

function validateSubmission(){
    if (document.forms[0].firstName.value=="" || document.forms[0].lastName.value=="") {
        window.alert("Either a first or last name is missing");
        return false;
    }
    else{
    	alert("You got it");
    }
}

function lukeSkywalker() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
        txt = "too overinflated";
    } 
    else if (document.getElementById("id1").validity.rangeUnderflow) {
        txt = "too underappreciated";
    }
    else if (document.getElementById("id1").validity.valueMissing) {
    	txt="these aren't the droids you're looking for";
    } 
    document.getElementById("theForce").innerHTML = txt;
}

function objects(){
	var x = 5;
	document.getElementById("objectLiteral").innerHTML=x;
	var z = new String("Hello, clarice");
	document.getElementById("boogers").innerHTML=z;
	function person(first, last){
		this.firstName = first;
		this.lastName = last;
	}
	var myFather= new person("John", "");
	document.getElementById("objectConstructor").innerHTML=myFather.firstName;
	var objectify = [myFather.firstName, x , z];
	for (i=0;i<3;i++){
	document.getElementById("display").innerHTML+= objectify[i] + " , ";
	}
	var lastName = new person("", "Doe");
	document.getElementById("newProperty").innerHTML = lastName.lastName;
	var lastName = new person ("", "");
	alert("The last name has been deleted");
}


function changeSpeed(){
	if (document.getElementById("bike").innerHTML ==""){
		var x = 0;
		function person(first){
		this.firstName = first;
		}
		var myFather = new person(x, "");
		document.getElementById("bike").innerHTML = myFather.firstName;
		person.prototype.salary = null;
		person.salary = 200;
		document.getElementById("prototype").innerHTML = person.salary;
	}
	else{
		var x = document.getElementById("bike").innerHTML;
	}
	var y = document.getElementById("speed").value;
	x =+x+(+y);
	document.getElementById("bike").innerHTML = x;
}











































