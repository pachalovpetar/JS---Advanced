function search() {
   let townsArr = document.querySelectorAll('ul#towns li');
   let result = document.getElementById('result');
   let input = document.getElementById('searchText').value;
   let matches = 0;

   for ( let town of townsArr) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = '';
   }


   for (let town of townsArr) {
      let text = town.textContent;

      if (text.match(input)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }
   result.textContent = `${matches} matches found`
}
