// // Function pre-ES6
// function add(x,y) {
//     return x + y;
// }

// // Arrow Function
// const add = (x,y) => x+y;

// Example of Before-ES6
function findArea (width, hieght) {
    return width * hieght
}

let valueOfArea = findArea(10,20); // Output: 200
console.log("Value of Area: ", valueOfArea);
 

// Atfer ES6 Example of Arrow Function
const findCircleArea = (radius) => {return Math.PI * radius * radius}
let valueOfCircleArea = findCircleArea(10)
console.log("Value of circle Area 1: ", valueOfCircleArea);
console.log("Value of circle Area 2: ", findCircleArea(20));