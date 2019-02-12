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

// The % operator isn't true modulo (it's remainder), so this will
// ensure that the result is a positive integer.
const mod = (left, right) => ((left % right) + right) % right;

const getRand = (array) => array[Math.floor(Math.random() * (array.length))];

const createGetNote = (baseIndex, scale) => () => {
  const index = mod(baseIndex + getRand(scale), notes.length)
  return notes[index];
}

const generate = (key = 0, scaleType = 'chromatic') => {
  const baseIndex = parseInt(key, 10);
  const scale = scales[scaleType];

  const len = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  const getNote = createGetNote(baseIndex, scale);
  return Array.from({
    length: len
  }, getNote);
}

document.getElementById('generate').addEventListener('click', () => {
  const motif = generate(
    document.getElementById('key').value,
    document.getElementById('scale').value
  ).join(', ');
  document.getElementById('motif').textContent = motif;
})
