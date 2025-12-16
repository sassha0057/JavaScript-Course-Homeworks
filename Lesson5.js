function doubleLetter(str) {
    let result = str.split('').map(i => i + i).join('');
    return result;
}

// console.log(doubleLetter('abbc'));

function padString(str, length, symbol) {
    let result = str.padEnd(length, symbol);
    return result;
  }

//   console.log(padString('Ivan', 7, '*'));

function camelCase(str) {
    let result = str.toLowerCase().replace(/[^a-zA-Zа-яА-ЯёЁ0-9]+([a-zA-Zа-яА-ЯёЁ0-9])/g, (_ ,i) => i.toUpperCase())
    return result;
}

console.log(camelCase('МамА-ПАпа-дедуШКА_браТ_сестРА тетЯ. баБушка, сыН'));