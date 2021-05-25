console.log("test");

let gameState = [];

let resetBtn = document.querySelector('.resetBtn');

resetBtn.addEventListener('click', resetGame);

function play(boxValue) {
  let player = document.getElementById('player');
  let playerClick = document.getElementById(boxValue)

  if(player.innerText === 'X') {
    player.innerText = 'O';
    playerClick.innerText = 'X';
    gameState[boxValue] = 'X';
  }
  else {
    player.innerText = 'X';
    playerClick.innerText = 'O';
    gameState[boxValue] = 'O';
  }

  let rowOne1 = gameState[0];
  let rowOne2 = gameState[1];
  let rowOne3 = gameState[2];
  let rowTwo1 = gameState[3];
  let rowTwo2 = gameState[4];
  let rowTwo3 = gameState[5];
  let rowThree1 = gameState[6];
  let rowThree2 = gameState[7];
  let rowThree3 = gameState[8];
 // Winning by rows
  if(rowOne1 === 'X' && rowOne2 === 'X' & rowOne3 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowOne1 === 'O' && rowOne2 === 'O' & rowOne3 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }
  if(rowTwo1 === 'X' && rowTwo2 === 'X' & rowTwo3 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowTwo1 === 'O' && rowTwo2 === 'O' & rowTwo3 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }
  if(rowThree1 === 'X' && rowThree2 === 'X' & rowThree3 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowThree1 === 'O' && rowThree2 === 'O' & rowThree3 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }
  //Winning by columns
  if(rowOne1 === 'X' && rowTwo1 === 'X' & rowThree1 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowOne1 === 'O' && rowTwo1 === 'O' & rowThree1 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }
  if(rowTwo2 === 'X' && rowOne2 === 'X' & rowThree2 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowTwo2 === 'O' && rowOne2 === 'O' & rowThree2 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }
  if(rowOne3 === 'X' && rowTwo3 === 'X' & rowThree3 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowOne3 === 'O' && rowTwo3 === 'O' & rowThree3 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }

  //diagnole win!
  if(rowOne1 === 'X' && rowTwo2 === 'X' & rowThree3 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowOne1 === 'O' && rowTwo2 === 'O' & rowThree3 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }

  if(rowOne3 === 'X' && rowTwo2 === 'X' & rowThree1 === 'X'){
    alert('X is the Winner!')
    resetGame()
    return;
  }
  else if(rowOne3 === 'O' && rowTwo2 === 'O' & rowThree1 === 'O'){
    alert('O is the Winner!')
    resetGame()
    return
  }

}

function resetGame() {
  document.getElementById(0).innerText = "";
  document.getElementById(1).innerText = "";
  document.getElementById(2).innerText = "";
  document.getElementById(3).innerText = "";
  document.getElementById(4).innerText = "";
  document.getElementById(5).innerText = "";
  document.getElementById(6).innerText = "";
  document.getElementById(7).innerText = "";
  document.getElementById(8).innerText = "";
  player.innerText = "X";
}