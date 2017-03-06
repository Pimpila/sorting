'use strict'

function bubbleSort(array) {
	// if array is only one element, return it
	if (array.length < 2) {
		return array;
	}

	// create a for loop that keeps running as long as the array is not sorted
	// swap elements whenever an element is greater than the one following it
	while (!(isSorted(array))) {
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1)
			}
		}
	}
	return array;
}

// helper func to see if array is sorted
function isSorted(array){
	for(var i = 0; i< array.length - 1; i++){
		if(array[i] > array[ i + 1])
			return false;
	}
	return true;
}

// helper func to swap two array elements
function swap(array, idx1, idx2){  // [5,4,3], 1, 2
	var tempIdx1 = array[idx1];  // 4
	var tempIdx2 = array[idx2]; // 3
	array[idx1] = tempIdx2; // [5,3,3]
	array[idx2] = tempIdx1; // [5,3,4]
}


