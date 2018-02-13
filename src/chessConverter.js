const fenToAlg = (fen) => {
  const pieces = [];
  fen = fen.split('/').reverse();
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
        continue;
      } else if (fen[i][j] === '8') {
        continue;
      } else {
        pieces.push(`${fen[i][j]}@${alphabet[j]}${i + 1}`);
      }
    }
  }
  return pieces;
};
export default fenToAlg;
