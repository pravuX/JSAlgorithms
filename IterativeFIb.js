// Fibonacci using the good old algorithm
function printFib(n) {
	const fibArray = [];
	fibArray[0] = 0;
	fibArray[1] = 1;
	for (let i = 2; i < n; i++) {
		fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
	}
	return fibArray;
}
let fib = printFib(10);
console.log(fib);
