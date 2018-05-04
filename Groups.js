// A group is a data structure similar to that of Set in javaScript. I have implemented this just for fun.

class Group {
	constructor() {
		this.elements = [];
	}
	// a method to add new values to the group;
	add(value) {
		if (!this.has(value)) {
			this.elements.push(value);
		}
	}
	// one to delete existing values from the group;
	delete(value) {
		this.elements = this.elements.filter(el => el !== value);
	}
	// this one checks if a value exists in the group;
	has(value) {
		return this.elements.includes(value);
	}
	// a static method to take an iterable object and return a new group with its values;
	static from(iterableObject) {
		let group = new Group();
		for (let items of iterableObject) {
			group.add(items);
		}
		return group;
	}
	// Implementation of the widely accepted [Symbol.iterator] method in the Group
	[Symbol.iterator]() {
		// call the iterableGroup creator this
		return new iterableGroup(this);
	}
}

// the iterableGroup class;
class iterableGroup {
	constructor(group) {
		this.group = group;
		this.pos = 0;
	}
	// next method to iterate the group;
	next() {
		if (this.pos >= this.group.elements.length) {
			return { done: true };
		} else {
			let result = { value: this.group.elements[this.pos], done: false };
			this.pos++;
			return result;
		}
	}
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
}
