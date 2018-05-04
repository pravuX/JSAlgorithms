function binaryAgent(str) {
	// a helper function that takes a binary string and return the corresponding hexadecimal value;
	function binaryToHex(bit) {
		return parseInt(bit, 2);
	}
	// split the conjoined into an array of bytes and convert each byte into hexadecimal;
	let individualHexes = str.split(" ").map(binaryToHex);

	// transform the hexadecimal values into ASCII and then joint the array of ASCII codes to get the string;
	return individualHexes.map(el => String.fromCharCode(el)).join("");
}

binaryAgent(
	"01111001 01101111 01110101 00100000 01100001 01100011 01110100 01110101 01100001 01101100 01101100 01111001 00100000 01100010 01101111 01110100 01101000 01100101 01110010 01100101 01100100 00100000 01110100 01101111 00100000 01100100 01100101 01100011 01101111 01100100 01100101 00100000 01110100 01101000 01101001 01110011 00101110 00100000"
);
