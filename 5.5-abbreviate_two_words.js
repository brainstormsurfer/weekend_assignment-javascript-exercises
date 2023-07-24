const twoInitials = (str) => {
    let arr = str.split(' ')
    return arr[0].charAt(0).toUpperCase() + "." + arr[1].charAt(0).toUpperCase()
}
console.log(twoInitials("sam Harris"))
console.log(twoInitials("Patrick feeney"))

