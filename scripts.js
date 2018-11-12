var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function triangle(x, y, a){
  
  var borderColor = 'grey';
  var triangleColor = 'rgba(238, 188, 44, 0.5)'

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x - a/2 , y + a);
  context.lineTo(x + a/2 ,y + a);
  context.closePath();
  context.strokeStyle = borderColor;
  context.stroke();
  context.fillStyle = triangleColor;
  context.fill();
}

triangle(230,160,50);
triangle(270,100,50);
triangle(200,50,150);