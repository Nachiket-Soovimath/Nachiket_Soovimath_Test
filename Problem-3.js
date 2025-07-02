function generateConditionalOddSeries(n) {
  const result = [];
  let limit = n % 2 === 0 ? n - 1 : n;
  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }
  return result;
}
const input = 6; 
console.log("Output:", generateConditionalOddSeries(input));
