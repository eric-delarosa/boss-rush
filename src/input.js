export default class InputHandler {

    constructor(player) {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case "KeyA":
                case "ArrowLeft":
                    player.moveLeft();
                    break;
                case "KeyD":
                case "ArrowRight":
                    player.moveRight();
                    break;
                case "KeyW":
                case "ArrowUp":
                    player.moveUp();
                    break;
                case "KeyS":
                case "ArrowDown":
                    player.moveDown();
                    break;
            }
        })
        
        document.addEventListener('keyup', event => {
            switch (event.code) {
                case "KeyA":
                case "ArrowLeft":
                    if(player.speedX < 0) player.stopX();
                    break;
                case "KeyD":
                case "ArrowRight":
                    if(player.speedX > 0) player.stopX();
                    break;
                case "KeyW":
                case "ArrowUp":
                    if(player.speedY < 0) player.stopY();
                    break;
                case "KeyS":
                case "ArrowDown":
                    if(player.speedY > 0) player.stopY();
                    break;
            }
        })
    }
}