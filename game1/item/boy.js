function Boy(x,y){
        
        this.x =   x||100;
        this.y =   y||100;
        this.ix = 1;
        this.iy = 2;    
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;    

    }
        Boy.prototype = {
            draw:function(ctx){
                var img = new Image();
                img.src="./img/hi2.png";
                img.onload = function(){
                    console.log(this);

                    ctx.drawImage(img,this.sx, this.sy, this.sw, this.sh,
                         this.x, this.y, 106, 148.25);
            }.bind(this);
        },
        move:function(dir){
            switch(dir){
                case 1 : 
                    this.y-=10;
                break;

                case 2 : 
                this.x+=10;
                break;

                case 3 : 
                    this.y+=10;
                break;

                case 4 : 
                    this.x-=10;
                break;
            }


        }
    };