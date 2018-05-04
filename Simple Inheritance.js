// A simple example to understand prototypical inheritance in javascript.

// Here we hava a constructor `Rapper` with a propterty 'slogan' and methong 'saySlogan'.
function Rapper(slogan) {
	this.slogan = slogan;
	this.saySlogan = () => this.slogan;
}

// Here we have another constructor `Dawg` with properties 'name' & 'album'.
function Dawg(name, album, slogan) {

	// We are calling the `Rapper` constructor with 'slogan' argument whose context is bound to that of `Dawg` constructor.
	// We do this to inherit the proterties and methods of the `Rapper` constructor into `Dawg` constructor.
	Rapper.call(this, slogan);
	this.name = name;
	this.album = album;
}

// We here are assigning the prototype of the `Dawg` to the `Rapper` constructor prototype.
Dawg.prototype = Object.create(Rapper.prototype);
// We are again chaning the constructor's prototype to the `Dawg` constructor for ensuring that the new instances of objects created using the `Dawg` constructor while have `Dawg` Object as their constructor.	
Dawg.prototype.constructor = Dawg;


const snoop = new Dawg(
	"Snoop",
	"Doggystyle",
	"If the ride is more fly, then you must buy."
);
console.log(snoop);
console.log(snoop.__proto__.__proto__)
console.log(snoop.saySlogan());
