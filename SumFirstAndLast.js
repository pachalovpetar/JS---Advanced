function calculate(input) {
    let arr = Array.from(input);
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());
    let sum = firstEl + lastEl;

    console.log(sum);

}
calculate(['20', '30', '40'])