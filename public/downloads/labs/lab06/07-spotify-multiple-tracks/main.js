const containerEl = document.querySelector('#container');
const searchInput = document.querySelector('#search-input');

async function showTracks() {
  const searchTerm = searchInput.value;
  const url = `https://www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track&limit=10`;
  const response = await fetch(url);
  const tracks = await response.json();
  console.log(tracks);
}
