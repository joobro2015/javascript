function Box(){


}
Box.prototype = {
    test:function(x,y){
        console.log(this);
        console.log(x);
        console.log(y);

    }
};

// var f1= box.test;
// f1();

var box1 = new Box();
box1.test();

var obj = {kor : 2};
obj.onload = box1.test;

var n1 = {id:1, title:'hello'};

obj.onload();
obj.onload.call(n1);
obj.onload.apply(n1,['hi','okay']);

// 정면을 바라보는것이 기본값.
    
    
    // //this img = this.document.querySelector("img");
    // this img = new Image();
    // img.src="./img/hi2.png";
    // img.onload = function(){
    //     // ctx.drawImage(img, 100,100);
    //     // ctx.drawImage(img, 100, 100, 106, 148.25);\
    //     var ix = 1;
    //     var iy = 2;
    //     var ix2 = 1;
    //     var iy2 = 1;

    //     var sw = 106;
    //     var sh = 148.25;

    //     var sx = sw*ix;
    //     var sy = sh*iy;
        
    //     var sx2 = sw*ix2;
    //     var sy2 = sh*iy2;
    //     ctx.drawImage(img,sx, sy, sw, sh, 200, 100, 106, 148.25);

    //     ctx.drawImage(img,sx2, sy2, sw, sh, 100, 100, 106, 148.25);
    //     // ctx.drawImage(img, 
    //     //     0, 0, 106, 148,25, 200, 100, 106, 148.25);
    //     // drawimage 첫번째 소스에서 떼서 만드는것, 두번째 4개 떼온것을 어디에 출력할지