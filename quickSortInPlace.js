const quickSortInPlace = (arr, start = 0; end = 0) => {
	if (arr.length < 2) { return arr; }
	let pivot = arr[arr.length - 1];

	let pivotIndex = arr.length - 1;

	for (let i = arr.length - 2; i >= 0; i--) {		
		if (arr[i] > pivot) {
			arr[pivotIndex] = arr[i];
			for (let j = i; j <= pivotIndex; i++) {
				arr[j] = arr[j + 1];
			}
			pivotIndex--;
			arr[pivotIndex] = pivot;
		}
	}

	quickSort(temp.slice(0, pivotIndex));
	quickSort(temp.slice(pivotIndex + 1));
	return arr;

}
