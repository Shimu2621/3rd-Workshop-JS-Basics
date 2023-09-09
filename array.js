let fruits = ["Banana", "Orange", "Apple", "Strawberry"];
fruits[1] = "Mango";//It replace index 1(Mango) instead of Orange.
console.log(fruits);

const numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers[2])
numbers.push(10);// this array pushing number 10 to adding.
console.log('Numbers after pushing:', numbers);

numbers.pop();
console.log('Numbers after popping:', numbers)// this array removing last numbers from all numbers.

numbers.unshift(10);
console.log('Numbers after unshifting:', numbers)// adding this number at the beginning

numbers.shift()
console.log('Numbers after shifting:', numbers)//removing the first number with this array

//So overall [push array and unshift array] this 2 kind of array using to adding numbers at the beginning
// Besides [Pop array and Shift array]this 2 kind of array using to removing number from the beginning

console.log(numbers.length);

console.log(numbers.indexOf(4));