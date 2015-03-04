function RadialMovement(staff, bodyX, bodyY) {
  var armAngle = 0;
  var startAngle = 0;
  var armRotation = 1;

  function process() {
    var staffX = bodyX + 200 * Math.cos(degreesToRadians(armAngle + startAngle));
    var staffY = bodyY + 200 * Math.sin(degreesToRadians(armAngle + startAngle));

    staff.x = staffX;
    staff.y = staffY;
    armAngle += armRotation;

    if (armAngle == 90) {
      armRotation *= -1;
    }
    if (armAngle == -90) {
      armRotation *= -1;
    }

    staff.process();
  }

  return {
    process: process
  }
}
