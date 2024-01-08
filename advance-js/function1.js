// const randomNumber = Math.floor(Math.random() * 10);

// const randomNumber1 = Math.floor(Math.random() * 100);

// const randomNumber2 = Math.floor(Math.random() * 1000);

// using function we can write
function generateRandomNumber(max) {
	const randomNumber = Math.floor(Math.random() * max);
	return randomNumber;
}

console.log(generateRandomNumber(10));
console.log(generateRandomNumber(100));
console.log(generateRandomNumber(1000));