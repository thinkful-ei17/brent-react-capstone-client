const fenToAlgebraic = (fen) => {
  const pieces = [];
  const fenArr = fen.split('/').reverse();
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

  for (let i = 0; i < fenArr.length; i++) {
    for (let j = 0; j < fenArr[i].length; j++) {
      if (alphabet[j] === undefined) {
        continue;
      } else if (fenArr[i][j] === '8') {
        continue;
      } else {
        pieces.push(`${fenArr[i][j]}@${alphabet[j]}${i + 1}`);
      }
    }
  }
  return pieces;
};
export default fenToAlgebraic;
