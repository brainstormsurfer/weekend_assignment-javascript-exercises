function centuryOfYear(yearString) {
    console.log(yearString % 100 === 0 ? Math.floor(yearString / 100) : Math.floor(yearString / 100) + 1)
}

centuryOfYear(1705)
centuryOfYear(1900)
centuryOfYear(1601)
centuryOfYear(2000)
centuryOfYear(1)
centuryOfYear(2023) 