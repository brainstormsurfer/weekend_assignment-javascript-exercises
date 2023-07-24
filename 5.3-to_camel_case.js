const transformToPascal = (str) => {
    let newArr = []
    let allStrings = ""
    if (str.indexOf("-") !== -1) {
        newArr = str.split("-")
    } else if (str.indexOf("_") !== -1) {
        newArr = str.split("_")
    }

    for (let i = 0; i < newArr.length; i++) {
        let newStr = newArr[i]
        let charCode = newStr.charCodeAt(0)
        let toPascal = String.fromCharCode(charCode - 32)
        if (i !== 0) {
            newStr = newStr.replace(newStr.charAt(0), toPascal)
        }
        allStrings += newStr
    }
    return allStrings
}

console.log(transformToPascal("was_pascal_a_painter"))
console.log(transformToPascal("who-was-pascal"))
console.log(transformToPascal("I-guess-i'll-google-it"))
console.log(transformToPascal("Not_some_kind_of_a_camel_obviously"))




// let str = "ran"
// console.log("hi", str[0].charCodeAt(str[0]))
// console.log("hoo",String.fromCharCode(114-32))
