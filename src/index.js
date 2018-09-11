/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count=0;
  preferences.forEach(function(item, i, preferences){
    if (i+1===preferences[preferences[item-1]-1]) count++;
  });
  return Math.floor(count/3);
};
