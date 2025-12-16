function reverseString(str) {
    let result = str.split("").reverse().join("");
    return result;
}

console.log(reverseString("hello"));

function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
   
    if (a === 0 && b === 0) {
        return "НОД не определён";
      } else if (a === 0) {
        return b;
      } else if (b === 0) {
        return a;
    }

    let min;
    if (a < b) {
        min = a;        
    } else {
        min = b;
    }

    let gcd;
    for (let i = min; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
            break
        }
    }

    return gcd;
}

// console.log(findGCD(0, 0));

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s|[,.?!"/-]/g, "");
    
    let result = str.split("").reverse().join("");
    
    if (str === result) {
        return "Строка является палиндромом";
    } else {
        return "Строка не является палиндромом"
    }
}

// console.log(isPalindrome("Он в аду давно!"));