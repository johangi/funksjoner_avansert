function add(...numbers){
    const sum = numbers.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    return sum
}
let addResult = add(2, 6, 8);
console.log(addResult);

function subtract(...numbers){
    const sum = numbers.reduce((accumulator, number) => {
        return accumulator - number;
    });
    return sum
}
let subtractResult = subtract(10, 1, 2);
console.log(subtractResult);

function divide(...numbers){
    const sum = numbers.reduce((accumulator, number) => {
        return accumulator / number;
    });
    return sum
}
let divideResult = divide(420, 2);
console.log(divideResult);

function multiply(...numbers){
    const sum = numbers.reduce((accumulator, number) => {
        return accumulator * number;
    });
    return sum
}
let multiplyResult = multiply(2, 27);
console.log(multiplyResult);

function logResult(mathFunction, ...number){
    console.log(mathFunction(...number));
}

logResult(add, 2, 7);
logResult(subtract, 7, 2);
logResult(divide, 14, 7);
logResult(multiply, 7, 7);