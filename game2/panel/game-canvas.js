class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
        this.boy = new boy(100,100);
          /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.dom.onclick = this.clickHandler.bind(this); //콜백함수
        
        //게임 상태변수
        this.gameover = false;
        this.pause = false;
    }

    
    run(){
        if(this.pause)
            return;

        // 초당 60프레임 화면을 다시 그리는 코드
        this.update(); //지웠다가 ()
        this.draw(); //다시 그리기
        //window.setTimeout(this.run.bind(this), 1000)
    //     window.setTimeout(function(){
    //         this.run();
    //     })
        console.log("timer start");
        window.setTimeout(()=>{this.run();},17);

    }

    update(){
        this.boy.update();
    }    

    draw(){
        this.boy.draw(this.ctx);
    }

    pause(){
        this.pause = true;
    }

    // ----- event -----
    
    clickHandler(e){
        
        this.boy.moveTo(e.x, e.y);
        // this.boy.move(2);
        // this.boy.draw(this.ctx);   
    }
}