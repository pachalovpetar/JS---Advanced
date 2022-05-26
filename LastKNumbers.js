function solve (n, k) {
    let arr = [1];
    
    while(arr.length !== n) {
        let nextNum = 0;
        let count = 0;
        for (let i = arr.length - 1; i >= 0; i--) {    
            nextNum += arr[i];
            count++;

            if (count === k) {
                break;
            }
        }
        arr.push(nextNum);
    }
    return arr;
}
console.log(solve(6, 2));
