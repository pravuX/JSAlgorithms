function dropElements(arr, func) {
	// initialize an empty array;
	let outputArr = [];

	// walk through the array `arr` and run a test function `func` for each element starting from 0;
	for (let num of arr) {
		// when you encouter an element that returns `true` splice the original array from the index of the encountered element and immediately break out of the loop;
		if (func(num)) {
			outputArr = arr.splice(arr.indexOf(num));
			break;
		}
	}

	// finally return the outputArray;
	return outputArr;
}

let output = dropElements([1, 2, 3, 9, 2], function(n) {
	return n > 2;
});
console.log(output);
