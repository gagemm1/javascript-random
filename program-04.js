

function getDate(){
	var a = new Date();
	var e = a.getHours();
	var f = a.getMinutes();
	var g = a.getSeconds();
	var b = a.getDate();
	var c = a.getMonth();
	var d = a.getFullYear();
	document.getElementById("dateDisplay").innerHTML = e + ':' + f + ':' + g + '' + b + '-' + c + '-' + d;
	(function() {
	document.getElementById("dateDisplay").style.color = "white";
	})();
}

function colors(black,red,green,blue) {
    var x = document.getElementById("mySelect").value;
    if (x == black){
    	return black;
    }
    else if (x == red){
    	return red;
    }
    else if (x == green){
    	return green;
    }
    else if (x == blue){
    	return blue;
    }
    document.getElementById("dateDisplay").style.color = colors(x);
}

function myFunction() {
    var y =navigator.cookieEnabled;
    if (y==true){
    	z = ", cookies are enabled";
    }
    else if (y==false){
    	z = ", cookies are disabled";
    }
    document.getElementById("demo").innerHTML = y + z;
}


var counter = 1;

function closure(){
    document.getElementById("closure").innerHTML = counter;
    var a = document.getElementById("random");
    a.innerHTML = Math.floor((Math.random()*100)+1);
}

function toggle() {
	var y = document.getElementById("redisplay");
	var x = document.getElementsByClassName("paragraph");
    var i;
	if (y.style.display=='none'){
		y.style.display='block';
    	for (i=0; i<x.length; i++){
   		document.getElementById("redisplay").innerHTML += x[i].innerHTML + "<br>";
    	}
    }
    else {
    	y.style.display='none';
    	document.getElementById("redisplay").innerHTML = '';
    }	
}



function changeFont(){
	document.getElementById("redisplay").style.fontSize = "20px";
	var x = document.getElementsByClassName("paragraph");
	for (i=0; i<x.length; i++){
   		x[i].style.fontSize = "20px";
    	}
}

function displayAll(){
	var x = document.body.innerHTML;
	document.getElementById("displayAll").innerHTML = x;
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("images-program-04/engine1")) {
        image.src = "images-program-04/engine2.jpg";
    } 
    else {
        image.src = "images-program-04/engine1.jpg";
    }
}

function appendage (){
	var capa = document.createElement('p');
	var node = document.createTextNode("I've just been created!");
	capa.appendChild(node);
	var papa = document.getElementById("mama");
	papa.appendChild(capa);
}

function countParagraphs() {
    var p = document.body.getElementsByTagName("p").length;
    document.getElementById("howManyParagraphs").innerHTML = "There are " + p + " paragraphs in the document body";
}

function visibility(id) {
	var e = document.getElementById("myImage");
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}

document.getElementById("myBtn").addEventListener("mouseover", asdf);

function asdf() {
    document.getElementById("myBtn").style.backgroundColor = 'green';
}











