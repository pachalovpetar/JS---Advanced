function collect(input) {

    let arr = [...input];
    let newArr = [];
    for (let i = 0; i < 2; i++) {
    
        let smallest = arr.reduce((a, b) => Math.min(a, b));
        newArr.push(smallest);
        let index1 = arr.indexOf(smallest);
        arr.splice(index1);
       
    }
    console.log(newArr.join(' '));
}
collect([30, 15, 50, 5]);