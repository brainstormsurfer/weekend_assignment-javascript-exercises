function sumOfAllNumbersFromOneTo(number) {
    let sum = 0
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
}

console.log(sumOfAllNumbersFromOneTo(8))
console.log(sumOfAllNumbersFromOneTo(3))
console.log(sumOfAllNumbersFromOneTo(1))