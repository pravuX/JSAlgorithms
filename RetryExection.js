class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
	if (Math.random() < 0.2) {
		return a * b;
	} else {
		throw new MultiplicatorUnitFailure("Klunk");
	}
}
function reliableMultiply(a, b) {
	// non self-terminating for loop to keep trying untill multiplication is done successfully!
	for (;;) {
		try {
			return primitiveMultiply(a, b);
		} catch (e) {
			if (!(e instanceof MultiplicatorUnitFailure)) {
				throw e;
			}
		}
	}
}

console.log(reliableMultiply(8, 8));
// → 64
