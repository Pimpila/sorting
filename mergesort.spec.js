describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 5, 3, 7])).toEqual([[1, 5], [3, 7]]);
  });
  it('handles arrays with an odd number of elements', function() {
    expect(split([1, 5, 3, 7, 2])).toEqual([[1, 5], [3, 7, 2]]);
  })
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 5], [3, 7, 2])).toEqual([1, 3, 5, 7, 2])
  });
});

describe('Merge Sort', function(){
  it('is able to return a fully sorted array', function(){
    expect(mergeSort([1, 5, 3, 7, 2])).toEqual([1, 2, 3, 5, 7]));
  });
});
