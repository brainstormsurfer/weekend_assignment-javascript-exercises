function toWeirdCase(str) {
    let weirdString = ""
    let letterOnly = (/^[A-Za-z\s]*$/)
    if (letterOnly.test(str)) {
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                weirdString += str.charAt(i).toUpperCase()
            } else {
                weirdString += str.charAt(i).toLowerCase()
            }
        }
        let regexPattern = /\s+/g;
        weirdString = weirdString.replace(regexPattern, ' ');
        return weirdString
    } else {
        return `this function receive only letters`
    }

}

console.log(toWeirdCase("I 5ov3 Num83r5"))
console.log(toWeirdCase("whats up with you all"))
console.log(toWeirdCase("deep       DEEP         s p A c e"))


