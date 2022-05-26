function rotate(arr, num) {
    let lastEl = '';
    for (let i = 0; i < num; i++) {
        
        lastEl = arr.pop();
        arr.unshift(lastEl);
        
    }
    console.log(arr.join(' '));
}
rotate(['1',

'2',

'3',

'4'],

2);