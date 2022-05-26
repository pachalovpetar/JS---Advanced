function solve(commands) {

    let arr = [];
    let num = 1;
    for (const command of commands) {
        switch (command) {
            case 'add':
                arr.push(num);
                num++;
            break;

            case 'remove':
                arr.pop();
                num++;
            break;
        }
    }
    if (arr.length === 0) {
        console.log('Empty');
    } else {
        arr.forEach(el => console.log(el));
    }
}

solve(['add', 'add', 'remove', 'add', 'add'])