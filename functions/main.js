//Function Declaration

function functionName () {
    // code goes here 
}
functionName () //calling function by its name and with parentheses

//Function without a parameter 
//---a function which makes a number square 

function square () {
    let num = 4
    let sq = num * num
    console.log (sq)
}
square ()

//function without parameter 

function addTwoNumbers () {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log (sum)
}
addTwoNumbers () //a function has to be called by its name so that it can be executed. 

//Function Returning Value

function printFullName () {
    let firstName = 'Kenneth'
    let middleName = 'Muriuki'
    let lastName = 'Kimathi'
    let space = ' '
    let fullName = firstName + space + middleName + space + lastName
    return fullName
}
console.log(printFullName()) //returns Kenneth Muriuki Kimathi 

function addTwoNumbers () {
    let a = 20
    let b = 45
    let sum = a + b
    return sum 
}
console.log (addTwoNumbers()) //returns 65 

function square1 () {
    let num = 4
    let square = num * num 
    return square 
}
console.log (square1()) //returns 16 

//Function with a parameter 

function areaOfCircle (r){
    let area = Math.PI * r * r
    return area
}
console.log (areaOfCircle(2)) //returns 12.5663...

function sumOfTwo(a, b){
    let sum = a+b 
    return sum 
}
console.log (sumOfTwo(12, 18)) //returns 30 

function printFullName (firstName, middleName, lastName) {
    return `${firstName} ${middleName} ${lastName}`
}
console.log(printFullName('Kenneth', 'Muriuki', 'Kimathi')) //returns Kenneth Muriuki Kimathi

//functions with many parameters 

function sumArrayValues (arr){
    let sum =0;
    for(let i = 0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1,2,3,4,5]; 
console.log(sumArrayValues(numbers)); //returns 15 