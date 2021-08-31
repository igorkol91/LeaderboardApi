import './main.css';
import submit from './modules/post.js';
import refresh from './modules/get.js';

const submitButton = document.querySelector('#postBtn');
const refreshBtn = document.querySelector('#refreshBtn');
const username = document.querySelector('#username');
const userscore = document.querySelector('#userscore');

submitButton.addEventListener('click', () => {
  submit();
  username.value = '';
  userscore.value = '';
  refresh();
});

refresh();

refreshBtn.addEventListener('click', () => {
  refresh();
});