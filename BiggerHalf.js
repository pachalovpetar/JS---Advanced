function solve(input) {
    let arr = [...input];
    let secondArr = [];
    arr.sort((a, b) => (a - b));
    let arrLength = arr.length / 2;

    if (arr.length % 2 !== 0) {
        for (let i = 0; i < arrLength ;i++) {
            secondArr.push(arr.pop());

        }
    } else {
        for (let i = 0; i < arrLength; i++) {
            secondArr.push(arr.pop());

        }
    }
    return secondArr.sort((a, b) => (a - b));
}
solve([3, 19, 14, 7, 2, 19, 6])