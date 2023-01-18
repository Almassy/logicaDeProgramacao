function makeRectangle(x,y,width,height,color){
    var canvas = document.querySelector("canvas");
    var pencil = canvas.getContext("2d");

    pencil.fillStyle = color;
    pencil.fillRect (x,y,width,height);
    pencil.strokeStyle = "black";
    pencil.strokeRect (x,y,width, height);
} 
function makeText (x,y,text){
    var canvas = document.querySelector("canvas");
    var pencil = canvas.getContext("2d");

    pencil.font = "15px Georgia";
    pencil.fillStyle = "black";
    pencil.fillText(text,x,y);
}
var serie2015 = [50,25,20,,5]