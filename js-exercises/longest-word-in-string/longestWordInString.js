function longestWordInString(sentence) {
  if(sentence){
    let words =  sentence.split(" ")
    let wordLengthArray =  words.map(x=>x.length)
    let longestWordLength = (Math.max(...wordLengthArray));
    let longestWord = words.filter(x=>x.length===longestWordLength) ;
    return (longestWord[0]);
  }else{
    return ""
  }
 
}

export { longestWordInString };

