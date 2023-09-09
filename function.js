// function declaration
function addNumbers(num1 ,num2) {
    return num1 + num2;
}

const num1 = 30;
const num2 = 50;

//function calling/invoking
console.log('The total is: ', addNumbers(num1, num2))

//parameter: num1, num2

//function expression
const addThreeNumbers = function(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}

console.log('The total calculation is:' , addThreeNumbers(20, 30, 40, 20))
//arguments: all those numbers in the console.log