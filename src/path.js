var Path = {};

Path.Linear = function(start, end) {
  this.at = function(i) {
    var x = (end[0] - start[0]) * i + start[0];
    var y = (end[1] - start[1]) * i + start[1];

    return [x,y];
  };
};

Path.Compound = function() {
  var paths = arguments;

  this.at = function(i) {
    var pathIndex = Math.floor(i * paths.length);
    var pathI = i * paths.length - pathIndex;
    var path = paths[pathIndex];

    if(path) {
      return path.at(pathI);
    } else {
      return paths[paths.length - 1].at(1);
    }
  };
};
