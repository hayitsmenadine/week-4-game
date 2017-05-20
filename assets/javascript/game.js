var randomCompNum = [];
var winner = 0;
var loser = 0;
var userScore = 0;

function getRandomInt (min, max) {
	return Math.floor(Math.random() *(max - min +1)) + min;
	
}


function playGame() {
	randomCompNum = getRandomInt (15, 75);
	$("#compScore").text(randomCompNum);

	
	
	if(userScore === randomCompNum) {
		winner++;
		$("#win").text(winner);
		$("#scores").text("You win! Congrats!");
	} else if (userScore > randomCompNum){
		loser++;
		$("#lose").text("You lose! Beter luck next time!")
	}



$("#bluecrystal").on("click", function() {
	// alert("clicked!");
	var randNumOne = getRandomInt(0, 9);
	// alert(randNumOne);
	$("#results").append("<div>" + randNumOne + "<div>");
});

$("#rosecrystal").on("click", function() {
	// alert("clicked!");
	var randNumTwo = getRandomInt(0, 9);
	$("#results").append("<div>" +randNumTwo + "<div>");
	// alert(randNumTwo);
});

$("#emeraldcrystal").on("click", function () {
	// alert("clicked!");
	var randNumThree = getRandomInt (0, 9);
	$("#results").append("<div>" +randNumThree + "<div>");
	// alert(randNumThree);
});

$("#purplecrystal").on("click", function() {
	// alert("clicked!");
	var randNumFour = getRandomInt(0, 9);
	$("#results").append("<div>" +randNumFour + "<div>");
	// alert(randNumFour);
});

};

playGame();




