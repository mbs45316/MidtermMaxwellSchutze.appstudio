function calcAvgSquare(num1, num2, num3) {
    return ((num1 + num2 + num3) / 3) * (Math.pow(num1,2))
}
function divideTwo(num1, num2) {
    return num1 % num2
}

let userChoice = confirm("Press 'OK' if you want to do an average calculation.\nPress 'Cancel' if you want to do a remainder of two number division.")

if (userChoice == true) {
    input1 = parseInt(prompt('Enter your first number:'))
    input2 = parseInt(prompt('Enter your second number:'))
    input3 = parseInt(prompt('Enter your third number:'))

    answer = calcAvgSquare(input1, input2, input3)

    console.log(`The answer is ${answer}.`)
}

else {
    input1 = parseInt(prompt('Enter your first number:'))
    input2 = parseInt(prompt('Enter your second number:'))
    
    answer = divideTwo(input1, input2)
    
    alert(`The result of dividing ${input1} by ${input2} is ${Math.trunc(input1 / input2)} with a remainder of ${answer}.`)
}