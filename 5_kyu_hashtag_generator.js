function generateHashtag (str) {
  
  const words = str.split(" ");
  
  if (words[0].length >= 1) {  
    for (let i = 0; i < words.length; i++) {
      if (words[i] != "") {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      } else if (words[i] === undefined) {
        continue;
      }
    }
  }
  
  const newWords = "#" + words.join("");

  if (newWords.length > 140 || newWords === "#" ) {
    return false;
  } else {
    return newWords;
  }
  
}
