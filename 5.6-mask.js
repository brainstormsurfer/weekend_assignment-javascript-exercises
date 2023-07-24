const muskify = (strToHide) => {

    for (let i = 0; i < strToHide.length - 4; i++) {
        strToHide = strToHide.replace(strToHide[i], "#")
    }
    return strToHide
}

console.log(muskify("4556364607935616"))
console.log(muskify("64607935616"))
console.log(muskify("1"))
console.log(muskify(""))
console.log(muskify("Skippy"))
console.log(muskify("Nananananananananananananananana Batman!"))