// var
let num1 = 10;
let num2 = 5;
let num0 = 0;

// add
function addition(){
    console.log("Addition 10 + 5:", num1 + num2);
}

// sub
function subtraction(){
    console.log("Subtraction 10 - 5:", num1 - num2);
}

// mul
function multiplication(){
    console.log("Multiplication 10 * 5:", num1 * num2);
}

// div
function division(){
    console.log("Division 10 / 5:", num1/num2);
}

// divB0
function divisionB0(){
    if(num0 == 0){
        console.log("Division by zero 10 / 0: Error: Division by zero!");
    } else {
        console.log("Division by zero 10 / 0:", num1/num0);
    }
}

function executeOP() {
    addition();
    subtraction();
    multiplication();
    division();
    divisionB0();
}

const calcu = executeOP;
console.log(calcu);
calcu();
