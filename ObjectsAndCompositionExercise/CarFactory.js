function solve({model, power, color, carriage, wheelsize}) {
    
    let engines = {
        smallEnginge: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    };

    let engine;
    if (power <= 90) {
        engine = engines.smallEnginge;
    } else if (power <= 120) {
        engine = engines.normalEngine;
    } else {
        engine = engines.monsterEngine;
    }
    

    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }
    let wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    
    let car = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels,
    }

    return car;
}

solve({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 });