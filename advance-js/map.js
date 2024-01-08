//syntax of map

const age = [20, 15, 21, 22, 4, 2];
const result = age.map(function(elements){
    // console.log(elements*elements); //this line gives the doubled value individually
    return elements*elements;
})
console.log(result);
