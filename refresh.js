window.onload = init;
var bigScore = 0;
function init(){
	var button = document.getElementById("addButton");
	var button2 = document.getElementById("startButton");
	button.onclick = handleButtonClick;
	button2.onclick = startTimer;
}		
	
function handleButtonClick(){
			
			var textInput = document.getElementById("songTextInput");
			var songName = textInput.value;
			if(songName==""){
				alert("Please enter a valid word.");
				return false;
			}
			var first = songName.charAt(0).toUpperCase();
			if(first != "P"){
			alert("Words must start with the letter P!");
			return false;
			}
			var score = songName.length * 2 + 3;
			var li = document.createElement("li");
			bigScore = bigScore + score;
			li.innerHTML = songName.toUpperCase() + ", " + score + " , " + "Total Score = " + bigScore;
			var ul = document.getElementById("playlist");
			ul.appendChild(li);
			textInput.value = '';
}

function startTimer(){
	var button3 = document.getElementById("startButton");
	button3.disabled = 'true';
		var count=180;
		var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

		function timer()
		{
  		count=count-1;
  		var letter1 = document.getElementById("missing").innerHTML = "A is disabled!";
  		var letter2 = document.getElementById("missing").innerHTML = "C, B, and X are disabled!";
  		var letter3 = document.getElementById("missing").innerHTML = "A, B, E, O, and T are disabled!";
  		if(count <= 180 && count >= 120){
  			document.getElementById("missing").innerHTML = letter1;
  		}else{
  			letter1 = ' ';
  			document.getElementById("missing").innerHTML = letter1;
  			if(count <= 120 && count >= 60){
  			document.getElementById("missing").innerHTML = letter2;
  		}else{
  			letter2 = ' ';
  			document.getElementById("missing").innerHTML = letter2;
  			if(count <= 60){
  			document.getElementById("missing").innerHTML = letter3;
  		}else{
  			letter3 = ' ';
  			document.getElementById("missing").innerHTML = letter3;
  		}
  		}
  		}
  		
  		
  		if (count <= 0)
  		{
     	clearInterval(counter);
     	alert("Battle ended, your final score is: " + bigScore);
     		return;
  		}else if (count <= 180 && count >=120){
  			document.onkeydown = function (e){
			if(e.which == 65){
				return false;
			}
		};
     	}
     	if (count <= 120 && count >=60){
  			document.onkeydown = function (e){
			if(e.which == 67 || e.which == 66 || e.which == 88){
				return false;
			}
		};
     	}
     	if (count <= 60){
  			document.onkeydown = function (e){
			if(e.which == 65 || e.which == 66 || e.which == 69 || e.which == 79 || e.which == 84){
				return false;
			}
		};
     	}
document.getElementById("timer").innerHTML=count + " secs";
		}
}