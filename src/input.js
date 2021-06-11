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
    }
}