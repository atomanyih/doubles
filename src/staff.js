function Staff(startAngle, bodyX, bodyY) {
  var self = this;
  var radius = 10;
  var length = 200;

  var staffX = 300;
  var staffY = 300;

  this.staffAngle = 0;

  function degreesToRadians(degrees) {
    return Math.PI / 180 * degrees;
  }

  function rotateStaff(context, fn) {
    context.save();

    context.translate(staffX, staffY);
    context.rotate(degreesToRadians(self.staffAngle));
    context.translate(-staffX, -staffY);

    fn();

    context.restore();
  }

  this.draw = function(canvas) {
    var context = canvas.context;

    rotateStaff(context, function() {
      context.strokeStyle = 'white';
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(staffX, staffY);
      context.arc(staffX + length / 2 + radius / 2, staffY, radius, Math.PI, 3 * Math.PI, false);
      context.arc(staffX - length / 2 - radius / 2, staffY, radius, 0, 2 * Math.PI, false);
      context.closePath();
      context.stroke();
    });
  };

  this.drawTrails = function(canvas) {
    var context = canvas.context;

    rotateStaff(context, function() {
      context.fillStyle = 'orange';

      context.beginPath();
      context.arc(staffX + length / 2 + radius / 2, staffY, radius, Math.PI, 3 * Math.PI, false);
      context.closePath();
      context.fill();

      context.beginPath();
      context.arc(staffX - length / 2 - radius / 2, staffY, radius, 0, 2 * Math.PI, false);
      context.closePath();

      context.fill();
    });
  };
}
