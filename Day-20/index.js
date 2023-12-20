const dangerArray = [
  ['🎅', '👺'],
  [
    ['🎅', '🦁'],
    ['👹', '🎅'],
  ],
  [
    [
      ['🎅', '🐻'],
      ['🧌', '🎅'],
    ],
    [
      ['🐯', '🎅'],
      ['🎅', '😈'],
    ],
  ],
];

function saveSanta(arr) {
  return arr.flat(Infinity).filter((item) => item === '🎅');
}

console.log(saveSanta(dangerArray));
// Check the returned results from saveSanta()
// console.log(saveSanta(dangerArray))
