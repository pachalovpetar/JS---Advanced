function solve(input) {

    let result = input.sort((a,b) => a.localeCompare(b));
    let output = [];
    let obj = {};
    let firstChar = '';

    for (let i = 0; i < result.length; i++) {

        output = result[i].split(' : ');
        if (result[i][0] !== firstChar) {
            firstChar = result[i][0];
            console.log(firstChar);
        }


        console.log(`  ${output[0]}: ${output[1]}`);

    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);