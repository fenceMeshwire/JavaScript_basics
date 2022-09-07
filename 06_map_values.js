// 06_map_values.js

const data = Array.from({length: 20}, () => Math.floor(Math.random() * 30));
const smaller_ten = data.map(function(value) {
  return value < 10; 
})

document.write(smaller_ten);
