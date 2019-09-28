// class People
class cPeople {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`My name is ${this.name}`);
  }
}

const p1 = new cPeople('Zenfone 5');
p1.speak();

// function People
function fPeople(name) {
  return {
    speak: () => console.log(`My name is ${name}`),
  };
}
const p2 = fPeople('Huawei P20');
p2.speak();

const p3 = fPeople('Xiaomi Mi8');
p3.speak();
