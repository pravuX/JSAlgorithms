var Person = function(firstAndLast) {
	this.setFirstName = first => {
		this.firstName = first || firstAndLast.split(" ")[0];
	};
	this.setLastName = last => {
		this.lastName = last || firstAndLast.split(" ")[1];
	};
	this.setFullName = firstAndLast => {
		this.setFirstName(firstAndLast.split(" ")[0]);
		this.setLastName(firstAndLast.split(" ")[1]);
	};
	this.getFirstName = () => {
		if (this.firstName) return this.firstName;
		this.setFirstName();
		return this.firstName;
	};
	this.getLastName = () => {
		if (this.lastName) return this.lastName;
		this.setLastName();
		return this.lastName;
	};
	this.getFullName = () => {
		return `${this.getFirstName()} ${this.getLastName()}`;
	};
};

var bob = new Person("Bob Ross");
