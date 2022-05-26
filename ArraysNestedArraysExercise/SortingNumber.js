function solve(array) {
    let ascending = array.slice(array.sort((a,b) => a - b));
    let descending = array.slice(array.sort((a,b) => b - a));
    
    let printedArr = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            printedArr.push(descending.shift());
        } else {
            printedArr.push(ascending.shift());
        }
        
    }
    return printedArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);