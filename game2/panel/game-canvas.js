class GameCanvas {

    constructor() {
        this.dom = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
        this.boy = new boy(100, 100);
        this.bg = new Background();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.dom.onclick = this.clickHandler.bind(this); //콜백함수
        this.dom.focus();

        //게임 상태변수
        this.gameover = false;
        this.pause = false;
        this.dom.onkeydown = this.keyDownHandler.bind(this)
        this.dom.onkeyup = this.keyUpHandler.bind(this)

    }


    run() {
        if (this.pause)
            return;

        // 초당 60프레임 화면을 다시 그리는 코드
        this.update(); //지웠다가 ()
        this.draw(); //다시 그리기

        console.log("timer start");
        window.setTimeout(() => { this.run(); }, 17);


    }

    update() {
        this.boy.update();
    }

    draw() {
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
    }

    pause() {
        this.pause = true;
    }

    // ----- event -----

    clickHandler(e) {

        this.boy.moveTo(e.x, e.y);
        // this.boy.move(2);
        // this.boy.draw(this.ctx);   
    }

    keyDownHandler(e) {
        switch (e.key) {
            case "ArrowUp":
                this.boy.move(1)
                break;
            case "ArrowDown":
                this.boy.move(3)
                break;
            case "ArrowRight":
                this.boy.move(2)
                break;
            case "ArrowLeft":
                this.boy.move(4)
                break;
        }
    }
    keyUpHandler(e) {
        console.log(e.key);
        switch(e.key) {
            case "ArrowUp":
                this.boy.stop(1);
                break;
            case "ArrowDown":
                this.boy.stop(3);
                break;
            case "ArrowRight":
                this.boy.stop(2);
                break;
            case "ArrowLeft":
                this.boy.stop(4);
                break;
        }
    }
}
