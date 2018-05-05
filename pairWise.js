//@ts-check
function pairwise(arr, arg) {
	const firstHalf = arr.slice(0, arr.length / 2);
	const secondHalf = arr.slice(arr.length / 2);
	console.log(firstHalf, secondHalf);
	// My idea here is to check the firstHalf against the secondHalf and return those pairs that sum to arg into a neww array of objects(containing their indices);
}
pairwise([1, 4, 2, 3, 0, 5], 7);
