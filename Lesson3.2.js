const userInput = prompt("Введите число: ");
const parsedInput = Number(userInput);
let perfectNumber = false;

try {
    if (Number.isNaN(parsedInput)) {
        throw new Error("Введите корректное число");
    }
    if (!Number.isInteger(parsedInput)) {
        throw new Error("Число должно быть целым");
    }
    if (parsedInput < 1){
        throw new Error(`Число должно быть больше, чем ${parsedInput}`);
    }
    for (let num = 1; num <= parsedInput; num++) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        if (sum === num) {
            if (!perfectNumber) {
                console.log(`Совершенные числа от 1 до ${parsedInput}:`);
                perfectNumber = true;
            }
            console.log(num);
        }
    }
    if (!perfectNumber) {
        console.log(`Совершенные числа от 1 до ${parsedInput} не найдены`);
    }
} catch (error) {
    console.error(error);
}
