function trimString(str) {
    return str.length > 2 ? str.slice(1, str.length - 1) : str
}

console.log(trimString("quantum physics"))
console.log(trimString("Hi"))
console.log(trimString("LOVE"))