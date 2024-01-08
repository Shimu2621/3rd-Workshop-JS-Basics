const person = {
    firstName: "Shimu",  // key value pair
    lastName: "Ziasmin",
    age: 31,
    isDeveloper: true
}

//accessing the value of object 
console.log(person.age);// accessing with dot notation

person.city = "Florida";// add a new property to the object

console.log(person);

let calculater = {
    add: function ( a, b){
        return a + b
    },
    subtract: function ( x, y){
        return x - y
    },
    multiply: function(x, y){
        return x * y
    },
    decimil: function (a, b){
        return a / b
    }


}

console.log(calculater.add(10, 20))
console.log(calculater.subtract(20, 5))
console.log(calculater.multiply(10, 15))
console.log(calculater.decimil(20, 2))





