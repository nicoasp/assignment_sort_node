
const quickSortInPlace = (arr, start = 0, end = 0) => {
  if (end <= 0) {
    end = arr.length;
  }

  if (end - start <= 1) {
    return;
  }

  let pivot = arr[end - 1];
  let pivotIndex = end - 1;

  for (let i = end - 2; i >= start; i--) {
    if (arr[i] > pivot) {
      arr[pivotIndex] = arr[i];
      for (let j = i; j <= pivotIndex - 1; j++) {
        arr[j] = arr[j + 1];
      }
      pivotIndex--;
      arr[pivotIndex] = pivot;
    }
  }

  if (pivotIndex - 1 > start) {
    quickSortInPlace(arr, start, pivotIndex);
  }
  if (pivotIndex < end - 2) {
    quickSortInPlace(arr, pivotIndex + 1, end);
  }
  

  return arr;
};


// let randomSmall = [];
// for (let i = 1; i <= 10; i++) {
//   randomSmall.push(Math.floor(Math.random() * 100) + 1);
// }

// console.log(quickSortInPlace(randomSmall));


module.exports = quickSortInPlace;












// const swap = (arr, index1, index2) => {
//   let prov = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = prov;
// };

//[7, 1, 5, 6, 2]
// 2 is pivot
// Partition starts at 0 (haven't checked to see if anything is greater or less than pivot)
// 7 is greater than 2, stays where it is
// 1 is less than 2, swaps places with partition pivot (known to be larger than pivot)
//[1, 7, 9, 1, 2]
// Partition index goes up one (now 1, or between 1 and 7)
// Once we're through the array and everything is on left/right of partition, place pivot between left and right
// (swap pivot with partition index)
//[1, 2, 5, 6, 7]
// Call quicksort on arrays left and right of partition ([7] & [2, 5, 6, 7])
//
// const quickSortInPlace = (arr) => {
// 	let pivot = arr.length - 1
// 	let partition = 0;
// 	for (let i = 0; i > arr.length - 1; i++) {
// 		if (arr[i] < pivot) {
// 			swap(arr, arr[i], arr[partition])
// 			partition++
// 		}
// 	}
//
//
// //call recursively for left and right side of partition
// }

//[1, 5, 4]
