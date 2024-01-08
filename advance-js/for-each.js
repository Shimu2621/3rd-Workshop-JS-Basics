const numbers = [2, 5, 6, 7, 89, 100];

numbers.forEach(function (value, index, array) {
	console.log(value, index, array);
});

/* * Output
2 0 [ 2, 5, 6, 7, 89, 100 ]
5 1 [ 2, 5, 6, 7, 89, 100 ]
6 2 [ 2, 5, 6, 7, 89, 100 ]
7 3 [ 2, 5, 6, 7, 89, 100 ]
89 4 [ 2, 5, 6, 7, 89, 100 ]
100 5 [ 2, 5, 6, 7, 89, 100 ]
*/

const numbers1 = [2, 5, 6, 7, 89, 100];

let sum = 0;
numbers1.forEach(function (value) {
	sum += value;
});
console.log(sum); // 209