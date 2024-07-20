const BINGO_SIZE = 5;
const MAX_NUMBER = 24;  // 画像の数に合わせて24に変更 (freeを除く)
let drawnNumbers = [];

// 固定のビンゴカード画像配列
const fixedImages = [
    ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png"],
    ["a6.png", "a7.png", "a8.png", "a9.png", "b1.png"],
    ["b2.png", "b3.png", "free.png", "b4.png", "b5.png"],
    ["b6.png", "b7.png", "b8.png", "b9.png", "c1.png"],
    ["c2.png", "c3.png", "c4.png", "c5.png", "c6.png"]
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
