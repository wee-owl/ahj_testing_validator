import { tooltip } from './const';
import checkCard from './checkCard';
import checkLuhn from './checkLuhn';
import checkTitle from './checkTitle';

export default function checkInput(value, data) {
  if ((checkLuhn(value.replace(/\D/g, '')) && checkTitle(value, data)) || value === '') {
    checkCard(checkTitle(value, data));
    tooltip.style.display = '';
  } else {
    tooltip.style.display = 'block';
  }
}
