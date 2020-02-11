let ctx;
let game;


document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('star-killer');
  let startBtn = document.getElementById('start');
  let music = document.getElementById('music');
  let logo = document.getElementById('logo');
  let pauseLogo = document.getElementById('pause-screen');
  
  ctx = canvas.getContext('2d');
  game = new Game(ctx, new SpaceShip({
    x: 50,
    y: 310
  }), showPause, destroyPause);
  

  function destroyStartScreen() {
    startBtn.style = 'display: none';
    music.pause();
    logo.style = 'display: none';
    
  }
  function showPause(){
    pauseLogo.style = 'display: block';

  }
  function destroyPause(){
    pauseLogo.style = 'display: none';

  }

  function showGameOver() {
    canvas.style = 'display: none';
    gameover.style = 'display: block';
  }
  startBtn.addEventListener('click', function () {
    destroyStartScreen();
    game.start();
    canvas.style.cursor = 'none';
  });
})