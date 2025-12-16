try{
    const userInput = prompt('Enter a number: ');
    const parsedInput = Number(userInput);

    if (Number.isNaN(parsedInput)){
        throw new Error('Entered value is incorrect')
    }

    if (parsedInput % 3 === 0 && parsedInput % 5 === 0) {
        console.log('FizzBuzz')
    } else if (parsedInput % 3 === 0) {
        console.log('Fizz')
    } else if (parsedInput % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log('Number' ,parsedInput, 'cannot be divided without a remainder')
    }

} catch(error) {
    console.error(error)
}

