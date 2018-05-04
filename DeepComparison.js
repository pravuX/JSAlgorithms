function deepEqual(a, b) {
  // some default cases to return true or false;
  if (a === b) return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  // gather the keys of both `a` and `b` in two separate arrays.
  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  // check to see if both objects have the same number of properties and return a boolean accordingly
  if (keysA.length != keysB.length) return false;

  // loop through the first keys array `keysA` and check if `b` doesnot have the key or the values of `a` and `b` are not equal
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
