var canvas = new Canvas('view');
var trails = new Canvas('trails');

canvas.context.translate(15, 15);
trails.context.translate(15, 15);

var t = 0;

function loop(fn) {
  function main() {
    fn();
    requestAnimationFrame(main);
  }

  main();
}

function drawGrid() {
  var gridSize = 600;
  var squareSize = gridSize / 3;
  canvas.context.strokeStyle = 'white';
  canvas.context.lineWidth = 2;
  canvas.context.strokeRect(0, 0, gridSize, gridSize);
  canvas.context.strokeRect(squareSize, 0, squareSize * 2, gridSize);
  canvas.context.strokeRect(squareSize * 2, 0, squareSize, gridSize);
  canvas.context.strokeRect(0, squareSize, gridSize, squareSize * 2);
  canvas.context.strokeRect(0, squareSize * 2, gridSize, squareSize);
}

var staffA = new Staff(300, 300);
var staffB = new Staff(300, 300);

var pathA = new Path.Linear(
  [100, 300],
  [300, 500],
  [500, 300],
  [300, 100]
);

var pathB = new Path.Linear(
  [500, 300],
  [300, 100],
  [100, 300],
  [300, 500]
);

function displayPoints(points, selector) {
  var containerEl = document.querySelector(selector);

  points.forEach(function(point) {
    var pointEl = document.createElement('div');
    pointEl.innerText = '(' + point + ')';
    containerEl.appendChild(pointEl);
  });
}

displayPoints(pathA.points, '.points#staff-a');
displayPoints(pathB.points, '.points#staff-b');

function doubles() {
  canvas.clear();
  trails.fade();

  drawGrid();

  staffA.staffAngle = t;
  staffB.staffAngle = t;
  staffA.setPosition(pathA.at(t / 360));
  staffB.setPosition(pathB.at(t / 360));

  staffA.draw(canvas);
  staffB.draw(canvas);

  staffA.drawTrails(trails);
  staffB.drawTrails(trails);

  if (t == 360) {
    t = 0;
  }
  t++;
}

loop(doubles);
