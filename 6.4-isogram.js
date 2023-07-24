const checkIsogram = (str) => {
    str = str.toLowerCase()
    let testingStr = ""
    for (const char of str) {
        if (!testingStr.includes(char)) {
            testingStr += char
        } else return false
    }
    return true
}

console.log(checkIsogram("Dermatoglyphics"))
console.log(checkIsogram("aba"))
console.log(checkIsogram("moOse"))

