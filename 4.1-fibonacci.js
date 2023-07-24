function fibonacci(n, zeroOrOneBase) {
    let fibonArrcci = []
    sum = 0
    let prev = 1
    for (let i = zeroOrOneBase; i <= n; i++) {
        if (i === 0) {
            fibonArrcci.push(i);
            continue;
        }
        sum = sum + prev
        fibonArrcci.push(sum)
        prev = sum - prev
    }
    return fibonArrcci.join(',')
}

let zeroOrOneBase = 0
console.log(fibonacci(13, zeroOrOneBase))

zeroOrOneBase = 1
console.log(fibonacci(13, zeroOrOneBase))