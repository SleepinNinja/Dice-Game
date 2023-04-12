var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var winnerText = document.querySelector('.container h1');

function generateRandom() {
	var randomNum = Math.floor(Math.random() * 6 + 1);
	return randomNum;
}

function declareWinner(num1, num2) {
	if (num1 > num2) {
		winnerText.textContent = '🚩 Player 1 Wins!';
	}

	else if (num1 < num2) {
		winnerText.textContent = 'Player 2 Wins! 🚩';
	}

	else {
		winnerText.textContent = 'Draw';
	}
}

function changeDice() {
	var rand1 = generateRandom();
	var rand2 = generateRandom();
	image1.setAttribute('src', 'images/dice' + rand1 + '.png');
	image2.setAttribute('src', 'images/dice' + rand2 + '.png'); 
	declareWinner(rand1, rand2);
}

changeDice();

