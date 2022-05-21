function solve(input) {
    return input.match(/\w+/g).join(", ").toLocaleUpperCase()

    console.log(input);
}

solve('Hi, how are you?');

