function Background(){

};
Background.prototype = {
    scroll : function(dir){
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
        this.update();
        this.draw();

    }

};







/** @type {CanvasRenderingContext2D} */ 
var ctx = getContext("2d");
<!-- <img src="./img/hi2.png"></img>; -->
    <canvas class="game-canvas" width="500" height="700"></canvas>