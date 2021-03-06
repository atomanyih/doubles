function Staff(x, y) {
  var self = this;
  var radius = 10;
  var length = 200;

  this.staffAngle = 0;
  this.color = 'orange';

  function rotateStaff(context, fn) {
    context.save();

    context.translate(x, y);
    context.rotate(degreesToRadians(self.staffAngle));
    context.translate(-x, -y);

    fn();

    context.restore();
  }

  this.draw = function(canvas) {
    var context = canvas.context;

    rotateStaff(context, function() {
      context.strokeStyle = 'white';
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x + length / 2 + radius / 2, y, radius, Math.PI, 3 * Math.PI, false);
      context.arc(x - length / 2 - radius / 2, y, radius, 0, 2 * Math.PI, false);
      context.closePath();
      context.stroke();
    });
  };

  this.drawTrails = function(canvas) {
    var context = canvas.context;

    rotateStaff(context, function() {
      context.fillStyle = self.color;

      context.beginPath();
      context.arc(x + length / 2 + radius / 2, y, radius, Math.PI, 3 * Math.PI, false);
      context.closePath();
      context.fill();

      context.beginPath();
      context.arc(x - length / 2 - radius / 2, y, radius, 0, 2 * Math.PI, false);
      context.closePath();

      context.fill();
    });
  };

  this.setPosition = function(position) {
    x = position[0];
    y = position[1];
  };
}
