function nb_year(popOrigin, growthPercent, newInhabits, popFuture) {
    growthPercent /= 100
    let popNewYearState = popOrigin + popOrigin * growthPercent + newInhabits
    let yearsRequired = 1
    while (popNewYearState <= popFuture) {
        popNewYearState += popNewYearState * growthPercent + newInhabits
        yearsRequired++
    }
    return yearsRequired
}

console.log(nb_year(1000, 2, 50, 1200))
console.log(nb_year(1500, 5, 100, 5000))
console.log(nb_year(1500000, 2.5, 10000, 2000000))



