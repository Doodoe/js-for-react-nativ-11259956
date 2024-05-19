
const createUserProfiles = require('./userInfo')
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


function formatArrayStrings(strings, resultArray) { 
    var ModifiedNames=[]
    if (strings.length !== resultArray.length) {  
        throw new Error("The two arrays must be of the same length.");
    }
    return strings.map((str, index) => {
        if (resultArray[index] % 2 === 0) {
            return  ModifiedNames=str.toUpperCase();
        } else {
            return  ModifiedNames=str.toLowerCase();
        }
    });
}

const strings = ["Abdul", "Malik", "Abdallah", "Doodoe", "Dybala"];
const ModifiedNames = formatArrayStrings(strings, resultArray);
console.log("Formatted Strings: ", ModifiedNames);


const originalNames= ["Malik", "Dybala", "Doodoe","Dybala","Abdul"]
const userProfiles = createUserProfiles(originalNames, ModifiedNames);
console.log("User Profiles: ", userProfiles);

module.exports = { processArray, formatArrayStrings };
