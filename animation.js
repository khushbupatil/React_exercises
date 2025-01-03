let canvas = document.getElementById("my_canvas");
let context = canvas.getcontext("2d");

const speed= 4;
let position = 0;
let radious = 40;
let movespeed = speed;

function moveball() {
    if(position + radious >640)
    {
        movespeed = -speed;
    }
    else if( position + radious < 0){
        movespeed = speed;
    }
    position += movespeed

    function drawball(){
        context.clearRect(0,0, 640, 480);
        context.fillstyle = "#62687f";
        context.beginpath();
    
    }
}