function mumbling(str) {
    let newArr = str.split('')
    let charToCompare = ""
    let newStr = ""
    let isHeadOfChain = true
    let isZed = false
    let count = 1

    newArr.forEach((char) => {
        charToCompare = char

        if (char === "z") {
            isZed = true
            count--
        } else {
            isZed = false
        }

        if (!isHeadOfChain && newStr.charAt(newStr.length - 1) !== "-" && !isZed) {
            newStr += "-"
        }
        if (!isHeadOfChain && !isZed) {
            isHeadOfChain = true
        }
        for (let i = 0; i < count; i++) {
            if (isHeadOfChain && !isZed) {
                newStr += char.toUpperCase()
                isHeadOfChain = false
            } else {
                newStr += char.toLowerCase()
            }
        }
        if (!isZed)
            count++
    })
    return newStr
}


console.log(mumbling("hello"))
console.log(mumbling("abcd"))
console.log(mumbling("RqaEzty"))
console.log(mumbling("cwAt"))
