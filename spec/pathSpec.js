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
