function peopleInBusAfterLastStop(busStops) {
    let peopleInBus = 0;
    let peopleGetIn = 0;
    let peopleGetOff = 0;

    for (let i = 0; i < busStops.length; i++) {
        console.log("bus stop: " + i)
        peopleGetIn = busStops[i][0];
        console.log("peopleGetIn: " + peopleGetIn)
        peopleGetOff = peopleInBus - busStops[i][1] < 0 ? peopleInBus + peopleGetIn : busStops[i][1];
        console.log("peopleGetOff: " + peopleGetOff)
        peopleInBus += peopleGetIn - peopleGetOff;
        peopleInBus < 0 ? peopleInBus = 0 : peopleInBus;
        console.log("peopleInBus: " + peopleInBus)
    }
    console.log("number of people after last bus stop: ")
    return peopleInBus;
}

console.log(peopleInBusAfterLastStop([[10, 0], [3, 5], [5, 8], [1, 10]]));








