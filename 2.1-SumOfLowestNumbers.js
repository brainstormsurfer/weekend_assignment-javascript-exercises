// 2 versions :
// manually (self-challenged) and short (framework's library) 

function sumOfLowest(arr) {
    let min1 = arr[0]
    let min2 = arr[1]
    arr.forEach(function (num) {
        if (num < min1) {
            min2 = min1 < min2 ? min1 : min2
            min1 = num
        } else if (num < min2 && num !== arr[0]) {
            min2 = num
        }
    })
    return min1 + min2
}
console.log(sumOfLowest([10, 343445353, 3453445, 3453545353453]))
console.log(sumOfLowest([19, 5, 42, 2, 77]))
console.log(sumOfLowest([5, 10, 3, 2, 0]))


function sumOfLowestShort(arr) {
    let min1 = Math.min(...(arr))
    arr.splice(arr.indexOf(min1), 1)
    let min2 = Math.min(...(arr))
    return min1 + min2
}
console.log(sumOfLowestShort([10, 343445353, 3453445, 3453545353453]))
console.log(sumOfLowestShort([19, 5, 42, 2, 77]))
console.log(sumOfLowestShort([5, 10, 3, 2, 0]))

