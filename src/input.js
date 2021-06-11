export default class InputHandler {

    constructor() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case "KeyA":
                case "ArrowLeft":
                    alert('move left');
                    break;
                case "KeyD":
                case "ArrowRight":
                    alert('move right');
                    break;
                case "KeyW":
                case "ArrowUp":
                    alert('move up');
                    break;
                case "KeyD":
                case "ArrowDown":
                    alert('move down');
                    break;
            }
        })
    }
}