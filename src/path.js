var Path = {};

Path.Linear = function() {
  var points = arguments;
  var numSegments = points.length - 1;

  function interpolate(i, start, end) {
    var x = (end[0] - start[0]) * i + start[0];
    var y = (end[1] - start[1]) * i + start[1];

    return [x, y];
  }

  this.at = function(i) {
    if (i == 1) {
      return points[points.length - 1];
    } else {
      var segmentIndex = Math.floor(i * numSegments);
      var segmentI = i * numSegments - segmentIndex;

      return interpolate(segmentI, points[segmentIndex], points[segmentIndex + 1]);
    }
  };
};
