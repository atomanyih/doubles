function Staff(staffX, staffY, bodyX, bodyY) {
  var radius = 10;
  var length = 200;

  var staffAngle = 0;
  var armAngle = 0;

  this.staffRotation = -4;
  this.armRotation = 2;

  function degreesToRadians(degrees) {
    return Math.PI / 180 * degrees;
  }

  function rotateArm(context, fn) {
    context.save();

    context.translate(bodyX, bodyY);
    context.rotate(degreesToRadians(armAngle));
    context.translate(-bodyX, -bodyY);

    fn();

    context.restore();

  }

  function rotateStaff(context, fn) {
    context.save();
    context.translate(staffX, staffY);
    context.rotate(degreesToRadians(staffAngle));
    context.translate(-staffX, -staffY);

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
        context.moveTo(staffX, staffY);
        context.arc(staffX + length / 2 + radius / 2, staffY, radius, Math.PI, 3 * Math.PI, false);
        context.arc(staffX - length / 2 - radius / 2, staffY, radius, 0, 2 * Math.PI, false);
        context.closePath();
        context.stroke();
      });
    });
  };

  this.drawTrails = function(canvas) {
    var context = canvas.context;

    rotateArm(context, function() {
      rotateStaff(context, function() {
        context.strokeStyle = 'orange';
        context.lineWidth = 3;

        context.beginPath();
        context.arc(staffX + length / 2 + radius / 2, staffY, radius, Math.PI, 3 * Math.PI, false);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.arc(staffX - length / 2 - radius / 2, staffY, radius, 0, 2 * Math.PI, false);
        context.closePath();

        context.stroke();
      });
    });
  };

  this.process = function() {
    armAngle += this.armRotation;
    staffAngle += this.staffRotation;
  }
}
