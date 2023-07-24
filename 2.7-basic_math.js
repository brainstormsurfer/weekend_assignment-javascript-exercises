function basicOp(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2; break;
        case "-":
            return num1 - num2; break;
        case "*":
            return num1 * num2; break;
        case "/":
            return num1 / num2; break;
        default:
            return `the ${operator} operator is beyond the scope of this function`
    }
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))
console.log(basicOp('%', 7, 5))
