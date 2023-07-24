function fibonacci(n, zeroOrOneBase) {
    if (zeroOrOneBase > 1 || zeroOrOneBase < 0) {
        return 'Please enter 0 or 1 as the starting value of the series'
    }
    if (n === null || n === NaN || n === undefined || typeof (n) !== 'number') {
        return `Please enter a valid (positive) NUMBER`
    }
    if (n <= 0) {
        return [0, 0, null]
    }


    let fibonArrcci = []
    sum = 1
    let tempA = zeroOrOneBase
    let tempB = zeroOrOneBase
    let tempC = 1
    for (let i = zeroOrOneBase; i <= n; i++) {
        if (i === 0) {
            fibonArrcci.push(i);
            fibonArrcci.push(i);
            continue;
        }
        sum = tempA + tempB + tempC
        fibonArrcci.push(sum)
        tempA = tempB
        tempB = tempC
        tempC = sum

    }
    return fibonArrcci.join(',')
}

console.log(fibonacci(2, 2))
console.log(fibonacci("2"))
let zeroOrOneBase = 0
console.log(fibonacci(13, zeroOrOneBase))

zeroOrOneBase = 1
console.log(fibonacci(13, zeroOrOneBase))
