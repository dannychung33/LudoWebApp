// Line drawing code
function drawLeftLine(startX, startY){
var points_list =  {"data":[
  {"line":{"color":"#45b6fe","points":[{"x":startX,"y":startY},{"x":startX-50,"y":startY},{"x":startX-100,"y":startY},
  {"x":startX-150,"y":startY}],"width":10.0},"type":"line","line_id":"1"},
  //{"line":{"color":"#DF5453","points":[{"x":33,"y":34},{"x":34,"y":35},{"x":38,"y":39},{"x":40,"y":42},{"x":45,"y":46}],"width":5.0},"type":"line","line_id":"2"}
]};

var lineIndexA = 1;
var lineIndexB = 0;

function drawLines() {
   
  var value = points_list.data[lineIndexB];
  var info = value.line;
  var color = info.color;
  var width = info.width;
  var points = info.points;

  context.beginPath();
  context.moveTo(points[lineIndexA-1].x, points[lineIndexA-1].y);
  context.lineWidth = width;
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineTo(points[lineIndexA].x, points[lineIndexA].y);        
  context.stroke();
    
  lineIndexA = lineIndexA + 1;
  if (lineIndexA>points.length-1) {
      lineIndexA = 1;
    lineIndexB = lineIndexB + 1;
  }
        
  //stop the animation if the last line is exhausted...
  if (lineIndexB>points_list.data.length-1) return;
    
  setTimeout(function() {
  drawLines()
  }, 100);
}
}
