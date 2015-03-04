function Canvas(elementId) {
  var self = this;
  var canvas = document.getElementById(elementId);

  canvas.addEventListener('click', function(e) {
    self.onClick(e);
  });

  this.context = canvas.getContext('2d');

  this.fitToWindow = function() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    canvas.height = this.height;
    canvas.width = this.width;
  };

  this.clear = function() {
    this.context.clearRect(-15, -15, canvas.width, canvas.height);
  };

  this.fade = function() {
    this.context.fillStyle = 'rgba(0,0,0,.01)';
    this.context.fillRect(-15, -15, canvas.width, canvas.height);
  };

  this.onClick = function() {};
}
