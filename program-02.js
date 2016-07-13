function concatenate() {
    var x = document.getElementById("numberOne").value+document.getElementById("numberTwo").value;
    document.getElementById("dummie").innerHTML = x;
}

function string(){
	if(document.getElementById("textarea").value==document.getElementById("textbox").value){
		window.alert("The strings are identical");
	}
	else {
		window.alert("The strings are not identical");
	}		
}	

function slice(){
	var vegetables = [document.getElementById("01").value, document.getElementById("02").value, document.getElementById("03").value];
	var lemons = vegetables.slice(0,2);
	var x = lemons;
	document.getElementById("slice").innerHTML=x;
}

function substring(){
	var veggies = document.getElementById("01").value;
	var melon = veggies.substring(1,4);
	document.getElementById("substring").innerHTML=melon;
}

function substr(){
	var veggies = document.getElementById("01").value;
	var melons = veggies.substr(1,4);
	document.getElementById("substr").innerHTML=melons;
}

function myFunction(){
	var str=document.getElementById("original").value;
	var first=document.getElementById("replace").value;
	var second=document.getElementById("new").value;	
	var res=str.replace(first,second);
	document.getElementById("result").innerHTML=res;
}

function flowers(){
	var string=document.getElementById("flowers").value;
	var array = string.split('&');
	document.getElementById("array").innerHTML=array;
}

function division(){
	var division=document.getElementById("04").value/document.getElementById("05").value;
	document.getElementById("division").innerHTML=division;
	document.getElementById("advice").innerHTML="Submit again and enter a string in the second text box";
}

function maxandMin(){
	document.getElementById("max").innerHTML = Number.MAX_VALUE;
	document.getElementById("min").innerHTML = Number.MIN_VALUE;
}

function numbers(){
	blahblahblah=true;
	document.getElementById("numberMethod").innerHTML=Number(blahblahblah);
	document.getElementById("parseInt").innerHTML=parseInt("11.33");
	document.getElementById("parseFloat").innerHTML=parseFloat("11.33");
}

function randomize(){
	var x = Math.floor((Math.random() * 7) + 1);
    document.getElementById("random").innerHTML = x;
	
}

function exponents(){
	var one=document.getElementById("one").value;
	var two=document.getElementById("two").value;
	var z=Math.pow(one,two);
	document.getElementById("exponents").innerHTML=z;
}

function dates(){
	var a=new Date();
	document.getElementById("date01").innerHTML=a;
	var b=new Date("October 13, 2014 11:13:00");
	document.getElementById("date02").innerHTML=b;
	var c=new Date(86400000);
	document.getElementById("date03").innerHTML=c;
	var d=new Date(99,5,24,11,33,30,0);
	document.getElementById("date04").innerHTML=d;
}

function setDate(){
	var e = new Date();
    e.setDate(15);
    document.getElementById("setDate").innerHTML = e;
    var f=new Date();
    f.getDate();
    document.getElementById("getDate").innerHTML=f;
    var g=new Date();
    g.setMonth(4);
    document.getElementById("setMonth").innerHTML=g;
    var h=new Date();
    h.getMonth();
    document.getElementById("getMonth").innerHTML=h;
    var i=new Date();
    i.setFullYear(2017);
    document.getElementById("setFullYear").innerHTML=i;
    var j=new Date();
    j.getFullYear();
    document.getElementById("getFullYear").innerHTML=j;
}

var treesArray;

function trees(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= document.getElementById("trees04").value;
	var trees05= document.getElementById("trees05").value;
	var trees06= document.getElementById("trees06").value;
	var trees07= document.getElementById("trees07").value;
	var treesArray=[trees01,trees02,trees03,trees04,trees05,trees06,trees07];
	treesArray.toString();
	document.getElementById("treeTypes").innerHTML=treesArray;
}

function trees02(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= document.getElementById("trees04").value;
	var trees05= document.getElementById("trees05").value;
	var trees06= document.getElementById("trees06").value;
	var trees07= document.getElementById("trees07").value;
	var treesArray=[trees01,trees02,trees03,trees04,trees05,trees06,trees07];
	treesArray.toString();
	treesArray.splice(5,6);
	document.getElementById("takeTwo").innerHTML=treesArray;
	document.getElementById("trees06").value="";
	document.getElementById("trees07").value="";
	var hidden="Submit the first button again after entering two new values for tree types 6 and 7";
	document.getElementById("hidden").innerHTML=hidden;
}

function trees03(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= document.getElementById("trees04").value;
	var trees05= document.getElementById("trees05").value;
	var trees06= document.getElementById("trees06").value;
	var trees07= document.getElementById("trees07").value;
	var treesArray=[trees01,trees02,trees03,trees04,trees05,trees06,trees07];
	treesArray.toString();
	treesArray.splice(0,1);
	document.getElementById("takeThree").innerHTML=treesArray;
	document.getElementById("trees01").value="";
	var hidden="Submit the first button again after entering new value for tree type 1";
	document.getElementById("hidden02").innerHTML=hidden;
}

