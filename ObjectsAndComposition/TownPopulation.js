function info(array) {

    let towns = {};

    for (const info of array) {
        let [town, population] = info.split(' <-> '); 

        if (!towns[town]) {
            towns[town] = 0;
        }

        towns[town] += Number(population);
    }
        for (const town in towns) {
            console.log(`${town} : ${towns[town]}`);
        }
}

info(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);