function print(arr, delimiter) {

    let printedArr = [...arr];

    console.log(printedArr.join(delimiter));

}
print(['One',

'Two',

'Three',

'Four',

'Five'],

'-');