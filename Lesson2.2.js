try{
    const userInput = prompt('Enter year: ');
    const parsedInput = Number(userInput);

    if (Number.isNaN(parsedInput) || parsedInput <= 0){
        throw new Error('Entered value is incorrect')
    }
    
    if ((parsedInput % 4 === 0 && parsedInput % 100 !== 0) || (parsedInput % 400 === 0)) {
        console.log('Leap year')
    } else {
        console.log('Not a leap year')
    }

} catch(error) {
    console.error(error)
}

