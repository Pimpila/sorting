describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single item', function(){
    expect( bubbleSort([10]) ).toEqual([10]);
  });

  it('sorts an array', function(){
    expect( bubbleSort([6,7,3,2,1,4,5]) ).toEqual( [1,2,3,4,5,6,7] );
  });

  it('handles an already sorted array order', function(){
    expect( bubbleSort([1,2,3,4,5,6,7]) ).toEqual( [1,2,3,4,5,6,7] );
  });

  it('handles a sorted array in the other direction', function(){
    expect( bubbleSort([7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7] );
  });
});