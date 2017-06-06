const mergeSortUndefined = arr => {
  if (arr.length < 2) {
    return arr;
  }

  let leftArr = arr.slice(0, Math.floor(arr.length / 2));
  let rightArr = arr.slice(Math.floor(arr.length / 2), arr.length);

  return merge(mergeSortUndefined(leftArr), mergeSortUndefined(rightArr));
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



module.exports = mergeSortUndefined;