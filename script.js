const BINGO_SIZE = 5;
const MAX_NUMBER = 24;  // 画像の数に合わせて24に変更 (freeを除く)
let drawnNumbers = [];

// 固定のビンゴカード画像配列
const fixedImages = [
    ["a1.png", "b1.png", "c1.png", "d3.png", "e7.png"],
    ["a6.png", "b3.png", "c3.png", "d2.png", "e8.png"],
    ["a2.png", "b5.png", "free.png", "d1.png", "e9.png"],
    ["a7.png", "b7.png", "c7.png", "d9.png", "e4.png"],
    ["a3.png", "b8.png", "c94.png", "d8.png", "e5.png"]
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
