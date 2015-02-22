function Staff(centerX, centerY) {
  var radius = 10;
  var length = 200;

  var staffAngle = 0;
  var armAngle = 0;

  function degreesToRadians(degrees) {
    return Math.PI/180 * degrees;
  }

  function rotateArm(context, fn) {
    context.save();

    context.translate(350, 300);
    context.rotate(degreesToRadians(armAngle));
    context.translate(-350, -300);

    fn();

    context.restore();

  }

  function rotateStaff(context, fn) {
    context.save();
    context.translate(centerX, centerY);
    context.rotate(degreesToRadians(staffAngle));
    context.translate(-centerX, -centerY);

    fn();

    context.restore();

  }

  this.draw = function(canvas) {
    var context = canvas.context;

    rotateArm(context, function() {
      rotateStaff(context, function() {
        context.strokeStyle = 'white';
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(centerX + length / 2 + radius / 2, centerY, radius, Math.PI, 3 * Math.PI, false);
        context.arc(centerX - length / 2 - radius / 2, centerY, radius, 0, 2 * Math.PI, false);
        context.closePath();
        context.stroke();
      });
    });
  };

  this.drawTrails = function(canvas) {
    var context = canvas.context;

    rotateArm(context, function() {
      rotateStaff(context, function() {
        context.strokeStyle = 'white';
        context.lineWidth = 3;

        context.beginPath();
        context.arc(centerX + length / 2 + radius / 2, centerY, radius, Math.PI, 3 * Math.PI, false);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.arc(centerX - length / 2 - radius / 2, centerY, radius, 0, 2 * Math.PI, false);
        context.closePath();

        context.stroke();
      });
    });
  };

  this.process = function() {
    armAngle+=2;
    staffAngle+=2;
  }
}
