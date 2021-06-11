export default class Player {

    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.width = 10;
        this.height = 16;
        this.maxSpeed = 5;
        this.speedX = 0;
        this.speedY = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2, 
            y: gameHeight / 2 - this.height / 2
        };

    }

    // Movement Functions
    moveLeft() {
        this.speedX = -this.maxSpeed;
    }
    moveRight() {
        this.speedX = this.maxSpeed;
    }
    moveUp() {
        this.speedY = -this.maxSpeed;
    }
    moveDown() {
        this.speedY = this.maxSpeed;
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if(!deltaTime) return;

        this.position.x += this.speedX;
        this.position.y += this.speedY;

        if (this.position.x < 0) this.position.x = 0;
        if (this.position.y <0) this.position.y = 0;
        if (this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }
        if (this.position.y + this.height > this.gameHeight){
            this.position.y = this.gameHeight - this.height;
        }
    }

}