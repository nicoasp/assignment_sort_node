const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let temp = [pivot];
  let pivotIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      temp.push(arr[i]);
    } else {
      temp.unshift(arr[i]);
      pivotIndex++;
    }
  }
  return quickSort(temp.slice(0, pivotIndex)).concat(
    [pivot],
    quickSort(temp.slice(pivotIndex + 1))
  );
};

let randomSmall = [];
for (let i = 1; i <= 100; i++) {
  randomSmall.push(Math.floor(Math.random() * 100) + 1);
}

console.log(quickSort(randomSmall));
