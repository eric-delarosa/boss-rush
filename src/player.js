export default class Player {

    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;  // canvas height
        this.gameWidth = gameWidth;    // canvas width 
        this.width = 10;    // player width
        this.height = 16;   // player height
        this.maxSpeed = 5;  // maximum player movement speed
        this.speedX = 0;    // current speed in x direction
        this.speedY = 0;    // current speed in y direction

        
        // Player starting position in middle of gamescreen
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

    stopX() {
        this.speedX = 0;
    }
    stopY() {
        this.speedY = 0;
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