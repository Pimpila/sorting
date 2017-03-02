function bubbleSort(array) {

	
	if (array.length < 2) {
		return array;
	}

	// while isSorted returns false, create a for loop, with i and i + 1. 
	// call swap on i and i + 1.
	// 
	while (!(isSorted(array))) {
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1)
			}
		}

	}

	return array;
}

function isSorted(array){
	for(var i = 0; i< array.length - 1; i++){
		if(array[i] > array[ i + 1])
			return false;
	}
	return true;
}

var swap = function(array,a , b){
		// `array[0] = 1,  array[1] = 2
	array[a] = [array[b] , array[b] = array[a]][0];
		// `array[0] = 2,  array[1] = 1
}


