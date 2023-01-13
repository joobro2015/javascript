import newlec from "../newlec.js";

export default class Boy{
    // #vx; (private)
    #speed;
    constructor(x,y){

        this.x = x || 100;
        this.y = y || 100;
        
        this.sw = 106;
        this.sh = 148.25;
        this.ix = 1;
        this.iy = 2;       
        
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;

        this.#speed = 15;
        this.noLife = false;

        this.walkDelay = 0;

        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;        

        this.img = document.querySelector("#boy");
       
        
    }

    set speed(value){
        this.#speed = value;
    }

    get speed(){
        return this.#speed;
    }

    draw(ctx){
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

        ctx.drawImage(this.img,
            this.sx,this.sy,this.sw,this.sh,
            this.x-this.sw/2,this.y-this.sh+15, this.sw, this.sh);
            ctx.beginPath();

        ctx.arc(this.x, this.y, this.sw/2, 0, 2 * Math.PI);
        ctx.stroke(); 
    }

    update(){
        // 이동을 위한 코드
        for(let enemy of newlec.enemies){
            let x = this.x; 
            let y = this.y ;
            
            
            let ex = enemy.enemycx;
            let ey = enemy.enemycy;


            let d = Math.sqrt((ex-x)*(ex-x)+(ey-y)*(ey-y));
            let r1r2 = enemy.width/2 + this.sw/2;

            if(d <= r1r2){
                enemy.chungdol();
                console.log("충돌발생!");
                
                // 위임 받아 놓은 함수(callback 함수)를 호출한다.
                if(this.onNoLife && !this.noLife){
                this.onNoLife();
                this.noLife = true;
                }
            } 
        }
        // console.log(newlec.enemies.length)
        if(this.moveUp)                   
            this.y -= this.#speed;
        if(this.moveDown)
            this.y += this.#speed;    
        if(this.moveLeft)
            this.x -= this.#speed;
        if(this.moveRight)
            this.x += this.#speed;

        // -------------------------------------------------

        if(!(this.moveLeft || this.moveRight || this.moveUp || this.moveDown || false))
            if(this.vx==0 && this.vy==0){
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
    
    moveTo(dx,dy){
        
        let w = dx - this.x;
        let h = dy - this.y;
        
        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;
        
        this.dx = dx;
        this.dy = dy;
        
    }
    
    move(dir){                  
        switch(dir){
            case "ArrowUp":
                this.moveUp = true;
                this.iy = 0;            
                break;
            case "ArrowDown":
                this.moveDown = true;
                this.iy = 2;
                break;
            case "ArrowRight":
                this.moveRight = true;
                this.iy = 1;
                break;
            case "ArrowLeft":
                this.moveLeft = true;
                this.iy = 3;
                break;
        }              
    }

    stop(dir){
        switch(dir){
            case "ArrowUp":
                this.moveUp = false;
                this.iy = 0;          
                this.ix = 1;          
                break;
            case "ArrowDown":
                this.moveDown = false;
                this.iy = 2;
                break;
            case "ArrowRight":
                this.moveRight = false;
                this.iy = 1;
                this.ix = 1;          
                break;
            case "ArrowLeft":
                this.moveLeft = false;
                this.iy = 3;
                this.ix = 1;          
                break;
        }     

    }
}