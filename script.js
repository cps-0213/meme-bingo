const BINGO_SIZE = 5;
const MAX_NUMBER = 45;  // 画像の数に合わせて45に変更
let drawnNumbers = [];

function generateBingoCard() {
    const bingoCard = document.getElementById('bingo-card');
    bingoCard.innerHTML = '';
    const numbers = generateBingoNumbers();

    for (let i = 0; i < BINGO_SIZE; i++) {
        for (let j = 0; j < BINGO_SIZE; j++) {
            const cell = document.createElement('div');
            if (i === 2 && j === 2) {
                cell.textContent = 'FREE';
                cell.classList.add('free');
            } else {
                const img = document.createElement('img');
                img.src = `images/${numbers[i][j]}.png`;  // 画像のパスを指定
                cell.appendChild(img);
            }
            bingoCard.appendChild(cell);
        }
    }
}

function generateBingoNumbers() {
    const numbers = Array.from({ length: BINGO_SIZE }, (_, i) => {
        const start = i * 15 + 1;
        const end = start + 15;
        return shuffle(Array.from({ length: 15 }, (_, j) => start + j)).slice(0, BINGO_SIZE);
    });

    return numbers[0].map((_, colIndex) => numbers.map(row => row[colIndex]));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function drawNumber() {
    if (drawnNumbers.length >= MAX_NUMBER) return;

    let number;
    do {
        number = Math.floor(Math.random() * MAX_NUMBER) + 1;
    } while (drawnNumbers.includes(number));

    drawnNumbers.push(number);
    displayDrawnNumbers();
}

function displayDrawnNumbers() {
    const drawnNumbersDiv = document.getElementById('drawn-numbers');
    drawnNumbersDiv.innerHTML = '';
    drawnNumbers.sort((a, b) => a - b).forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = number;
        drawnNumbersDiv.appendChild(numberDiv);
    });
}

