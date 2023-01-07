class boy{

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

        this.cnt = 0;
        
        this.img = document.querySelector("#boy");


    }

    draw(ctx){

        this.sx = this.sw * this.ix;
        this.sy = this.sh * this.iy;
        ctx.drawImage(this.img,this.sx,this.sy,this.sw,this.sh,this.x-this.sw/2,this.sh+15,this.sw,this.sh);

    }

    update(){
        if(this.vx === 0 && this.vy ===0){

            this.ix = 1;
            return;
        }
        if(this.cnt > 10){

            if(this.ix ===1){
                this. ix = 0 ;
            }
            else
                this.ix = this.ix === 0 ? 2 : 0;
                this.cnt = 0;
        }
        
        this. cnt++;

        if((this.dx-0.5<=this.x && this.x <= this.dx+0.5)|| (this.dy-0.5<= this.y && this.y <= this.dy+0.5)){
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
                this.y -= 10;
                break;
            case "ArrowRight":
                this.x += 10;
                break;
            case "ArrowDown":
                this.y += 10;
                break;
            case "ArrowLeft":
                this.x -= 10;
                break;
        }
    }





    }
