describe('Linear', function() {
  describe('with one segment', function() {
    beforeEach(function() {
      this.path = new Path.Linear([0, 0], [0, 1]);
    });

    it('interpolates along the path', function() {
      expect(this.path.at(0)).toEqual([0, 0]);
      expect(this.path.at(1)).toEqual([0, 1]);
    });
  });

  describe('with two segments', function() {
    beforeEach(function() {
      this.path = new Path.Linear([0, 0], [0, 1], [1, 1]);
    });

    it('interpolates along joined paths', function() {
      expect(this.path.at(0)).toEqual([0, 0]);
      expect(this.path.at(0.5)).toEqual([0, 1]);
      expect(this.path.at(1)).toEqual([1, 1]);
    });
  });
});
