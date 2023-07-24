const fibonacci = (n, zeroOrOneBase) => {
    let fibonArrci = []
    sum = 0
    let prev = 1
    for (let i = zeroOrOneBase; i <= n; i++) {
        if (i === 0) {
            fibonArrci.push(i);
            continue;
        }
        sum = sum + prev
        fibonArrci.push(sum)
        prev = sum - prev
    }
    return fibonArrci.join(',')
}

let zeroOrOneBase = 0
console.log(fibonacci(13, zeroOrOneBase))

zeroOrOneBase = 1
console.log(fibonacci(13, zeroOrOneBase))