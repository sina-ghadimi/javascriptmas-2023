const food = document.getElementById('food');
const isVegan = document.getElementById('vegetarian-input');
const button = document.getElementById('btn');
const guestCount = document.getElementById('num-input');

button.addEventListener('click', function () {
  if (isVegan.checked === true && guestCount.value <= 4) {
    food.textContent = 'Gingery Spring Soup';
  } else if (isVegan.checked === true && guestCount.value > 4) {
    food.textContent = 'Winter Squash Risotto';
  } else if (isVegan.checked === false && guestCount.value <= 4) {
    food.textContent = 'Ham';
  } else if (isVegan.checked === false && guestCount.value > 4) {
    food.textContent = 'Turkey';
  } else {
    alert('Enter a valid Number of Guests');
  }
});
