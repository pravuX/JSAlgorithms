const NATO = {
	A: "Alfa",
	B: "Bravo",
	C: "Charlie",
	D: "Delta",
	E: "Echo",
	F: "Foxtrot",
	G: "Golf",
	H: "Hotel",
	I: "India",
	J: "Juliett",
	K: "Kilo",
	L: "Lima",
	M: "Mike",
	N: "November",
	O: "Oscar",
	P: "Papa",
	Q: "Quebec",
	R: "Romeo",
	S: "Sierra",
	T: "Tango",
	U: "Uniform",
	V: "Victor",
	W: "Whiskey",
	X: "Xray",
	Y: "Yankee",
	Z: "Zulu"
};

function to_nato(words) {
	// make sure all letters are uppercased
	words = words
		.toUpperCase()
		// then remove any whitespaces
		.replace(/\s/g, "")
		// after that replace any character whatsoever with its corresponding string or with itself;
		.replace(/./g, match => (NATO[match] ? NATO[match] : match) + " ");

	// finally remove any whitespaces from the start or end of the string and return it.
	return words.trim();
}
to_nato("That was close!");

/////////////// IMPLEMENTED WITH MAP /////////////////
const mappedNato = str => {
	return str
		.replace(" ", "")
		.split("")
		.map(el => (NATO[el.toUpperCase()] ? NATO[el.toUpperCase()] : el))
		.join(" ");
};
mappedNato("That was so close!");
