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

const testArrays = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 6, 1, 3, 8, 2, 9, 7, 5, 10],
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [4, 1, 7, 1, 8, 7, 9, 3, 5]
];

testArrays.forEach(arr => {
  console.log(mergeSort(arr));
});
