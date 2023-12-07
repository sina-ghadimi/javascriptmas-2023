const myList = [
  'Macbook Air M2',
  'HP Victus 16 Gaming',
  'Apple Iphone 15',
  'Samsung Galaxy S24',
];

const listEl = document.querySelector('.list');
const inputEl = document.querySelector('.input');
const buttonEl = document.querySelector('.button');

function generateList() {
  listEl.innerHTML = '';
  myList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<p>${item}</p>`;
    listItem.addEventListener('click', function () {
      list.splice(index, 1);
      generateList();
    });
    listEl.appendChild(listItem);
  });
}

buttonEl.addEventListener('click', function () {
  const item = inputEl.value;
  inputEl.value = '';
  if (item !== '') {
    myList.push(item);
    generateList();
  } else {
    console.log('empty input');
    inputEl.style.borderColor = 'red';
  }
});

generateList();
