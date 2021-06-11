import Player from './player.js';
import InputHandler from './input.js';

const board_border = 'black';
const board_background = 'white';
const GAME_HEIGHT = 144;
const GAME_WIDTH = 160;

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let player = new Player(GAME_WIDTH, GAME_HEIGHT);

new InputHandler();

player.draw(ctx);

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    player.update(deltaTime);
    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();