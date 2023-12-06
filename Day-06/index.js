const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
  const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());
  const remainingValues = [...shuffledArray];
  const secretSantas = {};

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const acceptedValues = remainingValues.filter(santa => santa !== key);
    const index = Math.floor(Math.random() * acceptedValues.length);
    const selectedValue = acceptedValues[index];

    secretSantas[key] = selectedValue;
    remainingValues.splice(remainingValues.indexOf(selectedValue), 1);
  }
  return secretSantas;
}

console.log(generateSecretSantaPairs(people));
