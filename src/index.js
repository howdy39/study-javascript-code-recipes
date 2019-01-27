/* eslint-env browser */
import './assets/css/style.css';

const ul = document.createElement('ul');
addLink(ul, {num: '002', text: 'JavaScriptの書き方を知りたい'});

const app = document.getElementById('app');

if (app) {
  app.appendChild(ul);
}

function addLink(ul, {num, text}) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = num;
  link.textContent = `${num} ${text}`;
  li.appendChild(link);
  ul.appendChild(li);
}
