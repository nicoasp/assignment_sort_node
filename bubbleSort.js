const swap = (arr, index1, index2) => {
  let prov = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = prov;
};

const bubbleSort = arr => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
};

module.exports = bubbleSort;