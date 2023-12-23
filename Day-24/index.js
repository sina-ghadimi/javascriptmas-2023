/**
 * 🎄 Challenge:
 * 1. The Christmas tree's lights should switch
 *    on and off every 800 miliseconds.
 *
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/

function toggleLights() {
  document
    .querySelectorAll('.lights')
    .forEach((light) => light.classList.toggle('lights-on'));
}

document.addEventListener('DOMContentLoaded', function () {
  setInterval(toggleLights, 800);
});
