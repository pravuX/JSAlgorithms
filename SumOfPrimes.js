function sumPrimes(num) {
	const primes = [];
	for (let i = 1; i <= num; i++) {
		let factors = 0;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0) {
				factors++;
			}
		}
		if (factors === 2) {
			primes.push(i);
		}
	}
	return primes.reduce((acc, cur) => acc + cur);
}
console.log(sumPrimes(977));
