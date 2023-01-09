export default class enemy {
    constructor(x,y){
        this.x = x || 300
        this.y = y || 300
        
        this.img = document.querySelector("#enemy");
    }
    update() {
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }
}