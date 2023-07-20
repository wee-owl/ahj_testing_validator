import { input, button } from './const';
import checkInput from './checkInput';
import data from './data.json';

input.addEventListener('input', (e) => {
  input.value = e.target.value.replace(/\D/g, '');
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  checkInput(input.value, data);
});
