function GameCanvas(){

    this.dom = document.querySelector(".game-canvas");
    this.boy = new boy(100,100);
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");
    this.dom.onclick = this.clickHandler.bind(this);
}


GameCanvas.prototype = {


    run : function(){
        this.update(); //지우고
        this.draw(); //다시그리고
    },

    update : function(){
        
    },

    draw : function(){
        this.boy.draw(this.ctx);

    },
    

    clickHandler : function(){
        this.boy.move(2);
        this.boy.draw(this.ctx);
    }

};