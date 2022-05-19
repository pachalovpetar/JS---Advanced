function determination(speed, area) {

    let overLimit = 0;
    let allowedSpeed = 0;
    let status = '';

    switch (area) {
        case 'city':
            allowedSpeed = 50;
            if (speed > allowedSpeed) {
                overLimit = speed - allowedSpeed;
            }
        break;

        case 'motorway':
            allowedSpeed = 130;
            if (speed > allowedSpeed) {
                overLimit = speed - allowedSpeed;
            }
        break;

        case 'interstate':
            allowedSpeed = 90;
            if (speed > allowedSpeed) {
                overLimit = speed - allowedSpeed;
            }
        break;

        case 'residential':
            allowedSpeed = 20;
            if (speed > allowedSpeed) {
                overLimit = speed - allowedSpeed;
            }
        break;

    }
    if (overLimit <= 20) {
        status = 'speeding';
    } else if (overLimit > 20 && overLimit <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    if (overLimit !== 0) {
        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
    }
}

determination(40, 'city');
determination(120, 'interstate');
determination(21, 'residential');
determination(200, 'motorway');

