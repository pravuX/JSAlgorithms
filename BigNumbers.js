// Addition is a function that implements the simple alogrithm that we use everyday for adding numbers;
function addition(a, b, acc = "", carry = 0) {
	// a base case to reset the code;
	if (!(a.length || b.length || carry)) return acc.replace(/^0+/, "");
	// find how much needs to be carried over;
	carry = carry + (~~a.pop() + ~~b.pop());
	// this is the accumulator; add the 10th place value of the number to be carried;
	acc = carry % 10 + acc;
	// this ensures that carry is greater than 10;
	carry = carry > 9;
	// this is the recursive case to call itself with new values of arguments.
	return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
	if (a === "0" && b === "0") return "0";
	return addition(a.split(""), b.split(""));
}
