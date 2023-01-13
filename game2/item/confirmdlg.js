export default class confirmdlg{
    constructor(x,y){
        this.x = 100||x;
        this.y = 100||y;
        this.width = 400;
        this.height = 200;

        this.isvisible = false;

        this.onContinue = false;
        this.onEnd = false;
    }
    show(){
        this.isvisible = true;
    }

    update(){

    }

    draw(ctx){

        if(!this.isvisible)
            return;

        let {x,y} = this;

        ctx.fillStyle = '#FFF7';
        ctx.fillRect(x, y, this.width, this.height);

        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, this.width, this.height);

        ctx.fillStyle = 'black'
        ctx.font = 'bold 48px serif'
        ctx.fillText('Continue?', this.width/2, y+70);

        ctx.fillStyle = 'gray';
        ctx.fillRect(x+70, y+100, 100, 50);
        ctx.fillStyle = 'black';
        ctx.strokeRect(x+70, y+100, 100, 50);


        ctx.fillStyle = 'gray';
        ctx.fillRect(x+230, y+100, 100, 50);
        ctx.fillStyle = 'black';
        ctx.strokeRect(x+230, y+100, 100, 50);

        ctx.font = 'bold 30px serif'
        ctx.fillText('YES', this.width/2-10, y+135);
        ctx.font = 'bold 30px serif'
        ctx.fillText('NO', this.width/2+160, y+135);



    }
}