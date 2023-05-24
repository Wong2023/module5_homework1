let arr = [7, 8, 15, 20, 45];
function showWithDelay(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          console.log(arr[i]);
        }, 1000 * (i + 1));
    }
}
console.log(arr.length)
showWithDelay([7, 8, 15, 20, 45]);

