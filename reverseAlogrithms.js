function reverseArray(arr) {
  // create start and end indices for accessing values off of `arr`
  let start = 0,
    end = arr.length - 1;

  // iterate over the `arr` and add each element to the `outputArr`
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    // set the first element of the `outputArr` to the last element of the `arr`
    outputArr[start] = arr[end];
    // advance start index to next level and degrade down end index by 1
    start = start + 1;
    end = end - 1;
  }

  // finally return the reversed values in `outputArr`
  return outputArr;
}
console.log(reverseArray(["A", "B", "C"]));

// this function basically does the samething but it mutates the original `arrayValue`
function reverseArrayInPlace(arr) {
  // again set the start and end values not indices for the array.
  let start = arr[0],
    end = arr[arr.length - 1];

  // iterate from the end to the start and push the element to the end of the `arr` and remove the frontmost element as you go.
  for (let i = end; i >= start; i--) {
    arr.push(i);
    arr.shift();
  }

  // return the new mutated version of 	`arrayValue`
  return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
