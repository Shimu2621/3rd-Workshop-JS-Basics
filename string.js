const myFirstName = "Shimu";
console.log(myFirstName.charAt(0))

//charAt(index): Returns the character at the specified index in the string.

const myFullName = "Shimu Ziasmin";
console.log(myFullName.substring(8))

//substring: 0 index indicating the beginning of the substring which is s.  
//substring: 5 index indicating the end of the substring character up to which is u.
//So the result coming Shimu

const text = "Good, Morning";
console.log(text.slice(8))

//Returns a substring of the original string starting at the specified start index and ending at the specified end index (not inclusive).

const sentence = 'We are learning JavaScript';
console.log(sentence.indexOf("learning"))
//indexOf string give you the number of string.

const sentence2 = "We are learning JavaScript, And JavaScript is very popular";
console.log(sentence2.lastIndexOf("JavaScript"))
console.log('The total length of string:', sentence2.length)
console.log('The total length of string is:', sentence.length)
//length of string Returns the length of a String object.

const text2 = "Hello, World";
console.log(text2.split(" "))
//Split a string into substrings using the specified separator and return them as an array.