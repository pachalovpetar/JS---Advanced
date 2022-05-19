function isSame (input) {
    let number = input.toString();

    let isTrue = true;
    let firstNum = Number(number[0]);
    let sum = 0;
    
    for(let i = 1; i < number.length; i++) {
        if (firstNum !== Number(number[i])) {
            isTrue = false;
        }
        sum += Number(number[i]);
    }

    sum += firstNum;

    console.log(isTrue);
    console.log(sum);

}

isSame(2222222);