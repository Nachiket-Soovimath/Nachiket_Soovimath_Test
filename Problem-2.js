function generateOddSeries(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }
  return result;
}
const input = 4; 
console.log("Output:", generateOddSeries(input));
