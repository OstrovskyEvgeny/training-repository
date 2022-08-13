// #1
let fife = 5;
let ten = 10;

let multiply = function() {
    return fife * ten;
}

// #2

let addOne = () => {
    const one = 1;
    const sum = () => {
        return one + multiply();
    }

    return sum();
}

// #3

const factorial = (n) => {
    let result = 1;

    for(let counter = 1; counter <= n; counter++) {
        result *= counter;
    }
    
    return result;
}
