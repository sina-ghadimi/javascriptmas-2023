const elf = document.getElementById('elf');
const btn = document.getElementById('btn');
const container = document.querySelector('.elf-hangout-zone');
const header = document.querySelector('h1');

btn.addEventListener('click', function () {
  const newEl = document.createElement('div');
  newEl.className = 'elf';
  newEl.textContent = '🧝';
  container.appendChild(newEl);
  header.textContent = 'Elves Gathering!';
});
