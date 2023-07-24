const shortestString = (strings) => {
    let newArr = strings.split(' ')
    let shortest = ""
    let shareShortest = []
    let first = true
    newArr.forEach((word, idx, arr) => {
        if (word.length > 1 && word.toUpperCase() !== "I") {
            if (first) {
                shortest = word
                shareShortest.push(word)
                first = false
            } else if (word.length <= shortest.length) {
                if (word.length === shortest.length) {
                    shareShortest.push(word)
                }
                shortest = word
            }
        } else if (word.toUpperCase() === "I") {
            console.log("'I' as a word..!? (cough cough...cheater)");
            arr.length = idx + 1
            shortest = word
        }
    })
    console.log(`Shortest word${shareShortest.length > 1 ? "s: " + shareShortest : ": " + shortest}`)
    return shortest.length > 1 ? shortest.length : 1
}
console.log(shortestString("let's    put some   spaces be   twin - brothers"))
console.log(shortestString("same cool size"))
console.log(shortestString("i will never cheat"))