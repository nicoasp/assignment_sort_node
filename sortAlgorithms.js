const testArrays = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[4, 6, 1, 3, 8, 2, 9, 7, 5],
	[9, 8, 7, 6, 5, 4, 3, 2, 1],
	[4, 1, 7, 1, 8, 7, 9, 3, 5]
]

const insertionSort = (arr) => {
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
}


const swap = (arr, index1, index2) => {
	let prov = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = prov;
}


const bubbleSort = (arr) => {
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
}

testArrays.forEach((arr) => {
	console.log(bubbleSort(arr));
})


