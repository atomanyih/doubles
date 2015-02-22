function Canvas(elementId) {
  var canvas = document.getElementById(elementId);

  this.context = canvas.getContext('2d');

  this.fitToWindow = function fitToWindow() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    canvas.height = this.height;
    canvas.width = this.width;
  };

  this.clear = function clear() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  }
}
