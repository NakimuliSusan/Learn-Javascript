// An object is an unordered collection of related data of primitive data types in form
// of key value pairs.

let person = {
    name: 'John',
    age : 36,
    school: 'AkiraChix',
    displayInfo: function () {
       console.log(`My name is ${person.name}`);
    }
}
console.log(person)
console.log (typeof(person))
console.log(person.name)
person.displayInfo();

// constructor objects
let name = Object()
console.log(name)
// new turns it into a constructor
function Car (make , model) {
   this.model = model;
   this.make = make;
}
let Subaru = new Car('Toyota', 'Subaru')
console.log(Subaru.model);

// using prototypes 

let footballers = {
    position: 'striker'
}

let x = Object.create(footballers);
console.log(x.position);
// Accesing keys in an object we use the dot notation and bracket notation.

let persons = {
    gender : "male"
}
 
var person1 = Object.create(persons);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";
 
for (let key in person1) {
// Output : name, age, nationality
// and gender
    console.log(key);
} 

let t = [1, 2, 3, 4];
console.log("Original array:")
console.log(t)
let y = [...t]; // spread operator
console.log("Clone of the said array:")
console.log(y)

let mycolor = ['red','green','yellow','blue','white'];
console.log(mycolor.join());
console.log(mycolor.toString());
console.log(mycolor.join('+'));



function create (a,b,y) {
    let n = []; // holding the arrayu
    for (var i = 0; i < a; i++) {
        n[i] = []; // columns of the array
    }
    for (var p = 0; p < a; p++) {
        for(var j = 0; j < b; j++) {
            n[p][j] = j;
            
        }
    }
    console.log(n)
    
}
create(3,5);



let numbs = 856780;     
    //  num = new Array(numbs);
    //  console.log(num);
     if (numbs.length > 1) {
    let left = 0;
    let right = numbs.length-1;
    

    while (left < right) {
       
     [numbs[left],numbs[right]] =  [numbs[right] = numbs[left]];
     ++left;
     --right;
    
    }
    console.log(Number(numbs));
    
  }
  console.log(numbs);

//   let reverseString = function(s) {
//     let arr = s.split(''), left = 0, right = arr.length - 1;
//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         ++left;
//         --right;
//     }
//     return arr.join('');
// }; 

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)



function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}
console.log(reverseNum(856780))
console.log(reverseNum(23));

// Promises in javascript are objects representing the event of completion or 
// failure of a ansynchronous operation.
//Ansynchronous operations are techniques that enable your program to start 
// a potential long running and still be responsive to other events.

