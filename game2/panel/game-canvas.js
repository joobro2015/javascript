class GameCanvas{

        constructor(){
            this.dom = document.querySelector(".game-canvas");   //main안에있는 game-canvas를 가져와서 그위에 그림을 그린다.
            this.boy = new boy(100,100);
            
            this.dom.focus();
            this.bg = new Background();
            /** @type {CanvasRenderingContext2D} */
            this.ctx = this.dom.getContext("2d") // this.ctx는 game-canvas위에 2d를 얹는것

            this.dom.onclick = this.clickHandler.bind(this);
            this.dom.onkeydown = this.keyDownHandler.bind(this);


            // 게임 상태변수
            this.gameover = false;
            this.pause = false;

            
        }
        
        
        run(){
            if(this.pause)
            return;
            
            this.update();
            this.draw();
            
            console.log("timer start")
            window.setTimeout(()=>{this.run();},1)  //이거 뭔지 모르겠는데 this.run이 한번 실행될때마다 1씩 올라간다는건가?

        }

        update(){

            this.boy.update();

        }


        draw(){

            this.bg.draw(this.ctx);
            this.boy.draw(this.ctx);

        }

        pause(){
            this.puase = true;
        }
        

        clickHandler(e){
            this.boy.moveTo(e.x, e.y);
        }

        keyDownHandler(e){

            this.boy.move(e["key"]); //e의 키값
        }
    }











