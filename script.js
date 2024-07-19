const BINGO_SIZE = 5;
const MAX_NUMBER = 45;  // 画像の数に合わせて45に変更
let drawnNumbers = [];

// 固定のビンゴカード画像配列
const fixedImages = [
    ["1.png", "2.png", "3.png", "4.png", "5.png"],
    ["6.png", "7.png", "8.png", "9.png", "10.png"],
    ["11.png", "12.png", "free.png", "13.png", "14.png"],
    ["15.png", "16.png", "17.png", "18.png", "19.png"],
    ["20.png", "21.png", "22.png", "23.png", "24.png"]
];

function generateBingoCard() {
    const bingoCard = document.getElementById('bingo-card');
    bingoCard.innerHTML = '';

    for (let i = 0; i < BINGO_SIZE; i++) {
        for (let j = 0; j < BINGO_SIZE; j++) {
            const cell = document.createElement('div');
            const img = document.createElement('img');
            img.src = `images/${fixedImages[i][j]}`;  // 画像のパスを指定
            cell.appendChild(img);

            if (fixedImages[i][j] === "free.png") {
                cell.classList.add('free');
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
