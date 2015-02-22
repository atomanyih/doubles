function Canvas(elementId) {
  var canvas = document.getElementById(elementId);

  this.context = canvas.getContext('2d');

  this.fitToWindow = function() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    canvas.height = this.height;
    canvas.width = this.width;
  };

  this.clear = function() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.fade = function() {
    this.context.fillStyle = 'rgba(0,0,0,.05)';
    this.context.fillRect(0, 0, canvas.width, canvas.height);
  };
}
