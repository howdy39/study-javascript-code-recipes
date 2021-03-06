/* eslint-env browser */
import './assets/css/style.css';

const app = document.getElementById('app');
const ul = getUl();

if (app) {
  app.appendChild(ul);
}

function getUl() {
  const ul = document.createElement('ul');
  addLink(ul, {num: '002', text: 'JavaScriptの書き方を知りたい'});
  addLink(ul, {num: '003', text: 'JavaScriptを別ファイルに書きたい'});
  addLink(ul, {num: '023', text: 'ランダムな数を使いたい'});
  addLink(ul, {num: '025', text: '三角関数を使いたい'});
  addLink(ul, {num: '027', text: '文字列の長さを取得したい'});
  addLink(ul, {num: '035', text: '文字列を分割したい'});
  addLink(ul, {num: '093', text: 'アナログ時計を表示したい'});
  return ul;
}

function addLink(ul, {num, text}) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = num;
  link.textContent = `${num} ${text}`;
  li.appendChild(link);
  ul.appendChild(li);
}
