
function binaryToInt(arr) {
    // return parseInt(arr.join(''), 2)
    return arr.reduce((acc, val) => acc << 1 | val)
}

console.log(binaryToInt([0, 0, 0, 1]))
console.log(binaryToInt([0, 0, 1, 0]))
console.log(binaryToInt([0, 1, 0, 1]))
console.log(binaryToInt([1, 0, 0, 1]))
console.log(binaryToInt([0, 1, 1, 0]))
console.log(binaryToInt([1, 1, 1, 1]))
console.log(binaryToInt([1, 0, 1, 1]))
console.log(binaryToInt([1, 0, 1, 1, 1, 0]))
console.log(binaryToInt([1, 0, 0, 0, 1, 0, 1, 1]))
console.log(binaryToInt([1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1]))
