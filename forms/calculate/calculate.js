function calcAvgSquare(num1, num2, num3) {
    return ((num1 + num2 + num3) / 3) * (Math.pow(num1,2))
}

let input1 = parseInt(prompt('Enter your first number:'))
let input2 = parseInt(prompt('Enter your second number:'))
let input3 = parseInt(prompt('Enter your third number:'))

let answer = calcAvgSquare(input1, input2, input3)

console.log(`The answer is ${answer}.`)