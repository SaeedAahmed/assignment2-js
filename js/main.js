
var quotes =
  [
    ' "Resentment is like drinking poison and waiting for your enemies to die." ',
    ' "Beware of what you become in pursuit of what you want." ',
    ' "It\'s not what happens to you, but how you react to it that matters." ',
    ' "The best revenge is massive success." ',
    ' "You miss 100% of the shots you don\'t take." ',
    ' "Do not take life too seriously. You will not get out alive." ',
  ];
var authors =
  [
    '--Nelson Mandela',
    ' --Jim Rohn',
    ' --Epictetus',
    ' --Frank Sinatra',
    '--Wayne Gretzy',
    '--Elbert Hubbard'
  ];


var quote = 0;
var author = 0;

function changeText() {

  var text1 = document.getElementById('changeText1');
  var text2 = document.getElementById('changeText2');
  text1.textContent = quotes[quote];
  text2.textContent = authors[author];
  quote = (quote + 1) % quotes.length;
  author = (author + 1) % authors.length;

}
