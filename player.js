export default class Player {

    constructor(gameWidth, gameHeight) {
        this.width = 10;
        this.height = 16;

        this.position = {
            x: gameWidth / 2 - this.width / 2, 
            y: gameHeight / 2 - this.height / 2
        };

    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {

    }

}