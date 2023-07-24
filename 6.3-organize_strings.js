const organizedString = (str1, str2) => {

    str1 = !str1 ? str2 : str1
    str2 = !str2 ? str1 : str2

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let organizedStr = ""

    for (let asciScan = 97; asciScan < 123; asciScan++) {
        if (str1.includes(String.fromCharCode(asciScan)) ||
            str2.includes(String.fromCharCode(asciScan))) {
            organizedStr += String.fromCharCode(asciScan)
        }
    }
    return organizedStr
}

console.log(organizedString("xyaabbbccccdefww", "abcdefklmopqwxy"))
console.log(organizedString("abcdefghijklmnopqrstuvxyz"))