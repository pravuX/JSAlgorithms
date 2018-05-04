function regexPigLatin(str) {
	return str.replace(/^(\w)(.*)/, "$2$1ay");
}

console.log(regexPigLatin("hi"));
