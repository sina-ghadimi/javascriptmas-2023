const player = document.getElementById('player');

function playSong(id) {
  const src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  player.src = src;
}
