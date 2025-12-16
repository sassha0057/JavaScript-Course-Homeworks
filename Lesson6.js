function reverseArray (arr) {
    let result = arr.toReversed();
    return result;
}

// console.log([1, 2, 3, 4, 5]);
// console.log(reverseArray([1, 2, 3, 4, 5]));


const students = [ 
    { name: "Alice", age: 20, grade: 4.5 }, 
    { name: "Bob", age: 21, grade: 3.9 }, 
    { name: "Charlie", age: 19, grade: 4.8 } 
]; 


function calculateAverageGrade() {
    let result = students.reduce((accumulator, grade) => accumulator + grade.grade , 0);
    return result / students.length;
}

// console.log(calculateAverageGrade(students))



function uniqueValues(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

const arr1 = [1, 2, 3, 4, 5]; 
const arr2 = [3, 4, 5, 6, 7]; 
const uniqueValuesArray = uniqueValues(arr1, arr2); 

// console.log(uniqueValuesArray);



function counter() {
    let count = 0;
    return function () {
        return ++count;
    }
}

const countdown = counter();

console.log(countdown());
console.log(countdown());
console.log(countdown());
