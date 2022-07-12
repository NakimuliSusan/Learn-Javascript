var people = {
    name : 20,
    country : 'Kenya'
};
console.log(people['country']);
console.log(people.country);

var person = new Object(people);
person.age = 30;
person.name = 'John';
console.log(person);

for (keys in person) {
    console.log(keys);
}
for ([keys,value] of Object.entries(person)) {
    console.log(`${keys}:${value}`);
}

// Object.freeze(person);
person['school'] = 'AkiraChix'
console.log(person['school']);

// using seal 
Object.seal(person);
person.country = 'United States'
person['Hobby'] = 'Singing'
console.log(person);


Object.assign(person,{school: 'UAE'});
console.log(person);

//a method to a value of a property which is a function

let person2 = {
    name: 'John',
    age : 36,
    school: 'AkiraChix',
    displayInfo: function () {
        console.log(`My name is ${this.name} and my age is ${this.age} years old.`);
       return`My name is ${person.name}`;
    },
    friends:{
        name: 'Joy',
        age: 23,
        hobby: {
          first: 'Swimming',
          play: () =>{
            return `play with me`
          }
        }
    }
}
console.log(person2.displayInfo());

console.log(people);
console.log(person2.friends.name);
console.log(person2.friends.hobby.first);
console.log(person2.friends.hobby.play());