export default class enemy {
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.onOutOfScreen = null;
        this.img = document.querySelector("#enemy");
    }
    update() {
        this.y += this.speed;

        if(this.y > 500)
            if(this.onOutOfScreen != null)
                this.onOutOfScreen(this);
        
}

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }
}




