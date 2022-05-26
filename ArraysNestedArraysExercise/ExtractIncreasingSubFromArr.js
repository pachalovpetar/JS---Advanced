function extract(arr) {

    let printedArr = [];
    let currentBig = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (currentBig <= arr[i]) {
            currentBig = arr[i];
            printedArr.push(currentBig);
        }
    }
    return printedArr;
}