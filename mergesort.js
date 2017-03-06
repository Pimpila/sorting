'use strict'

// split an array into two:
function split(wholeArray) {  // [1,5,3,7,2]
  // .slice doesn't use floats, so if the arr has an odd # of elements,
  // this function will split it, w/ the left side shorter than the right
  var center = wholeArray.length / 2; // 2.5
  var left = wholeArray.slice(0, center); // [1,5]
  var right = wholeArray.slice(center); // [3,7,2]
  // return a nested arr
  return [left, right] // [[1,5], [3,7,2]]
}

// merge takes left and right arrays.
// starting at 0, create pointer variables to increment along the arrays
function merge (left, right) {
  var merged = [];
  var leftIdx = 0;
  var rightIdx = 0;

// while there are elements in both left and right arrays
// compare the elements at the pointer idx.
// push the element that is lower into the merged arr and increment that array's pointer
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++
    }
    else {
      merged.push(right[rightIdx]);
      rightIdx++
    }
  }

  // the while loop above ends when one of the arrays
  // has pushed all its elements into the merged array
  // check which arr still has an element left
  // by checking which one's idx pointer is still less than its length
  // push remaining elements into merged arr until idx pointer === length of that array

  while (rightIdx < right.length) {
    merged.push(right[rightIdx++]);
  }
  while (leftIdx < left.length) {
    merged.push(left[leftIdx++]);
  }

  // if (rightIdx < right.length) {
  //   merged.push(right[rightIdx + 1])
  // } else if (leftIdx < left.length) {
  //   merged.push(left[leftIdx + 1]);
  //}
  // for ( ; leftIdx < left.length; leftIdx++) {
  //   merged.push(left[leftIdx]);
  // }
  // for ( ; right.length; rightIdx++) {
  //   merged.push(right[rightIdx]);
  // }
  return merged;
}

function mergeSort(array) { // [1,5,3,7,2]
  // base case. if array passed in has only one element, return that array
  if (array.length < 2) {
    return array;
  }
  //otherwise, split the array in two, using split helper func
  var splits = split(array); // [[1,5], [3,7,2]]
  var left = splits[0]; // [1,5]
  var right = splits[1]; // [3,7,2]

  // call mergeSort recursively within the merge function:
  return merge(mergeSort(left), mergeSort(right));
}
