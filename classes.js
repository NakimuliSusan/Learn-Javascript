class Students {
    constructor(name , age , school) {
       this.name = name;
       this.age = age;
       this.school = school;
       this.hobby = () => {
         return 'I love Playing';
       }
       
    }
}
Students.prototype.country = () => {
    return 'I love my country'
}

let susan = new Students('Susan',22,"AkiraChix")
console.log(susan);
console.log(susan.hobby());
susan['name'] = 'Pinky'
susan['email'] = 'nmsuzie@gmail.com'
console.log(susan);
console.log(susan.country());



// function constructor
function Student(name,age, country) {
    this.name = name;
       this.age = age;
       this.country = country
       this.hobby = () => {
         return 'I love Playing';
       } 
}

var second = new Student('Suzzy', 23 , 'Uganda')
console.log(second);


//destructuring 

var names = ['Chiri', 'Zipproah','Shamim']

var[conslate,...others ] = names 
console.log(conslate);
console.log(others);