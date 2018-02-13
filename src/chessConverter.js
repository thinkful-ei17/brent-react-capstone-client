const { Chess } = require('./chess.js');

const chess = new Chess();


const fen = chess.fen().split('/').reverse();

const pieces = [];
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];

for (let i = 0; i < fen.length; i++) {
  for (let j = 0; j < fen[i].length; j++) {
    if (alphabet[j] === undefined) {
      console.log('cool');
    } else if (fen[i][j] === '8') {
      console.log('cooler');
    } else {
      pieces.push(`${fen[i][j]}@${alphabet[j]}${i + 1}`);
    }
  }
}
console.log(pieces);

// toAlgebraicNotation(matrix) ...(chess board)

// const pieces = [];

// pieces.push(toAlgebraicPiece({ piece, color }) + "@" + toAlgebraicPosition(i, j))
// toAlgebraicPiece(arr[i][j])
// console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++this is new arr', newArr);
// this is array[
//  [
// { type: 'r', color: 'b' },
// { type: 'n', color: 'b' },
// { type: 'b', color: 'b' },
// { type: 'q', color: 'b' },
// { type: 'k', color: 'b' },
// { type: 'b', color: 'b' },
// { type: 'n', color: 'b' },
// { type: 'r', color: 'b' }
// ],
//   [
// { type: 'p', color: 'b' },
//   { type: 'p', color: 'b' },
//   { type: 'p', color: 'b' },
//   { type: 'p', color: 'b' },
//   { type: 'p', color: 'b' },
//   { type: 'p', color: 'b' },
//   { type: 'p', color: 'b' },
//   { type: 'p', color: 'b' }],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [{ type: 'p', color: 'w' },
//   { type: 'p', color: 'w' },
//   { type: 'p', color: 'w' },
//   { type: 'p', color: 'w' },
//   { type: 'p', color: 'w' },
//   { type: 'p', color: 'w' },
//   { type: 'p', color: 'w' },
//   { type: 'p', color: 'w' }],
//   [{ type: 'r', color: 'w' },
//   { type: 'n', color: 'w' },
//   { type: 'b', color: 'w' },
//   { type: 'q', color: 'w' },
//   { type: 'k', color: 'w' },
//   { type: 'b', color: 'w' },
//   { type: 'n', color: 'w' },
//   { type: 'r', color: 'w' }]]
// //////////////////////////////////////////////////////////////////////////

