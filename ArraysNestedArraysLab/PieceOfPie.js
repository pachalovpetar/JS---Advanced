function solve(allFlavours, firstF, secondF) {

    let arr = [...allFlavours];
    let firstEl = firstF;
    let secondEl = secondF;
    let index1 = 0;
    let index2 = 0;

    for (const element of arr) {
        if (element === firstEl) {
            index1 = arr.indexOf(element);
        }

        if (element === secondEl) {
            index2 = arr.indexOf(element);
        }
    }

    let newArr = [];

    newArr = arr.splice(index1, (index2 - index1) + 1);

    return newArr;

}

solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')