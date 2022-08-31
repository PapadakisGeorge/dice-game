const playButton = document.getElementsByClassName('play-btn')[0];
const gameTitle = document.getElementsByClassName('header-title')[0];
const image1 = document.getElementsByClassName('img1')[0];
const image2 = document.getElementsByClassName('img2')[0];

const generateRandomInteger = (range) => {
    return Math.floor(1 + Math.random() * range)
}
const rollTheDice = () => {
    const firstPlayerRoll = generateRandomInteger(6);
    const secondPlayerRoll = generateRandomInteger(6);
    return {firstPlayerRoll, secondPlayerRoll}
}


const diceGameWinner = (winner) => {
    if(winner === 1) {
        return `🥇 Player ${winner} wins!!!`
    } else if (winner === 2) {
        return `Player ${winner} wins!!! 🥇`
    }

    return '💩 It\'s a tie... 💩'
}

const changeImages = (newImage1, newImage2) => {
    image1.setAttribute('src', newImage1);
    image2.setAttribute('src', newImage2);

}
const playTheDiceGame = () => {
    const {firstPlayerRoll, secondPlayerRoll} = rollTheDice();

    changeImages(
        `images/dice${firstPlayerRoll}.png`,
        `images/dice${secondPlayerRoll}.png`
    );
    if (firstPlayerRoll > secondPlayerRoll) {
        gameTitle.innerHTML = diceGameWinner(1);
    } else if (firstPlayerRoll < secondPlayerRoll){
        gameTitle.innerHTML = diceGameWinner(2);
    } else {
        gameTitle.innerHTML = diceGameWinner(0);
    }
}

playButton.addEventListener('click', playTheDiceGame);