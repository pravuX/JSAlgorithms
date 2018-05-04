function sym(args) {
	// conver the arguments into an array
	let argsArr = [...arguments];
	// a helper function that return the difference of two arrays;
	function diffArray(arr1, arr2) {
		let output = [];

		// for both arrays push the elements that that don't include in second array
		arr1.forEach(el => {
			if (arr2.indexOf(el) < 0 && output.indexOf(el) < 0) {
				output.push(el);
			}
		});
		arr2.forEach(el => {
			if (arr1.indexOf(el) < 0 && output.indexOf(el) < 0) {
				output.push(el);
			}
		});
		return output;
	}
	// call reduce over each earra in the arguments arrray
	return argsArr.reduce(diffArray);
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
