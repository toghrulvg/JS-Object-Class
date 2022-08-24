function getWordLengths(str) {
    let lengthOfWords = [];
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++){
      lengthOfWords.push(words[i].length);
    }
    return lengthOfWords;
  }
  
  let text = "Selam sana demir ayak"
  
  console.log(getWordLengths(text));
