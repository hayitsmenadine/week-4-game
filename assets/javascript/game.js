
$(document).ready(function () {
	
	var winner = 0;
	var loser = 0;
	var userScore = 0;

	function getRandomInt (min, max) {
	return Math.floor(Math.random() *(max - min +1)) + min;	
}
	var randomCompNum = getRandomInt (15, 75);
	$("#compScore").html(randomCompNum);
	

	function check() {
	if(userScore === randomCompNum) {
		winner++;
		$("#win").append(winner);
		alert("You win! Congrats!");
		userScore=0;
		// randomCompNum = getRandomInt(15, 75);
		$("compScore").html(randomCompNum);

	} else if (userScore > randomCompNum){
		loser++;
		$("#lose").append(loser);
		alert("You lose! Better luck next time!");
		userScore = 0;
		// randomCompNum = getRandomInt(15,75);
		$("compScore").html(randomCompNum);
	}
};



$("#bluecrystal").on("click", function() {
	// alert("clicked!");
	var randNumOne = getRandomInt(0, 9);
	// alert(randNumOne);
	userScore += randNumOne;
	$("#results").html(userScore);
	check();
});

$("#rosecrystal").on("click", function() {
	// alert("clicked!");
	var randNumTwo = getRandomInt(0, 9);
	userScore += randNumTwo;
	$("#results").html(userScore);
		check();
	// alert(randNumTwo);
});

$("#emeraldcrystal").on("click", function () {
	// alert("clicked!");
	var randNumThree = getRandomInt (0, 9);
	userScore += randNumThree;
	$("#results").html(userScore);
	check();
	// alert(randNumThree);
});

$("#purplecrystal").on("click", function() {
	// alert("clicked!");
	var randNumFour = getRandomInt(0, 9);
	userScore += randNumFour;
	$("#results").html(userScore);
	check();
	// alert(randNumFour);
});

});






