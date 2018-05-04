function arrayToList(arr) {
  // initialization of list and final value of rest.
  let list = null;

  // walk backwards the array and change list at each iteration.
  for (let i = arr.length - 1; i >= 0; i--) {
    // change the value to the current value of `i` and `rest` should equal to the previous version of `list`.
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  // initialization of an empty array to work on.
  let array = [];

  // node is the current object `list` and when the `list` exists we push the node's value into the array and set the node's object ot the object.
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(el, list) {
  // we accpet an element and a list then return and object containing value of el and rest object of list.
  return { value: el, rest: list };
}
function nth(list, n) {
  // if `list` doesnot exist return undefined; --> The Base Case <--
  // else if list equals zero return the first value of list.
  // finally call yourself with the list switched to inner object and n reduced; --> The Recursive Case <--
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
