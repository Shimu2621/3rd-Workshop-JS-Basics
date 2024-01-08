// function nameOfFunction(name) {
// 	console.log('Hello', name);
// }

// nameOfFunction('Murshed'); // Hello Murshed
// nameOfFunction('Fahim'); // Hello Fahim
// nameOfFunction(); // Hello undefined

function nameOfFunction(name) {
	if (!name) {
		console.log('Please provide your name');
	} else {
		console.log('Hello', name);
	}
}

nameOfFunction('Murshed'); // Hello Murshed
nameOfFunction('Fahim'); // Hello Fahim
nameOfFunction(); // Please provide your name