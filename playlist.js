window.onload = init;
function init(){
	var button = document.getElementById("addButton");
	var button2 = document.getElementById("startButton");
	button.onclick = handleButtonClick;
	button2.onclick = startTimer;	
}		

document.onkeydown = function (e){
			if(e.which == 65 || e.which == 88 || e.which == 66 || e.which == 79 || e.which == 84){
				return false;
			}
		}	
function handleButtonClick(){
			var textInput = document.getElementById("songTextInput");
			var songName = textInput.value;
			if(songName==""){
				alert("Please enter a valid word.");
				return false;
			}
			var score = songName.length * 2 + 3;
			
			var li = document.createElement("li");
			
			li.innerHTML = songName + ", " + score;
			
			var ul = document.getElementById("playlist");
			ul.appendChild(li);
}

function startTimer(){
		var count=120;
		var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

		function timer()
		{
  		count=count-1;
  		if (count <= 0)
  		{
     	clearInterval(counter);
     	alert("Battle ended");
     		return;
  		}
document.getElementById("timer").innerHTML=count + " secs";
		}
}
		
