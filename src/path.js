var Path = {};

Path.Linear = function(start, end) {
  this.at = function(i) {
    var x = (end[0] - start[0]) * i + start[0];
    var y = (end[1] - start[1]) * i + start[1];

    return [x,y];
  };
};
