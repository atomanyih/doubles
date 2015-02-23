function Staff(startAngle, bodyX, bodyY) {
  var radius = 10;
  var length = 200;

  var staffX, staffY;

  var staffAngle = 0;
  var armAngle = 0;

  this.staffRotation = 1;
  this.armRotation = 1;

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

  this.process = function() {
    armAngle += this.armRotation;
    staffAngle += this.staffRotation;
    staffX = bodyX + 200 * Math.cos(degreesToRadians(armAngle + startAngle));
    staffY = bodyY + 200 * Math.sin(degreesToRadians(armAngle + startAngle));

    if (armAngle == 90) {
      this.armRotation *= -1;
    }
    if (armAngle == -90) {
      this.armRotation *= -1;
    }
  };
}
