const transpose = function(matrix) {
    const newArray = [];
    for (var i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    };
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArray[j].push(matrix[i][j]);
      };
    };
    return newArray
  };

const wordSearch = (letters, word) => {
  if(letters.length === 0) return "Matrix has no words";
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalJoin = transpose(letters).map(ls => ls.join(''))
  for (l of horizontalJoin) {
    for (d of verticalJoin) {
      if (l.includes(word) || d.includes(word)) return true;
    }
  }
  return false
}
module.exports = wordSearch








