function solution(str){
  return str.split('').reduce((reverse, char) => char + reverse,'');
}
