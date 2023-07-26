// const digits = [1, 2, 3];

// Convert array to number
// const num = parseInt(digits.join(''));
// console.log(num);

// Add one to number
// const resultNum = num + 1;

// Convert result number to array of digits
// const resultArr = resultNum.toString().split('').map(Number);

// console.log(resultArr);
 // [1, 2, 4]





const digit= [1, 2, 3];

const number = digit.reduce((acc, curr) => acc * 10 + curr);
console.log(number);

const result = number +1
console.log(result);

const resultarr = result.toString().split('').map(Number)

console.log(resultarr);

