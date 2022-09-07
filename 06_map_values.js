// 06_map_values.js

const data = [39, 10, 26, 7, 13, 19, 25, 8, 14, 29, 31, 3];
const smaller_ten = data.map(function(value) {
  return value < 10; 
})

document.write(smaller_ten);
