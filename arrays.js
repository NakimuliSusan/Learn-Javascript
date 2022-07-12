let a = ['Mango', 'Apple',]
console.log(a);

// instantiating an array object
let b = new Array('Mango' , 'Apple');
console.log(b);

console.log(a[1]);

b.push('Banana') // towards the end of the array
console.log(b);
b.unshift('Grapes') //towards the beginning of the array
console.log(b);
b.shift()
console.log(b);

let c = b.map( item => `I love ${item}`)
console.log(c);
// for each function

// call back function
function people () {
    return'You guys';
}
function me (a, callback) {
    console.log(a);
    console.log(callback);
}
me(21, people())

 /// more call back functions
function love (item) {
     return `I love ${item}`;
}

let v = b.map(love)
console.log(v);