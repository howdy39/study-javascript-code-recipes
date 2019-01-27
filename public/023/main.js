// 長方形
const rectangle = document.querySelector('.rectangle');

document.querySelector('.button').addEventListener('click', onClickButton);

function onClickButton() {
  console.log('onClickButton');
  // 0 〜 360 の間のランダムな数を取得する
  const randomHue = Math.trunc(Math.random() * 360);
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

  console.log(randomHue, randomColorStart, randomColorEnd);

  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}
