let text = document.querySelector('.text');
text.addEventListener('keyup', onKeyUp);

let hashes = document.querySelector('.hashes');

onKeyUp();

function onKeyUp() {
  const inputText = text.value;
  const hashValues = [];

  const parameters = inputText.split(/&|\?/).filter(value => value.includes('='));
  parameters.forEach(parameter => {
    const parameterList = parameter.split('=');
    const key = parameterList[0];
    const value = decodeURIComponent(parameterList[1]);
    hashValues.push({key, value});
  });

  hashes.innerText = JSON.stringify(hashValues);
}
