function floor(num) {
	const numStr = num.toString();
	const nums = numStr.match(/\d+/g).map(Number);
	return nums[0];
}

function ceil(num) {
	const numStr = num.toString();
	const nums = numStr.match(/\d+/g).map(Number);
	return nums[1] ? ++nums[0] : nums[0];
}

function round(num) {
	const numStr = num.toString();
	const nums = numStr.match(/\d+/g).map(Number);
	if (!nums[1]) nums[1] = 0;
	const decimal = Number("." + nums[1].toString());
	return decimal >= 0.5 ? ceil(num) : floor(num);
}
console.log(round(10));
