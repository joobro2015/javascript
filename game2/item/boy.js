export default class boy {
    #speed
    constructor(x, y) {

        this.x = x || 100;
        this.y = y || 100;
        // var dx = 100*arguments[2];
        // var dy = 100*arguments[3];
        this.ix = 1;
        this.iy = 2;
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;

        
        this.dx = 0;
        this.dy = 0;
        
        this.vx = 0;
        this.vy = 0;
        
        this.speed = 3;
        
        this.walkDelay = 59;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        
        this.dir = 0;
        
        this.img = document.querySelector("#boy");
    }
    set speed(value){
        this.#speed = value;
    }

    get speed(){
        return this.#speed;
    }

    draw(ctx) {
        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;

        ctx.drawImage(this.img,
            this.sx, this.sy, this.sw, this.sh,
            this.x - this.sw / 2, this.y - this.sh + 15, this.sw, this.sh);
    }

    update() {
        console.log(this.dir)
        if (this.moveUp)
            this.y -= this.#speed
        if (this.moveDown)
            this.y += this.#speed
        if (this.moveRight)
            this.x += this.#speed
        if (this.moveLeft)
            this.x -= this.#speed

        if (!(this.moveRight || this.moveLeft || this.moveDown || this.moveLeft || false))
            if (this.vx === 0 && this.vy === 0) {
                this.ix = 1;
                return;
            }
        if (this.walkDelay > 10) {

            if (this.ix === 1) {
                this.ix = 0;
            }
            else
                this.ix = this.ix === 0 ? 2 : 0;
            this.walkDelay = 0;
        }
        this.walkDelay++;
        if ((this.dx - 0.5 <= this.x && this.x <= this.dx + 0.5) ||
            (this.dy - 0.5 <= this.y && this.y <= this.dy + 0.5)) {
            this.vx = 0;
            this.vy = 0;
        }
        this.x += this.vx;
        this.y += this.vy;

    }
    moveTo(dx, dy) {
        this.ix = 0;

        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w * w + h * h);
        this.vx = w / d;
        this.vy = h / d;

        this.dx = dx;
        this.dy = dy;

    }

    move(dir) {
        switch (dir) {
            case 1: //북
                this.moveUp = true;
                this.iy=0;
                break;
            case 3://남
                this.moveDown = true;
                this.iy=2;
                break;
            case 2: //동
                this.moveRight = true;
                this.iy=1;
                break;
            case 4://서           
                this.moveLeft = true;
                
                this.iy=3;
                break;
        }
    }

    stop(dir) {
        switch (dir) {
            case 1: //북
                this.moveUp = false;
                break;
            case 3://남
                this.moveDown = false;
                break;
            case 2: //동
                this.moveRight = false;
                break;
            case 4://서           
                this.moveLeft = false;
                break;
        }

    }
}

