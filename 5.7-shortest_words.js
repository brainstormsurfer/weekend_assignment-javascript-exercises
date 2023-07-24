function shortestString(strings) {
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
            console.log("...(cough cough)..Cheater");
            arr.length = idx + 1
        }
    })
    console.log(shareShortest.length > 1 ? shareShortest : shortest)
    return shortest.length > 1 ? shortest.length : 1
}
console.log(shortestString("let's    put some   spaces be   twin - brothers"))
console.log(shortestString("same cool size"))
console.log(shortestString("i will never cheat"))



/*
 // console.log("HO",strings.charAt(i))
        if (strings.charAt(i) !== ' ') {
            newArr.push(strings[i])
        } else if (first) {
            // console.log("HEY")
            shortest = newArr.join('')
            newArr = []
            first = false
        } else if (shortest.length > newArr.join('').length && newArr.join!==('')) {
            shortest = newArr.join('')
                console.log("shortest", shortest)
            }

*/