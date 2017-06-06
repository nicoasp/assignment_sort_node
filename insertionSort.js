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


module.exports = insertionSort;

