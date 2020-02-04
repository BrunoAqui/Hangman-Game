//Database with the words
var words = ['CAR','ORANGE','BLUE','NIGHT','SUN','LOVE','HOUSE','SEA','EYES','BLACK','PINK','SHOES','HAT','RAT','DOG','HOSPITAL','APPLE','MOON','WARRIOR','BRAZIL','VENEZUELA','COURAGE','FOOTBALL','BASKET','TOMATO','FERRARI']

//Code to change the color of the keyboard
var keycolor
var keyFont

function keyboardBright(keyName){
	keyColor = document.getElementById('key' + keyName);
	keyColor.style.backgroundColor = "#F4E9C1";
	keyFont = document.getElementById('keyText' + keyName);
	keyFont.style.color = "#86C2B4";
}
function keyboardBrightOff(keyName){
	keyColor = document.getElementById('key' + keyName)
	keyColor.style.backgroundColor = "#86C2B4"
	keyFont = document.getElementById('keyText' + keyName)
	keyFont.style.color = "#F4E9C1"
}

//Code for making the adaptive board
var divCreate, divStyle, divName, spanCreate, spanName, spanStyle
var gameBoard
var divWidth = 0, divHeight = 0
var letterPosition = 0
var selectedWord = new Array
var randomWord = 0

function keyLettersCreate(){
	letterPosition = 0;
	randomWord = Math.floor(Math.random() * words.length);
	selectedWord = words[randomWord].split("");
	
	//Disabled for more challenge
	//alert(selectedWord);
	
	divWidth = (980/selectedWord.length);
	divHeight = divWidth;
	
	while(letterPosition<selectedWord.length){
		divName = 'letter' + letterPosition;
		spanName = 'letterText' + letterPosition;
		
		divCreate = document.createElement('DIV');
		divCreate.setAttribute('id', divName);
		divCreate.setAttribute('class', 'letterBoard');
		
		spanCreate = document.createElement('SPAN');
		spanCreate.setAttribute('id', spanName);
		spanCreate.setAttribute('class', 'letterText');
		
		document.getElementById('gameBoardLetters').appendChild(divCreate);
		divCreate.appendChild(spanCreate);
		
		divStyle = document.getElementById(divName);
		divStyle.style.width = divWidth + 'px';
		divStyle.style.height = divHeight + 'px';
		
		spanStyle = document.getElementById(spanName);
		spanStyle.style.fontSize = divWidth-(divWidth * 0.1);
		
		letterPosition++
	}		
}

//Code for the actions of the keyboard when a letter is selected
var checkMistake = true;
var letterTextPut;
var firstTime = 0;
var countWin = 0;


function disableColor(letterSelected){
	keyColor = document.getElementById('key' + letterSelected)
	keyFont = document.getElementById('keyText' + letterSelected)
			
	keyColor.setAttribute('onmouseleave', '-')
	keyColor.setAttribute('onmouseover', '-')
	keyColor.setAttribute('onclick', '-')

	keyColor.style.backgroundColor = '#c28686'
	keyFont.style.color = '#F4E9C1'
}
function keyboardAction(letterSelected){
	letterPosition = 0;
	
	while(letterPosition <= selectedWord.length){
		if(selectedWord[letterPosition] == letterSelected){
			if(firstTime == 0){
				keyColor = document.getElementById('key' + letterSelected)
				keyFont = document.getElementById('keyText' + letterSelected)
				
				keyColor.setAttribute('onmouseleave', 'null')
				keyColor.setAttribute('onmouseover', 'null')
				keyColor.setAttribute('onclick', 'null')
				
				keyColor.style.backgroundColor = '#8ec286'
				keyFont.style.color = '#F4E9C1'
				
				firstTime = 1;
				checkMistake = false
			}
			countWin++
			void(document.getElementById("letterText" + letterPosition).innerHTML = selectedWord[letterPosition]);
			
			if(countWin >= selectedWord.length){
				alert("You WON! Restart the game for more fun!");
			}
		}
		letterPosition++
		
	}
	
	firstTime = 0;
	
	if(checkMistake == true){
		disableColor(letterSelected)
	}
	checkMistake = true;
}

//Code for executing things after the loading of the page
window.onload = function(){
	keyLettersCreate()
}
