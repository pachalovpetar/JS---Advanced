function operation(...args) {

    let action = [...args];
    let number = action.shift();

    function chop(number) {
        return number /= 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number += 1;
    }

    function bake(number) {
        return number *= 3;
    }

    function fillet(number) {
        return number * 0.80;
    }
    let newNumber = 0;
    for (let index = 0; index < action.length; index++) {
        
        switch(action[index]) {
            case 'chop':
                newNumber = chop(number);
                console.log(newNumber);
                number = newNumber;
            break;

            case 'dice':
                newNumber = dice(number);
                console.log(newNumber);
                number = newNumber;
            break;

            case 'spice':
                newNumber = spice(number);
                console.log(newNumber);
                number = newNumber;
            break;

            case 'bake':
                newNumber = bake(number);
                console.log(newNumber);
                number = newNumber;
            break;

            case 'fillet':
                newNumber = fillet(number);
                console.log(newNumber);
                number = newNumber;
            break;
        }

    }

}

operation('32', 'chop', 'chop', 'chop', 'chop', 'chop');
