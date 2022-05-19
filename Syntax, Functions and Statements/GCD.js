function gcd(a, b) {

    let firstNum = a;
    let secondNum = b;

    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    
    }

    console.log(firstNum);

}

gcd(2154, 458);