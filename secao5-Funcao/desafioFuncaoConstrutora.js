// class People
// class cPeople {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// const p1 = new cPeople('Zenfone 5');
// p1.speak();

// Transform class cPeople in a constructor Function cPeople
function cPeople(name) {
  this.name = name;
  this.speak = () => console.log(`My name is ${this.name}`);
}

const p1 = new cPeople('Maria');
p1.speak();
