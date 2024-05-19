STDUENT ID: 11259956    
TASK1
{
   1. I created a function called "processArray" which takes an array as arguement of and returns
    a new array called "resultsArray".
   2. withtin the function is a for loop which takes the index "i" and an initialization of 0 with a condition 
    which checks whether "i" is less than the length input array.
    3. If "i" is less than array.length, the loop continues; otherwise, it stops.
   4. After each iteration,"i" is incremented by 1 (i++) This moves to the next index in the array for
     the next iteration.
   5.The Condition (if (array[i] % 2 === 0)) checks if the current element of the array is even,
    then it is squared and pushed to the "resultsArray" .
    6.if the current elemnt of the array is odd,it is multipled and pushed to the "resultsArray".
    
    
}
TASK 2
{
    1.I created a function called "formatArrayString" which takes an an array of strings and an array of 
    of numbers "resultArray" procesed by the the "processArray" as its arguements and returns a array called 
    "ModifiedNames"
    2.within the function is an if statement with condition which checks if the lenght of strings of arrays is 
    not equal to the lenght of resultArray.
    3.Then it throws an error "the two arrays must be of the same lengths". this ensures equal number
     of elements  arrays in both arrays.
    4.if the lenth of arrays of both arguements are equal the functions uses "map" to iterate over each 
    string in the strings array.
    For each string, it checks the corresponding value in "resultArray"
   5 Converts the string to uppercase if the value is even by the"str.toUpperCase()"method and 
   get stored to the"ModifiedNames" array.
    6.Converts the string to lowercase if the value is oddby the usage of  "str.toLowerCase()"method 
    and also get stored in the "formatedString".
}
TASK 3
{
   1. I created a function called "creatUsersProfile" which takes two arguements and returns an object called
   "userProfile".
   2. the first arguement is an array called "originalNames" and second is a the array of modified names
    from Task 2 "ModifiedNames".
   3.within the function is an if stament with condition whichecks if the lenght of the "originalNames" is not
   equal to the length of the "ModifiedNames". 
   4.Then it throws an error "the two arrays must be of the same lengths". this ensures equal number
     of elements arrays in both arrays.
 5. I Used the method map to iterate over originalNames.
    For each name, creates an object with:
    1.id: Auto-incremented (starting from 1).
    2.originalName: The name from originalNames.
    3.modifiedName: The corresponding name from ModifiedNames
    which then stored in the "userProfile" object and then retuened when the function "creatUserProfile " is called




}