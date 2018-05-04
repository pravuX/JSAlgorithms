function updateInventory(arr1, arr2) {
	// Initialize the array to store values;
	const outputArr = [];

	// following tow forEach(es) find the right items to be pushed into the outputArr.
	arr1.forEach(el => {
		// this here is the name of the current item in iteration;
		const currName = el[1];
		// this finds the elements in arr2 that also exist in arr1;
		const commonEl = arr2.find(element => element.includes(currName));
		if (commonEl) {
			// and when they are not `undefined`, sum the number of items and push them into outputArr.
			outputArr.push([commonEl[0] + el[0], commonEl[1]]);
		} else outputArr.push(el);
		// this pushes the uncommon elements to the ouputArr.
	});
	// pretty similar to the code above but it only pushes the uncommon elements of arr2 into outputArr.
	arr2.forEach(el => {
		const currName = el[1];
		const commonEl = outputArr.find(element => element.includes(currName));
		if (!commonEl) {
			outputArr.push(el);
		}
	});
	// remove all the `undefined` values in ouputArr and sort it alphabetically based on the name of the item;
	const updatedAndClearInv = outputArr
		.filter(el => el !== undefined)
		.sort((a, b) => a[1] > b[1]);
	return updatedAndClearInv;
}

// Example inventory lists
var curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"]
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"]
];

updateInventory(curInv, newInv);
let test1 = updateInventory(
	[[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
	[
		[1, "Hair Pin"],
		[1, "Half-Eaten Apple"],
		[1, "Bowling Ball"],
		[1, "Toothpaste"]
	]
);
console.log(test1);
////////////////// SMALLER AND FASTER ///////////////////
function updateIn(arr1, arr2) {
	arr2.forEach((el, i) => {
		// finds the index of items of arr2 that already exis in arr1;
		const x = arr1.map(i => i[1]).indexOf(el[1]);
		// if the item doesnot already exist then push it into arr1;
		if (x === -1) arr1.push(el);
		// if it exists then update its count;
		else arr1[x][0] += el[0];
	});
	// sort the arr1 in alphabetically
	return arr1.sort((a, b) => a[1] > b[1]);
}
