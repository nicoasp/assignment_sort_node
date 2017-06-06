const insertionSort = require('./insertionSort');
const bubbleSort = require('./bubbleSort');
const mergeSort = require('./mergeSort');
const mergeSortUndefined = require('./mergeSortUndefined');
const mergeSortRecursive = require('./mergeSortRecursive');
const quickSort = require('./quickSort');
const quickSortInPlace = require('./quickSortInPlace');

let funcArray = [
  // { name: 'Insertion', func: insertionSort },
  { name: 'Bubble', func: bubbleSort }
  // { name: 'Merge', func: mergeSort },
  // { name: 'Merge Undef', func: mergeSortUndefined },
  // { name: 'Merge Rec', func: mergeSortRecursive }
];

const benchmark = (arr, func) => {
  let totalTime = 0;
  for (let i = 0; i < 1; i++) {
    let arrCopy = arr.slice(0);

    let startTime = Date.now();
    func(arrCopy);
    let endTime = Date.now();

    totalTime += endTime - startTime;
  }
  return totalTime;
};

const benchmark2 = (arr, func) => {
  let startTime = Date.now();

  for (let i = 0; i < 1; i++) {
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
for (let i = 10000; i >= 1; i--) {
  reverseSorted.push(i);
}
let randomSmall = [];
for (let i = 1; i <= 100; i++) {
  randomSmall.push(Math.floor(Math.random() * 100) + 1);
}
let randomBig = [];
for (let i = 1; i <= 10000; i++) {
  randomBig.push(Math.floor(Math.random() * 1000) + 1);
}

const testArrays = [sorted, reverseSorted, randomSmall, randomBig];

const printCell = value => {
  value = value.toString();
  while (value.length < 15) {
    value += ' ';
  }
  return value;
};

const printBenchmark = () => {
  console.log(
    printCell('') +
      printCell('Sorted') +
      printCell('ReverseSorted') +
      printCell('RandomSmall') +
      printCell('RandomBig')
  );
  funcArray.forEach(func => {
    let toPrint = [printCell(func.name)];
    testArrays.forEach(arr => {
      toPrint.push(printCell(benchmark(arr, func.func)));
    });
    console.log(toPrint.join(''));
  });
};

printBenchmark();
