function toCamelCase(str) {
	let split = str.split(/[_\-]/);
	let output = [];
	output.push(split[0]);
	split.map((el, i, arr) => {
		if (arr[i + 1]) {
			output.push(arr[i + 1].charAt(0).toUpperCase() + arr[i + 1].substr(1));
		}
	});
	return output.join("");
}
toCamelCase("A-B-C");

///////////////// USING REGX ONLY //////////////////////
const regCamel = str => {
	return str.replace(/[-_]\w/gi, match => match.charAt(1).toUpperCase());
};
console.log(regCamel("The-Stealth-Warrior"));
