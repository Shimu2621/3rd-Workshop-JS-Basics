const student1 = {
	firstName: 'Abu',
	secondName: 'Rayhan',
	email: 'rayhan@example.com',
	age: 25,
	attend: true,
};

const student2 = {
	firstName: 'Alvi',
	secondName: 'Chowdhury',
	email: 'alvi@example.com',
	age: 25,
	attend: true,
};

const student3 = {
	firstName: 'Akib',
	secondName: 'Ahmad',
	email: 'akib@example.com',
	age: 25,
	attend: true,
};

const allStudents = [student1, student2, student3];

for (let i = 0; i < allStudents.length; i++) {
	sendEmail(allStudents[i].email);
}

function sendEmail(email) {
	console.log('Sending email to', email);
}

// examples using numbers
// get all the numbers
const numbers = [2, 5, 6, 7, 89, 100];

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

// get each numbers total with multiply 2 
const numbers1 = [2, 5, 6, 7, 89, 100];

for (let i = 0; i < numbers1.length; i++) {
	console.log(numbers1[i] * 2);
}

// get all numbers total
const numbers2 = [2, 5, 6, 7, 89, 100];

let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
	sum += numbers2[i];
}

console.log('numbers2', sum);