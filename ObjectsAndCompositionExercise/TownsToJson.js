function solve(input) {

    let towns = [];

    for (let i = 1; i < input.length; i++) {
        let array = input[i].split(/\s*\|\s*/g);
        let town = array[1];
        let latitude = Number(array[2]).toFixed(2);
        let longtitude = Number(array[3]).toFixed(2);


        let currentTown = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longtitude),
        };
        
        towns.push(currentTown)
    }


    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']);