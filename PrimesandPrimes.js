// A helper function to check if a given number if prime.
const isPrime = num => {
	for (let i = 2; i < num; i++) if (num % i === 0) return false;
	return num !== 1;
};
function minimumNumber(numbers) {
	// find the sum of array;
	let sum = numbers.reduce((a, b) => a + b);
	// keep track if a prime has been found or not;
	let found = false;
	// initialize the prime with the sum;
	let prime = sum;
	while (!found) {
		// unless found is true check if the current `prime` isPrime...
		if (isPrime(prime)) {
			// break the loop if a prime has been found;
			found = !found;
		} else prime++;
		// else continue incrementing the sum;
	}
	// finally return the difference between the sum and the prime;
	return prime - sum;
}
minimumNumber([50, 39, 49, 6, 17, 28]);
