function validate(password) {
	// validates any password with at least one number,one uppercase character and one lowercase character which should be 6 characters or greater;
	return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}
// ?= is the look ahead expression in regex and the paranthesis is used to reparate the look aheads
// the ? after *(wildcard) is to make the expression non greedy.
// the fina characterset makes sure that the length of the string is aleast 6 characters or long.
