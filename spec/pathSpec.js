describe('Linear', function() {
  describe('with one segment', function() {
    beforeEach(function() {
      this.path = new Path.Linear([0, 0], [0, 1]);
    });

    it('interpolates along the path and loops', function() {
      expect(this.path.at(0)).toEqual([0, 0]);
      expect(this.path.at(0.25)).toEqual([0, 0.5]);
      expect(this.path.at(0.5)).toEqual([0, 1]);
      expect(this.path.at(0.75)).toEqual([0, 0.5]);
      expect(this.path.at(1)).toEqual([0, 0]);
    });
  });

  describe('with more than one segment', function() {
    beforeEach(function() {
      this.path = new Path.Linear([0, 0], [0, 1], [1, 1], [1, 0]);
    });

    it('interpolates along joined paths', function() {
      expect(this.path.at(0)).toEqual([0, 0]);
      expect(this.path.at(0.25)).toEqual([0, 1]);
      expect(this.path.at(0.5)).toEqual([1, 1]);
      expect(this.path.at(0.75)).toEqual([1, 0]);
      expect(this.path.at(1)).toEqual([0, 0]);
    });
  });

  describe('points', function() {
    it('returns provided points', function() {
      var path = new Path.Linear([0, 0], [0, 1]);

      expect(path.points).toEqual([[0, 0], [0, 1]])
    });

    it('cannot be set', function() {
      var path = new Path.Linear([0, 0], [0, 1]);

      path.points = [[0, 0]];

      expect(path.points).toEqual([[0, 0], [0, 1]])
    });
  });
});
