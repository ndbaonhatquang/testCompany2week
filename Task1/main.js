const boxes = document.querySelectorAll('.box')
const main = document.querySelector('#main');
const reset = document.querySelector('#reset');
const winner = document.querySelector('#winner')
let count = 0;
let isWiner = false;
function getClick() {
    if(isWiner == true) return;
    if(this.innerText) return;
    if(count % 2) this.innerHTML = 'O';
    else this.innerHTML = 'X';
    getWin();
    count++;
}
function selectWin(boxes) {
    boxes.forEach(box => box.style.background = 'red');
    isWiner = true;
    winner.innerHTML = `The Winner is ${count % 2 ? 'O' : 'X'}`;
}

function getWin() {
    if(boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML  == boxes[2].innerHTML && boxes[0].innerHTML != '') selectWin([boxes[0],boxes[1],boxes[2]]);
    if(boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML  == boxes[5].innerHTML && boxes[3].innerHTML != '') selectWin([boxes[3],boxes[4],boxes[5]]);
    if(boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML  == boxes[8].innerHTML && boxes[6].innerHTML != '') selectWin([boxes[6],boxes[7],boxes[8]]);
    if(boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML  == boxes[6].innerHTML && boxes[0].innerHTML != '') selectWin([boxes[0],boxes[3],boxes[6]]);
    if(boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML  == boxes[7].innerHTML && boxes[1].innerHTML != '') selectWin([boxes[1],boxes[4],boxes[7]]);
    if(boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML  == boxes[8].innerHTML && boxes[2].innerHTML != '') selectWin([boxes[2],boxes[5],boxes[8]]);
    if(boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML  == boxes[8].innerHTML && boxes[0].innerHTML != '') selectWin([boxes[0],boxes[4],boxes[8]]);
    if(boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML  == boxes[6].innerHTML && boxes[1].innerHTML != '') selectWin([boxes[0],boxes[4],boxes[6]]);
}
function resetGame() {
    boxes.forEach(box => {
        box.innerHTML = '';
        box.style.background = '#fff';
    })
}

boxes.forEach(box =>  {
    box.addEventListener('click', getClick)
})
reset.addEventListener('click', resetGame);