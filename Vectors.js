class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(vec) {
		let x = this.x + vec.x;
		let y = this.y + vec.y;
		return new Vec(x, y);
	}
	minus(vec) {
		let x = this.x - vec.x;
		let y = this.y - vec.y;
		return new Vec(x, y);
	}
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}
let newVec = new Vec(1, 2);
