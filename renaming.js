// Say we have this code
const person = new Person({age: 33});
const age = ageOf(person) + 1;
console.log(age); // => ?????


// With out look we probably thing ageOf is like
function ageOf(person) {
  return person.age;
}

// But it's all like
function ageOf(person) {
  return person.age + ' years old';
}

// 'cause
// Product request
// Age: 33
// Age: 33 years old
// So this actually is:
const person = new Person({age: 33});
const age = getAge(person) + 1;
console.log(age); // => '34 years old1'


// Refactor
function getAge() { }
// becomes
function getHumanReadableAge() { }

