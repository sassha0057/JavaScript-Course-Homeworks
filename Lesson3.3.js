const userInput = prompt("Введите высоту:");
const parsedInput = Number(userInput);

try {
    if (Number.isNaN(parsedInput)) {
        throw new Error("Введите корректную высоту");
    }
    if (!Number.isInteger(parsedInput)) {
        throw new Error("Высота должна быть целым числом");
    }
    if (parsedInput < 1){
        throw new Error(`Число должно быть больше, чем ${parsedInput}`);
    }
    for (let i = 1; i <= parsedInput; i++) {
        let cristmasTree = '';
        for (let space = 1; space <= parsedInput - i; space++) {
            cristmasTree += ' ';
        }
        for (let star = 1; star <= 2 * i - 1; star++) {
            cristmasTree += '*';
        }
        console.log(cristmasTree);
    }
} catch (error) {
    console.error(error);
}