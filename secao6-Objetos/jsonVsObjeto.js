const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() { return a + b + c }
};

console.log(JSON.stringify(obj))

// O formato JSON precisa ter todos os atributos e valores em string delimitados por aspas duplas
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));
console.log(JSON.parse('{"a":1.5, "b":"texto literal", "c":true, "d":{}, "e": []}'));