/*function pairwise(arr, arg) {
	if (arr[0] == undefined) return 0;

	const testArr = arr;
	const indicesArr = [];
	for (let i = 0; i < testArr.length; i++) {
		for (let j = 0; j < testArr.length; j++) {
			if (i !== j && testArr[i]+testArr[j] === arg) {
				indicesArr.push(testArr.indexOf(testArr[i]));
				delete testArr[i];
				indicesArr.push(testArr.indexOf(testArr[j]));
				delete testArr[j];	
			}
		}
	}
	return indicesArr.reduce((a, b) => a + b); // <== final solution
}*/
const pairwise = (arr, arg) => {
	return arr.reduce((acc, cur, i, arr) => {
		for (let x = i + 1; x < arr.length; x++) {
			if (arr[i] + arr[x] === arg) {
				acc += i + x;
				arr[i] = arr[x] = NaN;
			}
		}
		return acc;
	}, 0);
};
console.log(pairwise([1, 1, 1], 2));
