const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const MIN = 4;
const MAX = 10;

const scales = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10, 11],
  blues: [0, 2, 3, 5, 6, 7, 10],
  halfWhole: [0, 1, 3, 4, 6, 7, 9, 10],
  wholeHalf: [0, 2, 3, 5, 6, 8, 9, 11],
  wholeTone: [0, 2, 4, 6, 8, 10],
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
}

const getRand = (array) => array[Math.floor(Math.random() * (array.length))];

const createGetNote = (baseIndex, scale) => {
  return () => notes[(baseIndex + getRand(scale)) % notes.length];
}

const generate = (key = '', scaleType = '') => {
  const baseIndex = notes.indexOf(key.toUpperCase()) || 0;
  const scale = scales[scaleType] || scales.chromatic;

  const len = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  const getNote = createGetNote(baseIndex, scale);
  return Array.from({
    length: len
  }, getNote);
}

document.getElementById('generate').addEventListener('click', () => {
  const motif = generate().join(', ');
  document.getElementById('motif').textContent = motif;
})
