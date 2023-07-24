function duplicatesCounter(str) {
    let literalResult = `${str}:` + "\n"
    let counter = 1
    let dupliChars = ([,])
    str = str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        let charToCheck = str[i]
        str = str.replace(charToCheck, '')

        while (str.indexOf(charToCheck) !== -1) {
            counter++
            str = str.replace(charToCheck, '')
        }
        if (counter > 1) {
            dupliChars = [charToCheck, counter]
            // console.log(dupliChars)
            literalResult += `'${dupliChars[0]}' occurs ${dupliChars[1]} times` + "\n"
            counter = 1
        }
    }

    if (dupliChars[0] !== undefined) {
        return literalResult
    } else { return literalResult += 'no characters repeat more than once' + "\n" }

}
console.log(duplicatesCounter("abcde"))
console.log(duplicatesCounter("aabbcde"))
console.log(duplicatesCounter("aaBbcde"))
console.log(duplicatesCounter("indivisibility"))
console.log(duplicatesCounter("Indivisibilities"))
console.log(duplicatesCounter("aA11"))
console.log(duplicatesCounter("ABBA"))
