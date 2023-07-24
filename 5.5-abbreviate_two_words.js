function twoInitials(str) {
    let newArr = str.split(' ')
    return newArr[0].charAt(0).toUpperCase() + "." + newArr[1].charAt(0).toUpperCase()
}
console.log(twoInitials("sam Harris"))
console.log(twoInitials("Patrick feeney"))

