const person = { 
  name: 'Vladilen', 
  age: 29,
  isYoutuber: true,
  languages: ['ru', 'en'],
  address: {
    city: 'Saint-Petersburg', street: 'Nesvky',
  },

  'complex key': 'complex value',
  ['key_' + 21 * 2]: 'computed value', 
  greet() {
  console.log('Great from person', this)
  },

  arrow: () => {
    console.log('Person Arrow', this)
  },

  info() {
    console.log('Person name', this.name)
  },
}

//console.log(person.address)
//const addressKey = 'address'
//console.log(person[addressKey])
//console.log(person['complex key'])
// person.age++
// person.languages.push('de') 
//console.log(person.languages) 
// person.address = undefined 
// delete person.address
//console.log(person)

//DESTRUCTION

/* 
const age = person.age
const name = person.name
const languages = person.languages

const {age, name :lastname, languages} = person;
console.log(languages, age, lastname); 

for (let key in person){
  console.log(person[key])
}

class Human {
  isHuman = true;
  humanGreet(){
    console.log('greet from human')
  }
}
class Person extends Human {
  constructor(name, age){
    super()
    this.name = name ?? 'Undef name';
    this.age = age ?? 'Undef age';
  }
  sayHello(){
    console.log('Hello From ', this.name)
  }
}

const person1 = new Person('Vld',30);
const person2 = new Person('Elena',32);
person1.sayHello();
person2.sayHello();
console.log(person1);
*/
