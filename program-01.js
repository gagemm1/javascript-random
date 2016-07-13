function changeImage() {
    	var image = document.getElementById('myImage');
    	if (image.src.match("images/lightbulbOff")) {
        	image.src = "images/lightbulb.png";
    	} 
    	else {
        	image.src = "images/lightbulbOff.png";
    	}
}

function changeSize() {
	var image = document.getElementById('otherImage');
	if (image && image.style) {
		image.style.height='100px';
		image.style.width='100px';
	}
}

function numberCheck(){
	var check = document.getElementById('randomNumberCheck');
	if (check.value<50 || check.value>75){
		window.alert("the number is outside the acceptable range!");
	}
}

function eraseEverything(){
	var top = document.getElementById('bottom');
	var bottom = document.getElementById('top');
	if (top.style.display=='none'){
		top.style.display='block';
		bottom.style.display='none';
	}
	else {
		top.style.display = 'none';
		bottom.style.display = 'block';
	}
}

function changeBackground(){
	document.body.style.backgroundColor="#6699CC";
	window.alert("Page...TERMINATED! I mean, cleared");
}

function notThereYet(){
	first.innerHTML=='';
}

function colorful(){
	document.getElementById("first").style.color = "#585858";
	document.getElementById("first").style.font = "italic bold 20px arial, serif";
	console.log(document.getElementbyId('first'));
}

function operations(){
	var firstNumber = document.getElementById("firstNumber").value;
	var secondNumber = document.getElementById("secondNumber").value;
	if (document.getElementById("add").checked){
		var result = +firstNumber+(+secondNumber);
	}
	else if (document.getElementById("subtract").checked){
		var result = firstNumber-secondNumber;
	}
	else if (document.getElementById("multiply").checked){
		var result = firstNumber*secondNumber;
	}
	else if (document.getElementById("divide").checked){
		var result = firstNumber/secondNumber;
	}
window.alert(result);
}
	
function add(){
	var numberOne = document.getElementById("numberOne").value;
	var numberTwo = document.getElementById("numberTwo").value;
	var something = numberOne+numberTwo;
window.alert(something);
}

function modulonimbus(){
	var modulus = document.getElementById("moduloOne").value;
	var modulous = modulus % 2;
	if (modulous ==0){
		var oddity = true;
		window.alert("It's an even number!");
	}
	else{
		var oddity = false;
		window.alert("It's an odd number!");
	}
}

function increments(){
	if (document.getElementById("02").checked){
		document.getElementById("box").value++;
	}
	else if (document.getElementById("01").checked){
		document.getElementById("box").value--;
	}
	
}

function call(value){
      var x=document.getElementById("message");
      x.innerHTML = value;
    }


	
