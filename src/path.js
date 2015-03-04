var Path = {};

Path.Linear = function() {
  var points = Array.prototype.slice.call(arguments);
  var numSegments = points.length;

  Object.defineProperty(this, 'points', {
    get: function() {
      return points;
    }
  });

  function interpolate(i, segment) {
    var start = segment[0];
    var end = segment[1];
    var x = (end[0] - start[0]) * i + start[0];
    var y = (end[1] - start[1]) * i + start[1];

    return [x, y];
  }

  function segmentAt(segmentIndex) {
    if (segmentIndex == numSegments - 1) {
      return [points[segmentIndex], points[0]];
    }
    return [points[segmentIndex], points[segmentIndex + 1]];
  }

  this.at = function(i) {
    var segmentIndex = Math.floor(i * numSegments) % numSegments;
    var segmentI = (i * numSegments) % 1;

    return interpolate(segmentI, segmentAt(segmentIndex));
  };
};
