// // ADDITION
// let num1 = parseInt(prompt('Type any number'));
// let num2 = parseInt(prompt('Type any number'));

// function add(a,b){
//     return a  + b;
// }

// console.log(`the addition of the two numbers is ${add(num1 , num2)}`);

// // SUBTRACTION



// function sub(a,b){
//     return a  - b;
   
// }

// console.log(`the subtraction of the two numbers is ${sub(num1 , num2)}`);

// // DIVISION




// function div(a,b){
//     return a  / b;
// }

// console.log(`the division of the two numbers is ${div(num1 , num2)}`);


// // MODULOS




// function mod(a,b){
//     return a  % b;
// }

// console.log(`the modulos for the two number is ${mod(num1 , num2)} `);

// MULTIPLICATION

// function mul(a,b){
//     return a  * b;
// }

//console.log(`the multiplication for the two number is ${mod(num1 , num2)} `);

// let a = parseInt(prompt('Type any number for A'));
// let b = parseInt(prompt('Type any number for B'));
// let c = parseInt(prompt('Type any number for C'));


// function solveQuadratic(a,b,c){
//     let find = (b * b) - (4 * a * c); 
//     let x1 , x2
   
//     if (find > 0){
//         x1 = (-b + Math.sqrt(find)) / (2 * a)
//         x2 = (-b - Math.sqrt(find)) / (2 * a)
//         return [x1 , x2];
//     }else if(find === 0){
//         x1 = -b / (2 * a);
//         return [x1];
//     }else{
//         return[];
//     }

// }
// let solutions = solveQuadratic(a,b,c)
// console.log(`the answer for x1 and x2 is ${solutions}`);


const number1 = parseInt(prompt('enter a number')); 
const number2 = parseInt(prompt('enter a number')); 
function add(num1,num2) {
    return num1 + num2
}
console.log(add(number1,number2))
console.log(alert(`your answer is ${add(number1,number2)}`))


