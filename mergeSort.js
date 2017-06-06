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
    if (!leftArr.length) {
      mergedArr.push(rightArr.shift());
      continue;
    }
    if (!rightArr.length) {
      mergedArr.push(leftArr.shift());
      continue;
    }

    leftArr[0] < rightArr[0]
      ? mergedArr.push(leftArr.shift())
      : mergedArr.push(rightArr.shift());
  }

  return mergedArr;
};

module.exports = mergeSort;
