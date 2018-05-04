/*
	@author - terminatorP
	==> PEACE <==
*/
function permAlone(str) {
	// a helper function to find the permutations of a provided string with repeats by backtracking recursivley;
	function permut(string) {
		if (string.length < 2) return [string]; // The base case

		const permutations = [];

		// this is where the magic happens;
		for (let i = 0; i < string.length; i++) {
			let char = string[i]; // get the first character of the string
			let remainingString = string.slice(0, i) + string.slice(i + 1, string.length); // get the reamining characters of the string
			for (let subPermutation of permut(remainingString)) { // The recursive case
				permutations.push(char + subPermutation);
			}
		}
		return permutations;
	}
	const permutations = permut(str);
	function hasRepeat(str) {
		return /(\w)\1/.test(str);
	}
	return permutations.filter(el => !hasRepeat(el)).length
}
