function colorize() {
    
    const arr = Array.from(document.querySelectorAll('tr'));

    for (let i = 1; i < arr.length; i+=2){
        arr[i].style.background = 'teal';
       
    }
}