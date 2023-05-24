function allValuesSame(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}
// let arr1 = [1, 1, 1, 1];
// console.log(allValuesSame(arr1)); // true

let arr2 = [1, 2, 3, 4];
console.log(allValuesSame(arr2)); // false