function trees04(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= "Spruce";
	var trees05= document.getElementById("trees04").value;
	var trees06= document.getElementById("trees05").value;
	var trees07= document.getElementById("trees06").value;
	var trees08= document.getElementById("trees07").value;
	var treesArray=[trees01,trees02,trees03,trees04,trees05,trees06,trees07,trees08];
	treesArray.sort();
	document.getElementById("takeFour").innerHTML=treesArray;
}

function trees05(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= "Spruce";
	var trees05= document.getElementById("trees04").value;
	var trees06= document.getElementById("trees05").value;
	var trees07= document.getElementById("trees06").value;
	var trees08= document.getElementById("trees07").value;
	var treesArray02=[trees01,trees02,trees03,trees04];
	var treesArray=[trees01,trees02,trees03,trees04,trees05,trees06,trees07,trees08];
	document.getElementById("takeFive").innerHTML=treesArray02;
	document.getElementById("takeSix").innerHTML=treesArray;
}

function which(){
	var here= document.getElementById("here").value;
	var there= document.getElementById("there").value;
	if (here==there){
		alert("They are equal");
	}
	else{
		if (here>there){
			alert("The first number is greater than the second");
		}
		else {
			alert("The second number is greater than the first");
		}
	}
}

function logicalOperator(){
	var everywhere= document.getElementById("everywhere").value;
	if (everywhere >3 && everywhere<55){
		alert("The number is inside the first range");
	}
	if (everywhere<77 || everywhere>99){
		alert("The number is outside the second range");
	}
}

function names(){
	var names=document.getElementById("names").value;
	if (names.length>5){
		alert("The name is longer than 5 characters");
	}
	else if(names.length>10){
		alert("Wow that must be a long name");
	}
	else if (names.indexOf("a")==1){
		alert("the second letter in the name is an a!");
	}
	else if (names.indexOf("o")==1){
		alert("Did you enter John?");
	}
	else{
		alert("The name you entered did not fit any constraint");
	}
}


function switching(){
	var Animal =document.getElementById("switching").value;
	switch (true) {
  	case (Animal.length>10):
  		alert("Wow that must be a long name");
  		break;
  	case (Animal.length>5):
  		alert("The name is longer than 5 characters");
  		break;
  	case (Animal.indexOf("a")==1):
  		alert("the second letter in the name is an a!");
  		break;
  	case (Animal.indexOf("o")==1):
    	alert("Did you enter John?");
    	break;
  	default:
    	alert("The name you entered did not fit any constraint");
	}
}

function animals(){
	var Animal =document.getElementById("animals").value;
	switch (Animal) {
  	case 'Bird':
  	case 'Seagull':
  		alert("That animal flies");
  		break;
  	case 'Cheetah':
  	case 'Gazelle':
  		alert('That animal Flies');
  		break;
  	case 'Lizard':
  	case 'Scorpion':
  		alert('That animal crawls');
  		break;
  	default:
    	alert('You did not enter an animal that was on the list');
	}
}

function forIn(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= document.getElementById("trees04").value;
	var trees05= document.getElementById("trees05").value;
	var trees06= document.getElementById("trees06").value;
	var trees07= document.getElementById("trees07").value;
	var treesArray = [trees01,trees02,trees03,trees04,trees05,trees06,trees07];
	var text = "";
	var i;
	for (i = 0; i < treesArray.length; i++) {
    	text += treesArray[i] + ",";
	}
document.getElementById("forIn").innerHTML = text;
}
	
function whileLoop(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= document.getElementById("trees04").value;
	var trees05= document.getElementById("trees05").value;
	var trees06= document.getElementById("trees06").value;
	var trees07= document.getElementById("trees07").value;
	var treesArray = [trees01,trees02,trees03,trees04,trees05,trees06,trees07];
	var text = "";
	var i=0;
	while (i<7){
		text+=treesArray[i]+",";
		++i;
	}
document.getElementById("whileLoop").innerHTML = text;
}

function doWhile(){
	var trees01= document.getElementById("trees01").value;
	var trees02= document.getElementById("trees02").value;
	var trees03= document.getElementById("trees03").value;
	var trees04= document.getElementById("trees04").value;
	var trees05= document.getElementById("trees05").value;
	var trees06= document.getElementById("trees06").value;
	var trees07= document.getElementById("trees07").value;
	var treesArray = [trees01,trees02,trees03,trees04,trees05,trees06,trees07];
	var text = "";
	var i=0;
	do{
		text+=treesArray[i]+",";
		i++;
	}
	while (i<7);
	document.getElementById("doWhile").innerHTML = text;
}


















