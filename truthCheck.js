function truthCheck(collection, pre) {
	// Is everyone being true?
	return collection.every(el => Boolean(el[pre]));
}
truthCheck(
	[
		{ user: "Tinky-Winky", sex: "male", age: 0 },
		{ user: "Dipsy", sex: "male", age: 3 },
		{ user: "Laa-Laa", sex: "female", age: 5 },
		{ user: "Po", sex: "female", age: 4 }
	],
	"age"
);
