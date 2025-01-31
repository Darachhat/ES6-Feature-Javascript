// The spread  (...) and rest operators are incredibly versatile. They allow you to spread the elements of an array into individual variables or combine variables into an array. These features are particularly useful in functions that accept a variable number of arguments.
// ​Spread បម្រួម​ array 
// Rest បំបែក array into single array or object

// Rest Opearation Example
// with object
const person =  { name: 'Dara', age: 25, city: "Phnom Penh"}
const {name, ...details} = person
console.log(name); // Output: Dara
console.log(details); // Output: { age: 25, city: 'Phnom Penh' }

// with array
const [first,second, ...rest] = [1,2,3,4,5]
console.log(first);// Output: 1
console.log(second);// Output: 2
console.log(rest); // Output: [ 3, 4, 5 ]

// Spread Operation Example
const employee = { name:'Rea', age: 21}
const job = { role: 'Developer' }
const employees = { ...employee, ...job } 
console.log(employees); // Output: { name: 'Rea', age: 21, role: 'Developer' }
