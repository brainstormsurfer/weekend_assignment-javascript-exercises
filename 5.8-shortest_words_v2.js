const longestString = (strings) => {
    let newArr = strings.split(' ')
    let longest = ""
    let shareLongest = []
    let first = true
    newArr.forEach((word) => {
        if (word.length > 1) {
            if (first) {
                longest = word
                shareLongest.push(word)
                first = false
            } else if (word.length >= longest.length) {
                if (word.length === longest.length) {
                    shareLongest.push(word)
                } else longest = word
            }
        }
    })
    console.log("longest:", shareLongest.length > 1 ? shareLongest : longest)
    return longest.length
}

console.log(longestString("let's    put some   spaces be   twin - brothers"))
console.log(longestString("same cool size"))
console.log(longestString("i will never cheat"))