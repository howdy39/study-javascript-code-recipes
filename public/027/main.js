let textarea = document.querySelector('.textarea');
textarea.addEventListener('keyup', onKeyUp);

let stringNum = document.querySelector('.string_num');
let stringNumSpread = document.querySelector('.string_num_spread');
let stringNumArrayFrom = document.querySelector('.string_num_array_from');

onKeyUp();

function onKeyUp() {
  const inputText = textarea.value;
  stringNum.innerText = inputText.length;
  stringNumSpread.innerText = [...inputText].length;
  stringNumArrayFrom.innerText = Array.from(inputText).length;
}
