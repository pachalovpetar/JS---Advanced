function sorting(array) {

    array.sort((a,b) => a.length - b.length || a.localeCompare(b));
    array.forEach(element => {
        console.log(element);
    });

}
sorting(['test', 'Deny','omen', 'Default']);