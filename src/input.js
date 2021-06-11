export default class InputHandler {

    constructor() {
        document.addEventListener('keydown', event => {
            alert(event.keyCode);
            // switch (event.keyCode) {
            //     case "ArrowLeft":
            //         alert('move left');
            //         break;
            //     case "ArrowRight":
            //         alert('move right');
            //         break;
            //     case "ArrowUp":
            //         alert('move up');
            //         break;
            //     case "ArrowDown":
            //         alert('move down');
            //         break;
                    
            //     default:
            //         break;
            // }
        })
    }
}