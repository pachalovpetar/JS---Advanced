function solve() {

  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let words = text.split(' ');
  let result = '';
  if (convention != 'Pascal Case' && convention != 'Camel Case') {
    return document.getElementById('result').textContent = 'Error!';
  }
  for (let i = 0; i < words.length; i++) {
    
      words[i] = words[i].toLowerCase();
      if (i != 0 || convention == 'Pascal Case') {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      }
  }

  result = words.join('');
  document.getElementById('result').textContent = result;
}