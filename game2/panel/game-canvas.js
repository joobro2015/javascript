import Boy from '../item/boy.js';
import Background from '../item/back-ground.js';
import Enemy from '../item/enemy.js';
import newlec from '../newlec.js';
import confirmdlg from '../item/confirmdlg.js';


export default class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
        this.boy = new Boy(100,100);
        this.boy.onNoLife = this.boyNoLifeHandler.bind(this);

        this.dom.focus();
        this.bg = new Background();
        this.enemies = [];

        this.dlg = new confirmdlg();
        this.dlg.show();
        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
        }
        this.enemydelay = getRandomInt(30, 60);

        
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.boy.speed++;
        this.dom.onclick = this.clickHandler.bind(this); //콜백함수
        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);
        
        //게임 상태변수
        this.gameover = false;
        this.pause = false;
        newlec.enemies = this.enemies;
        
    }
    
    
    run(){
        if(this.pause)
        return;
        
        // 초당 60프레임 화면을 다시 그리는 코드
        this.update(); //지웠다가 ()
        this.draw(); //다시 그리기
        
        console.log("timer start");
        window.setTimeout(()=>{this.run();},17);
        if(this.delay<60){
            this.delay 
        }

        //window.setTimeout(this.run.bind(this), 1000)
    //     window.setTimeout(function(){
    //         this.run();
    //     })
        
    }

    update(){
        this.boy.update();
        for(let enemy of this.enemies)
            enemy.update();

            this.dlg.update();
            
            this.enemydelay--;
            if(this.enemydelay ==0){
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
              }
            let x = getRandomInt(-50,this.dom.width+50); // -50~ this.dom.width+50
            let y = -50;

            let enemy = new Enemy(x,y);
            enemy.onOutOfScreen = this.enemyOutOfScreenHandler.bind(this);
            
            this.enemies.push(enemy);
            this.enemydelay = 60;
            }
            // 
    }
       
    enemyOutOfScreenHandler(en){
        let index = this.enemies.indexOf(en);
        this.enemies.splice(index,1);
        };
    draw(){
        this.bg.draw(this.ctx);
        for(let enemy of this.enemies)
            enemy.draw(this.ctx)
        this.boy.draw(this.ctx);
        this.dlg.draw(this.ctx);
        this.dlg.onclick = () =>{console.log("clicked")};

    }

    pause(){
        this.pause = true;
    }

    // ----- event -----
    
    clickHandler(e){
        
        // this.boy.notifyClick(e.x,e.y);
        // for(let enemy of this.enemies){
        //     enemy.notifyClick??(e.x,e.y)
        // }

        if(this.dlg.notifyClick(e.x,e.y));
        
        this.boy.moveTo(e.x, e.y);

        
    }

    keyDownHandler(e){
        this.boy.move(e.key);        
    }

    keyUpHandler(e){
        // this.boy.kreset();
        this.boy.stop(e.key);
            
    }

    boyNoLifeHandler(){
        console.log("소년의 생명이 없습니다.")

    }

}

// export default GameCanvas;