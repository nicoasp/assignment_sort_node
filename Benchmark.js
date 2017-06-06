const insertionSort = require('./insertionSort');
const bubbleSort = require('./bubbleSort');
const mergeSort = require('./mergeSort');
const mergeSortUndefined = require('./mergeSortUndefined');
const mergeSortRecursive = require('./mergeSortRecursive');

let funcArray = [
	{name: "Insertion", func: insertionSort}, 
	{name: "Bubble", func: bubbleSort}, 
	{name: "Merge", func: mergeSort}, 
	{name: "Merge Undef", func: mergeSortUndefined}, 
	{name: "Merge Rec", func: mergeSortRecursive}, 
];


const benchmark = (arr, func) => {
  let startTime = Date.now();
  for (let i = 0; i <= 100; i++) {
    func(arr);
  }
  let endTime = Date.now();
  return endTime - startTime;
};

													
let sorted = [];
for (let i = 1; i <= 1000; i++) {
	sorted.push(i);
}
let reverseSorted = [];
for (let i = 1000; i <= 1; i--) {
	reverseSorted.push(i);
}
let randomSmall = [];
for (let i = 1; i <= 100; i++) {
	randomSmall.push(Math.random() * 100 + 1);
}
let randomBig = [];
for (let i = 1; i <= 1000; i++) {
	randomBig.push(Math.random() * 1000 + 1);
}

const testArrays = [sorted, reverseSorted, randomSmall, randomBig];



const printCell = (value) => {
	value = value.toString();
	while (value.length < 15) {
		value += " ";
	}
	return value;
}

const printBenchmark = () => {
	funcArray.forEach((func) => {
		let toPrint = [printCell(func.name)];
		testArrays.forEach((arr) => {
			toPrint.push(printCell(benchmark(arr, func.func)));
		})
		console.log(toPrint.join(""));
	})
}

printBenchmark()

// let varyingArrays = [[948, 382, 30, 21, 0, 58, 8, 900, 35, 28]];

// console.log(
//   'BubbleSort time over 1000000 cycles:',
//   benchmark(testArrays[0], bubbleSort)
// );
// console.log(
//   'InsertionSort time over 1000000 cycles:',
//   benchmark(testArrays[0], insertionSort)
// );
// console.log(
//   'MergeSort time over 1000000 cycles:',
//   benchmark(testArrays[0], mergeSort)
// );

// testArrays.forEach(arr => {
//   console.log(bubbleSort(arr));
// });