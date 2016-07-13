window.addEventListener("resize", function(){
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);;
    
});


function toggle(button){
	if(document.getElementById("1").value=="OFF"){
		document.getElementById("1").value="ON";
		y = document.getElementById("timer").value;
		myVar = setInterval(randomize,y);
	}
	else if(document.getElementById("1").value=="ON"){
		document.getElementById("1").value="OFF";
		clearTimeout(myVar);
	}
}

<form action="">
				<input type="button" id="1" value="ON" style="color:blue" onclick="toggle(this);">
			</form>














