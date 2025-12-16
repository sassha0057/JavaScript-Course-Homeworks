try{
    const userInput = prompt('Enter your age: ');
    const parsedInput = Math.round(Number(userInput));
    const lastDigit = parsedInput % 10;
    const lastTwoDigits = parsedInput % 100;
    let year;

    if (Number.isNaN(parsedInput) || parsedInput <= 0){
        throw new Error('Entered value is incorrect')
    }
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        year = 'лет'
    } else if (lastDigit === 1) {
        year = 'год'
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        year = 'года'
    } else {
        year = 'лет'
    }

    console.log('Вам',parsedInput,year)
} catch(error) {
    console.error(error)
}