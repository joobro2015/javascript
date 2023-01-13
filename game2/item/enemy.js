export default class enemy {
    #enemycx;
    #enemeycy;
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
        
        this.speed = 2;
        this.onOutOfScreen = null;
        this.ischungdol = false;

        this.cx = this.x;
        this.cy = this.y;
        
        
        this.img = document.querySelector("#enemy");
        this.explosion = document.querySelector("#explosion");

        // [e]xplosion [i]ndex

        this.eix = 0
        this.eiy = 0
        this.esw = this.explosion.width/4;
        this.esh = this.explosion.height/5;

        this.expOrder = 0;

    }

    
    get width(){
        return this.img.width
    }
    get enemycx(){
        return this.x + this.img.width/2
    }
    get enemycy(){
        return this.y + this.img.height/2
    }

    chungdol(){
        this.ischungdol = true;
    }
    
    update() {

        this.eiy = Math.floor(this.expOrder / 4);
        this.eix = this.expOrder % 4;

        this.y += this.speed;

        if(this.ischungdol && this.expOrder ===18 && this.onOutOfScreen != null)
            this.onOutOfScreen(this);


        if(this.y > 500)
            if(this.onOutOfScreen != null)
                this.onOutOfScreen(this);
    
    }

    draw(ctx) {
        this.esx = this.esw*this.eix;
        this.esy = this.esh*this.eiy;

        ctx.drawImage(this.img, 
                        this.x-this.img.width/2,
                        this.y-this.img.height/2);
        
        if(this.ischungdol===true){
            ctx.drawImage(this.explosion,
                this.esx,this.esy,this.esw,this.esh,
                this.x-this.esw/2,this.y-this.esh+58, this.esw, this.esh);
            this.expOrder++;
        }


            ctx.beginPath();
            ctx.arc(this.x, this.y, this.img.width/2, 0, 2 * Math.PI);
            ctx.stroke(); 
       

    }
}






