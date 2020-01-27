let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) =>{
    let canvas = document.getElementById('star-killer');
    let startBtn = document.getElementById('start');
    let music = document.getElementById('music');
    let logo = document.getElementById('logo');


    ctx = canvas.getContext('2d');
    game = new Game(ctx);

function destroyStartScreen (){
    startBtn.style = 'display: none';
    music.pause();
    logo.style = 'display: none';
    
    
}

startBtn.addEventListener('click', function(){
    destroyStartScreen();
    game.start();
})
})