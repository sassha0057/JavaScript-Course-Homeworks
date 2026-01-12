function* fibonacci(n) {
    if (typeof n !== 'number' || n < 0 || isNaN(n)) {
        console.log("Лошара! Введи положительноe число!")
    }
    
    let [a, b] = [0, 1];

    while (a <= n) {
        yield a;
        [a, b] = [b, a + b];
    }    
}

const fibGen = fibonacci(5);
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());


function* flatten(arr) {
    for(const item of arr) {
        if(Array.isArray(item)) {
            yield* flatten(item)
        } else {
            yield item;
        }
    }
}

const nestedArr = [1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12, 13, [[14]]]]], [15, 16, [[[[[[[[[[[[17]]]]]]]]]]]]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);


async function* asyncGenerator(promises) {
    const promisesArr = Array.from(promises);
    
    while (promisesArr.length > 0) {
        const wrappedPromise = promisesArr.map(
            promise => promise.then(value => ({value, promise}))
        );

        const {value, promise} = await Promise.race(wrappedPromise);

        yield value;

        const completedPromise = promisesArr.indexOf(promise);
        promisesArr.splice(completedPromise, 1);
    }
}

const quickestPromise = (text, ms) => new Promise(res => setTimeout(() => res(text), ms));
const promises = [
    quickestPromise('First', 14000),
    quickestPromise('Second', 10000),
    quickestPromise('Third', 18000),
    quickestPromise('Fourth', 4000),
    quickestPromise('Fifth', 14900)
];

(async () => {
    console.log('Начало выполнения задач');
    let count = 0;

    for await (const finishPromise of asyncGenerator(promises)) {
        count++
        console.log(`${count}-я задача: ${finishPromise}`);
    }
    
    function wordDeclension (n) {
        const lastDigit = n % 10;
        const lastTwoDigits = n % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'задач';
        }

        if (lastDigit === 1) {
            return 'задача';
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'задачи';
        }

        return 'задач';
    }

  console.log(`Выполнено: ${promises.length} ${wordDeclension(promises.length)}`);
})();

