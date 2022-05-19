function buyFruit(string, weight, price) {
    let fruit = string;
    let weightInKilo = weight / 1000;
    let pricePerKilo = price;

    let money = weightInKilo * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}

buyFruit('orange', 2500, 1.80);
