function smallestCommons(arr) {
	// create a new array containing all the missing pieces of the range.
	const rangeArr = [];
	for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
		rangeArr.push(i);
	}

	// set lcm as the greatest number in the range.
	let lcm = rangeArr[0];

	// loop through the range and get the highest common factor of the current lcm and current number of the range.
	for (let i = 1; i < rangeArr.length; i++) {
		let hcf = GCD(lcm, rangeArr[i]);

		lcm = lcm * rangeArr[i] / hcf;
	}
	return lcm;

	// Use the Euclidian algorithm to find the greatest/highest common factor of passed two numbers.
	function GCD(a, b) {
		// base case to see if current remainder equals zero, if so return the previous remainder i.e the HCF.
		if (b === 0) {
			return a;
		} else return GCD(b, a % b);
		// the recursive case that swaps the two remainders;
	}
}
console.log(smallestCommons([1, 5]));
