function findUnique(arr) {
  let oneOfAKind = 0
  let i = 0
  while (i < arr.length) {
    if (i + 2 < arr.length) {
      oneOfAKind = arr[i] === arr[i + 1] ?
        arr[i + 2] :
        arr[i] === arr[i + 2] ?
          arr[i + 1] :
          arr[i]
    } else break;
    i++
  }
  return oneOfAKind
}


console.log(findUnique([1, 1, 1, 2, 1, 1]))
console.log(findUnique([0, 0, 0.55, 0, 0]))
console.log(findUnique([0, 0, 7]))
console.log(findUnique([0, 7, 7]))
console.log(findUnique([7, 0, 7]))
