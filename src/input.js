export default class InputHandler {

    constructor() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case ArrowLeft:
                    alert('move left');
                    break;
                case ArrowRight:
                    alert('move right');
                    break;
                case ArrowUp:
                    alert('move up');
                    break;
                case ArrowDown:
                    alert('move down');
                    break;
                    
                default:
                    break;
            }
        })
    }
}