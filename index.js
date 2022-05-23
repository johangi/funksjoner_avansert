function add(...numbers){
    const sum = numbers.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    console.log(sum);
}

add(1, 7, 8);

function subtract(...numbers){
    const sum = numbers.reduce((accumulator, number) => {
        return accumulator - number;
    });
    console.log(sum);
}

subtract(10, 1, 2);

function divide(...numbers){
    const sum = numbers.reduce((accumulator, number) => {
        return accumulator / number;
    });
    console.log(sum);
}

divide(420, 2);

function multiply(...numbers){
    const sum = numbers.reduce((accumulator, number) => {
        return accumulator * number;
    });
    console.log(sum);
}

multiply(2, 27);

function logResult(mathFunction, ...number){
    console.log(mathFunction(...number));
}

logResult(add, 2, 7)