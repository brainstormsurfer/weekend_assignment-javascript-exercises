function checkIsogram(str) {
    str = str.toLowerCase()
    let testingStr = ""
    for (let i = 0; i < str.length; i++) {
        if (!testingStr.includes(str[i])) {
            testingStr += str[i]
        } else return false
    }
    return true
}



console.log(checkIsogram("Dermatoglyphics"))
console.log(checkIsogram("aba"))
console.log(checkIsogram("moOse"))