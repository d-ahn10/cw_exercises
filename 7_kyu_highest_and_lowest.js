function highAndLow(numbers){
  const arrOfStrings = numbers.split(" ");
  const arrOfNums = arrOfStrings.map(Number);
  
  let lowNum = Math.min(...arrOfNums);
  let highNum = Math.max(...arrOfNums);
  return highNum + " " + lowNum;
}
