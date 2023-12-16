const niceList = document.getElementById('nice-list');
const naughtyList = document.getElementById('naughty-list');
const btn = document.getElementById('btn');

const sorteesArr = [
  {
    name: 'David',
    hasBeenGood: false,
  },
  {
    name: 'Del',
    hasBeenGood: true,
  },
  {
    name: 'Valerie',
    hasBeenGood: false,
  },
  {
    name: 'Astrid',
    hasBeenGood: true,
  },
];

btn.addEventListener('click', function () {
  const naughtyListItems = [
    ...sorteesArr.filter((item) => item.hasBeenGood === false),
  ];
  const niceListItems = [
    ...sorteesArr.filter((item) => item.hasBeenGood === true),
  ];

  const naughtyDOM = naughtyListItems.map(
    (person) => (naughtyList.innerHTML += `<p>${person.name}</p>`),
  );
  const niceDOM = niceListItems.map(
    (person) => (niceList.innerHTML += `<p>${person.name}</p>`),
  );
});
