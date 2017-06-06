const merge = (xs, ys) => {
  if (xs.length === 0) return ys;
  if (ys.length === 0) return xs;
  const x = xs[0];
  const y = ys[0];

  return x > y
    ? [x, ...merge(xs.slice(1), ys)]
    : [y, ...merge(xs, ys.slice(1))];
};

function mergeSortRecursive(arr) {
  if (arr.length < 2) return arr;

  const middle = parseInt(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return merge(mergeSortRecursive(left), mergeSortRecursive(right));
}


module.exports = mergeSortRecursive;