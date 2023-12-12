const xmasGifts = [
  "guitar 🎸",
  "skates ⛸️",
  "bear 🧸",
  "magnet 🧲",
  "laptop 💻",
  "games console 🎮 ",
  "jewellery 💍",
  "kite 🪁",
];

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.
 **/

const sortedArray = xmasGifts.sort((a, b) => a.localeCompare(b));
console.log("A-Z: ", sortedArray);
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

const reversedArray = xmasGifts.sort((a, b) => b.localeCompare(a));
console.log("Z-A: ", reversedArray);
// //["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]
