describe('Linear', function() {
  it('Interpolates between two points', function() {
    var start = [0,0];
    var end = [1,1];
    var path = new Path.Linear(start, end);

    expect(path.at(0)).toEqual([0,0]);
    expect(path.at(0.5)).toEqual([0.5,0.5]);
    expect(path.at(1)).toEqual([1,1]);
  });
});

describe('Compound', function() {
  describe('with one path', function() {
    beforeEach(function() {
      var linear = new Path.Linear([0,0],[0,1]);
      this.path = new Path.Compound(linear);
    });

    it('interpolates along the path', function() {
      expect(this.path.at(0)).toEqual([0,0]);
      expect(this.path.at(1)).toEqual([0,1]);
    });
  });

  describe('with two paths', function() {
    beforeEach(function() {
      var firstPath = new Path.Linear([0,0],[0,1]);
      var secondPath = new Path.Linear([0,1],[1,1]);
      this.path = new Path.Compound(firstPath, secondPath);
    });

    it('interpolates along joined paths', function() {
      expect(this.path.at(0)).toEqual([0,0]);
      expect(this.path.at(0.5)).toEqual([0,1]);
      expect(this.path.at(1)).toEqual([1,1]);
    });
  });
});
