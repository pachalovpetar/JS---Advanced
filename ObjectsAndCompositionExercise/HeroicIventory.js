function heroic(input) {

    let result = [];

for (const ele of input) {
    
    let [name, level, items] = ele.split(' / ');
    level = Number(level);

    
    items = items ? items.split(', ') : [];
    result.push({name, level, items});

}

console.log(JSON.stringify(result));

}

heroic(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);