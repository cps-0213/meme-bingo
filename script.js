const BINGO_SIZE = 5;
const socket = io('http://localhost:3000');

let drawnNumbers = {};  // 抽選結果を管理するオブジェクト

const fixedImages = [
    ["a1.png", "b1.png", "c1.png", "d3.png", "e7.png"],
    ["a6.png", "b3.png", "c3.png", "d2.png", "e8.png"],
    ["a2.png", "b5.png", "free.png", "d1.png", "e9.png"],
    ["a7.png", "b7.png", "c7.png", "d9.png", "e4.png"],
    ["a3.png", "b8.png", "c9.png", "d8.png", "e5.png"]
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

function updateBingoCard() {
    const bingoCard = document.getElementById('bingo-card');
    const cells = bingoCard.getElementsByTagName('div');

    for (let i = 0; i < cells.length; i++) {
        const img = cells[i].getElementsByTagName('img')[0];
        const imgName = img.src.split('/').pop().split('.').shift();  // ファイル名から番号部分を抽出

        if (drawnNumbers[imgName]) {
            cells[i].style.backgroundColor = '#ccc';  // グレーアウト
        }
    }
}

// サーバーから新しい番号が送信されてきた時の処理
socket.on('newNumber', (number) => {
    drawnNumbers[number] = true;
    updateBingoCard();
});

// サーバーから現在の抽選結果を受け取る
socket.emit('getDrawnNumbers');
socket.on('drawnNumbers', (numbers) => {
    drawnNumbers = numbers;
    updateBingoCard();
});

// ページロード時にビンゴカードを生成
window.onload = function() {
    generateBingoCard();
};
