function subtract() {


    const n1 = document.getElementById('firstNumber').value;
    const n2 = document.getElementById('secondNumber').value;
    let sum = 0;


        sum = Number(n1) - Number(n2);


    document.getElementById('result').textContent = sum;
}