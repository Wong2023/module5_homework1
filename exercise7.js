const arr = [1, 2, 3, 4, null, '5', 0, undefined];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
let stringcount = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  else {
    stringcount++;
  }
}

console.log(`Even count: ${evenCount}`);
console.log(`Odd count: ${oddCount}`);
console.log(`Zero count: ${zeroCount}`);
console.log(`string count: ${stringcount}`);