function findNextPerfectSquare(number) {
    if (!Number.isInteger(Math.sqrt(number))) {
        return -1
    }
    number++
    while (!Number.isInteger(Math.sqrt(number))) {
        number++
    }
    return number
}

console.log(findNextPerfectSquare(121))
console.log(findNextPerfectSquare(625))
console.log(findNextPerfectSquare(114))
