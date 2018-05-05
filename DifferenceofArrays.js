function array_diff(a, b) {
  return a.filter(el => b.indexOf(el) < 0).concat(b.filter(el => a.indexOf(el) < 0));
}

console.log(array_diff([], [1, 2]));