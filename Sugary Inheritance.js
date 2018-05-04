// @ts-check

class Rapper {
	constructor(slogan) {
		this.slogan = slogan;
	}
	saySlogan() {
		return this.slogan;
	}
}

class Dawg extends Rapper {
	constructor(name, album, slogan) {
		super(slogan);
		this.name = name;
		this.album = album;
	}

	get Album() {
		return this.album;
	}
}

const Snoop = new Dawg(
	"Snoop Dogg",
	"Doggystyle",
	"When you're high its time to FLY!"
);

console.log(Snoop);
