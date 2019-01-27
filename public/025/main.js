const character = document.querySelector('.character');

// 角度
let degree = 0;
loop();

function loop() {
  // 回転させたい角度をラジアンで求める
  const rotation = (degree * Math.PI) / 180;

  // 回転角から位置を求める
  const targetX = (window.innerWidth / 2) + (64 * Math.cos(rotation)) - 32;
  const targetY = (window.innerHeight / 2) + (54 * Math.sin(rotation)) - 27;

  // Characterのいちとして反映す
  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;
  // 角度を1増やす
  degree++;
  // 次の画面更新タイミングでloopを実行する
  requestAnimationFrame(loop);
}
