function arrayDiff(a, b) {

  const answer = [];
    
  for (const [index, val] of a.entries()) {
    if (!b.includes(val)) {
      answer.push(val);
    }
  }

  return answer;
}
