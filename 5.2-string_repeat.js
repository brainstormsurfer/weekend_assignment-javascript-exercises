function repeatString(count, str) {
    let multipliedStr = ""
    while (count > 0) {
        multipliedStr += str
        count--
    }

    return multipliedStr

}

console.log(repeatString(6, "l"))
console.log(repeatString(5, "Hello"))