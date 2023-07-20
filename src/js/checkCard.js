import { cards } from './const';

export default function checkCard(title) {
  if (title) {
    cards.forEach((item) => {
      const newItem = item;
      newItem.parentElement.style.backgroundPositionY = 'top';
    });
    const validCard = [...cards].filter((item) => item.title !== title);
    validCard.forEach((item) => {
      const newItem = item;
      newItem.parentElement.style.backgroundPositionY = 'bottom';
    });
  } else {
    cards.forEach((item) => {
      const newItem = item;
      newItem.parentElement.style.backgroundPositionY = 'top';
    });
  }
}
