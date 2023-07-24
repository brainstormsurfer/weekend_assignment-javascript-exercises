const Balloon = {
    color: "",
    owner: "",
    goodbyeCause: ""
}

let fiveBalloons = [
    { color: "Blue", owner: "Rutty" },
    { color: "Yellow", owner: "Ron" },
    { color: "Purple", owner: "Sigalit" },
    { color: "Green", owner: "Uri" },
    { color: "Red", owner: "Alon" }
]

console.log("Once upon a time, there were FIVE BALOONS: ", fiveBalloons)
let reasons = []
fiveBalloons.forEach((el) => {
    if (el.owner === "Rutty") {
        el.goodbyeCause = "Overpowered hugging"
    } else if (el.owner === "Ron") {
        el.goodbyeCause = "Inflated with too much air"
    } else if (el.owner === "Sigalit") {
        el.goodbyeCause = "Sharp fingernails"
    } else if (el.owner === "Uri") {
        el.goodbyeCause = "Prickly roses bush"
    } else if (el.owner === "Alon") {
        el.goodbyeCause = "Drifted away"
    }
    reasons.push(el.goodbyeCause)
})
console.log("\n--- (using forEach) ---\n")

console.log("Each Balloon had a different reason of which it caused some sorrow to a child: ", reasons)
let usualSuspects = fiveBalloons.map((el) => {
    if (el.goodbyeCause.includes("hugging")) {
        return el.guilty = "Rutty's exaggerated concern"
    } else if (el.goodbyeCause.includes("too much air")) {
        return el.guilty = "Ron's demand from his Dad"
    } else if (el.goodbyeCause.includes("fingernails")) {
        return el.guilty = "Mitzi the cat"
    } else if (el.goodbyeCause.includes("roses")) {
        return el.guilty = "Uri's irresponsible play"
    } else if (el.goodbyeCause.includes("away")) {
        return el.guilty = "The wind"
    }
    console.log("el.guilty", el.guilty)
    reasons.push(el.guilty)
})
console.log("\n--- (using map) ---\n")
console.log("...And a different suspect: ", usualSuspects)

const canOnlyBlameThemselves = fiveBalloons.filter((el) => {
    return el.guilty.includes(el.owner)
})
console.log("\n--- (using filter) ---\n")
console.log("Those who can only blame themselves for their balloon's bitter end, are: ", canOnlyBlameThemselves)
console.log("\n----- T H E --- E N D -----\n")



