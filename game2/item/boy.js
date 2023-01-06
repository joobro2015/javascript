class boy{
    constructor(x,y){

        this.x = x || 100;
        this.y = y || 100;
        // var dx = 100*arguments[2];
        // var dy = 100*arguments[3];
        this.ix = 1;
        this.iy = 2;
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;
        
        this.dx = 0;
        this.dy = 0;

        this.vx = 0;
        this.vy = 0;

        this.walkDelay = 59;

        this.img = document.querySelector("#boy");
    }

    draw(ctx){
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

        ctx.drawImage(this.img,
            this.sx,this.sy,this.sw,this.sh,
            this.x-this.sw/2,this.y-this.sh+15, this.sw, this.sh);
    }

    update(){
        //this.ix가 0과2를 왔다갔다..
        this.walkDelay--;
        if(this.walkDelay == 0)
        {
            if(this.vs ==0 &&this.vy==0){
            this.ix=1;
                return;
        }
        this.sx = this.sw*this.ix;

        if(this.ix == 1){
            this.ix = 0;
            this.sx = this.sw*this.ix;
        }
        else if(this.ix==0){
            this.ix = 2;
            this.sx = this.sw*this.ix;
        }
        else{
            this.ix = 1;
            this.sx = this.sw*this.ix;
        }
        this.walkDelay = 20;
    }
        if((this.dx-1 <= this.x && this.x <= this.dx+1) ||
        (this.dy-1 <= this.y && this.y <= this.dy+1)){
            this.vx = 0;
            this.vy = 0;
        }
        this.x += this.vx;
        this.y += this.vy;
    }
    
    moveTo(dx,dy){
        this.ix = 0;

        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;

        this.dx = dx;
        this.dy = dy;

    }

    move(e){
        switch(e){
            case 1:
                this.y -= 1;
                break;
            case 2:
                this.x += 1;
                break;
            case 3:
                this.y += 1;
                break;
            case 4:
                this.x -= 1;
                break;
        }
    }

    
}