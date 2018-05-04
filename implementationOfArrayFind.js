function findElement(arr, func) {
	for (let item of arr) {
		if (func(item)) {
			return item;
		}
	}
}

let output = findElement([1, 3, 5, 9], function(num) {
	return num % 2 === 0;
});
console.log(output);
