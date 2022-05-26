function solve(input) {

    let arr = [...input];
    let result = [];
    for (const iterator of arr) {
        if (iterator < 0) {
            result.unshift(iterator)
        } else {
            result.push(iterator)
        }
    }

    console.log(result.join("\n"));
}
solve([7, -2, 8, 9])