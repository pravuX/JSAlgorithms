function steamrollArray(arr) {
	// use the spread operator to get each element of the passed array and concat it into a empty array, then assign the result to the binding `flat`;
	let flat = [].concat(...arr);

	// use recursion to keep flatteing the array untill no nested arrays are present in the `flat` array;
	// use the some array method to see if any element of `flat` array is an array, if true run the steamrollArray function again over the `flat` array <- Recursive Case | else return the `flat` array <- Base Case
	return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([3, [[4]]]));
