function bubblesort(arr) {
  let isTrue = false;
  while (!isTrue) {
    isTrue = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        isTrue = false;
        let tmp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

bubblesort([1, 5, 2, 8, 3, 0, 45, 12]);
