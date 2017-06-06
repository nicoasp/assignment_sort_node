const testArrays = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 6, 1, 3, 8, 2, 9, 7, 5],
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [4, 1, 7, 1, 8, 7, 9, 3, 5]
];

const insertionSort = arr => {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    while (arr[i] < sortedArr[j]) {
      sortedArr[j + 1] = sortedArr[j];
      j -= 1;
    }
    sortedArr[j + 1] = arr[i];
  }
  return sortedArr;
};

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

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  let leftArr = arr.slice(0, Math.floor(arr.length / 2));
  let rightArr = arr.slice(Math.floor(arr.length / 2), arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  let mergedArr = [];

  while (leftArr.length || rightArr.length) {
    if (leftArr[0] > rightArr[0] || !leftArr.length) {
      mergedArr.push(rightArr.shift());
    } else {
      mergedArr.push(leftArr.shift());
    }
  }

  return mergedArr;
};

const benchmark = (arr, func) => {
  let startTime = Date.now();
  for (let i = 0; i <= 1000000; i++) {
    func(arr);
  }
  let endTime = Date.now();

  return endTime - startTime;
};

let varyingArrays = [[948, 382, 30, 21, 0, 58, 8, 900, 35, 28]];

console.log(
  'BubbleSort time over 1000000 cycles:',
  benchmark(testArrays[0], bubbleSort)
);
console.log(
  'InsertionSort time over 1000000 cycles:',
  benchmark(testArrays[0], insertionSort)
);
console.log(
  'MergeSort time over 1000000 cycles:',
  benchmark(testArrays[0], mergeSort)
);

// testArrays.forEach(arr => {
//   console.log(bubbleSort(arr));
// });
