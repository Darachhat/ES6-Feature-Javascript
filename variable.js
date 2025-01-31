
// variable

let value = 10 // decalre block scope variable
console.log(value);
console.log("Hello");
console.log("gg");

for ( let value = 0; value < 5; value++) {
    console.log(value)   
}

console.log(value);

const values = 10; // decalre global scope variable but cannot reassign
// values = 20; //TypeError: Assignment to constant variable.
console.log(values);

