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
console.log(printFullName())

function addTwoNumbers () {
    let a = 20
    let b = 45
    let sum = a + b
    return sum 
}
console.log (addTwoNumbers())

function square1 () {
    let num = 4
    let square = num * num 
    return square 
}
console.log (square1())

//Function with a parameter 

function areaOfCircle (r){
    let area = Math.PI * r * r
    return area
}
console.log (areaOfCircle(2))

function sumOfTwo(a, b){
    let sum = a+b 
    return sum 
}
console.log (sumOfTwo(12, 18))