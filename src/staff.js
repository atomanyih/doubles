function Staff(centerX, centerY) {
  var radius = 10;
  var length = 200;

  var rotation = 0;

  function rotate(context, fn) {
    function degreesToRadians(degrees) {
      return Math.PI/180 * degrees;
    }

    context.save();
    context.translate(centerX, centerY);
    context.rotate(degreesToRadians(rotation));
    context.translate(-centerX, -centerY);

    fn();

    context.restore();

    rotation++;
  }

  this.draw = function(canvas) {
    var context = canvas.context;

    rotate(context, function() {
      context.strokeStyle = 'white';
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.arc(centerX + length / 2 + radius / 2, centerY, radius, Math.PI, 3 * Math.PI, false);
      context.arc(centerX - length / 2 - radius / 2, centerY, radius, 0, 2 * Math.PI, false);
      context.closePath();
      context.stroke();
    });
  };

  this.drawTrails = function(canvas) {
    var context = canvas.context;

    rotate(context, function() {
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
  };
}
