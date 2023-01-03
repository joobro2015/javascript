function GameCanvas(){
    this.dom = document.querySelector(".game-canvas");
    // dom이 canvas ---- this는 gamecanvas
    /** @type {CanvasRenderingContext2D} */ 
    this.ctx = this.dom.getContext("2d");
    this.boy = new Boy(100,100);
    this.dom.onclick = this.clickHandler.bind(this);
    // dom이 클릭할때 함수를 대입하겟다 //dom(캔바스)는 사용자의 행위를 기다리고있다 클릭할시 호출해주는 함수
    // callback 함수 나중에 실행되는 함수
    // 전화하는놈이 주체 dom이 onclick을 통해서호출 dom(캔바스)이 전화하는놈
};

GameCanvas.prototype = {      
    run : function(){
        // <!--60프레임으로 화면을 다시 그리는 코드//모든생성자에는 프로토타입이있다.-->
        this.update();
        this.draw();
    },
    update: function(){

    },
    draw: function(){
        this.boy.draw(this.ctx);
    },
    // -----event handlers-------------------
    clickHandler:function(){
        this.boy.move(2);
        this.boy.draw(this.ctx);
    }
};