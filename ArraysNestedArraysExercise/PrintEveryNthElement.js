function print(arr, num) {

    let printedArr = [];
    let n = Number(num);

    for (let i = 0; i < arr.length; i+= n) {
        
        printedArr.push(arr[i]);

    }

    return printedArr;
}