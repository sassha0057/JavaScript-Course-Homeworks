//1 zadanie
function multiply (a, b) {
    return a * b;
};


function logArguments (fn) {
    return (...args) => {
        console.log(`Логированые аргументы: ${args}`);
        return fn(...args);
    }
}


const wrappedMultiply = logArguments(multiply);
const reslt = wrappedMultiply(2, 3);
console.log(`Результат выполнения: ${reslt}`);


//2 zadanie
function plus(a, b) {
    return a + b;
}

function validate(fn, validator) {
    return (...args) => {
        if (!validator(...args)) {
            throw new Error('Введите корректные значения.');
        }
        return fn(...args)
    }
}

function validator (...args) {
    return args.every(arg => typeof arg === 'number' && !Number.isNaN(arg));
}

const validSum = validate(plus, validator);
const result = validSum(4, 2);

console.log(result);


// 4 zadanie
function summarize(num) {
    return (arg = 1) => {
        return num + arg;
    }
}

const sum = summarize(5);
const res = sum(2);

console.log(res);


// 5 zadanie
function counter(startValue, step) {
    let currentValue = startValue;

    const count = function () {
        currentValue += step;
        return currentValue;
    };

    count.increment = function () {
        currentValue += step;
        return currentValue;
    }

    count.decrement = function () {
        currentValue -= step;
        return currentValue;
    }

    count.reset = function () {
        currentValue = startValue;
        return currentValue;
    }

    return count;
}

let myCounter = counter(4, 5);

console.log(myCounter());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());


//6 zadanie
function sequence(...fns) {
    return (currentValue) => {
        if (fns.length === 0) {
            return currentValue;
        }
        return fns.reduce((accumulator, fn) => fn(accumulator), currentValue);
    }
}

function a (x) {
    return x + 1;
}

function b (x) {
    return x + 2;
}

const finalResult = sequence(a, b);
const ebanuResultat = finalResult(1)

console.log(ebanuResultat);



