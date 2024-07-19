const BINGO_SIZE = 5;
const MAX_NUMBER = 45;  // 画像の数に合わせて45に変更
let drawnNumbers = [];

// 固定のビンゴカード番号配列
const fixedNumbers = [
    [1, 16, 31, 46, 61],
    [2, 17, 32, 47, 62],
    [3, 18, 'FREE', 48, 63],
    [4, 19, 34, 49, 64],
    [5, 20, 35, 50, 65]
];

function generateBingoCard() {
    const bingoCard = document.getElementById('bingo-card');
    bingoCard.innerHTML = '';

    for (let i = 0; i < BINGO_SIZE; i++) {
        for (let j = 0; j < BINGO_SIZE; j++) {
            const cell = document.createElement('div');
            if (fixedNumbers[i][j] === 'FREE') {
                cell.textContent = 'FREE';
                cell.classList.add('free');
            } else {
                const img = document.createElement('img');
                img.src = `images/${fixedNumbers[i][j]}.png`;  // 画像のパスを指定
                cell.appendChild(img);
            }
            bingoCard.appendChild(cell);
        }
    }
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
