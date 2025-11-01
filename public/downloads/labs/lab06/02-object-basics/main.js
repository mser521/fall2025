'use strict';

// Practice basic for/while loops and conditionals.

const track = {
  id: '3YfS47QufnLDFA71FUsgCM',
  name: 'The Sound of Silence',
  album: {
    id: '0D1OzpaQEeiIMCAm3DUwKa',
    name: 'The Singer',
    image_url: 'https://i.scdn.co/image/ab67616d0000b273dd9e17a2000252d6b79cf904',
  },
  artist: {
    id: '70cRZdQywnSFp9pnc2WTCE',
    name: 'Simon & Garfunkel',
  },
};

// 1. Print the first number in the list to the console.
console.log('1. Print the id of the track to the console.');
console.log(track.id);

// 2. Print the second number in the list to the console.
console.log('2. Print the name of the track to the console.');
console.log(track.name);

// 3. Print the album name of the track to the console.
console.log('3. Print the album name of the track to the console.');
console.log(track.album.name);

// 4. Print the artist name of the track to the console.
console.log('4. Print the artist name of the track to the console.');
console.log(track.artist.name);

// 5. Print the album cover URL to the console.
console.log('5. Print the artist name of the track to the console.');
console.log(track.artist.name);

// 6. Output an HTML representation of the track to the DOM element with an id of "container".
const container = document.querySelector('#container');
container.innerHTML = `<div class="track-card">
  <h2>${track.name}</h2>
  <p>Artist: <strong>${track.artist.name}</strong></p>
  <p>Album: <strong>${track.album.name}</strong></p>
  <img src="${track.album.image_url}" alt="${track.album.name}" />
</div>`;
