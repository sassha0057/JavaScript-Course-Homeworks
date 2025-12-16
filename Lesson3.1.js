const userInput = prompt("Введите число: ");
const parsedInput = Number(userInput);
let divider = false;

try {
    if (Number.isNaN(parsedInput)) {
        throw new Error("Введите корректное число");
    }
    
    if (!Number.isInteger(parsedInput)) {
        throw new Error("Число должно быть целым");
    }
    
    if (parsedInput < 1) {
        throw new Error(`Число должно быть больше, чем ${parsedInput}`);
    }

    if (parsedInput === 1) {
        console.log((`Число ${parsedInput} не является простым числом`));
    } else {
        for (let i = 2; i < parsedInput; i++) {
            if (parsedInput % i === 0){
                console.log(`Число ${parsedInput} не является простым числом`);
                divider = true;
                break;
            }
        }
        if (!divider) {
            console.log(`Число ${parsedInput} является простым числом`);
        }
    }
} catch (error) {
    console.error(error);
}
