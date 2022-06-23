function sumTable() {

    const arr = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;

    for (const el of arr) {
        const value = Number(el.lastElementChild.textContent);
        sum += value
    }

    document.getElementById('sum').textContent = sum;
}