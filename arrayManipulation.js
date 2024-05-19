
function processArray(array) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultArray.push(array[i] * array[i]);
        } else {
            resultArray.push(array[i] * 3);
        }
    }
    return resultArray;
}
const array = [1, 2, 3, 4, 5];
const resultArray = processArray(array);
console.log("Processed Numbers: ", resultArray);
