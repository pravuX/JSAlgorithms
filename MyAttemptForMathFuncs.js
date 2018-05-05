Math.floor = function(num) {
	// removes all floating points;
	return parseInt(num);
};
Math.ceil = function(num) {
	// checks if floored num is equal to num and increments num accordingly
	return parseInt(num) === num ? parseInt(num) : parseInt(num) + 1;
};
Math.round = function(num) {
	// checks if the decimal place is greater than 0.5 and ceils or floors the num respectively
	return num - parseInt(num) >= 0.5 ? parseInt(num) + 1 : parseInt(num);
};
