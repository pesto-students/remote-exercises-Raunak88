function duplicateLetters(...args) {
  var freqofLetters = [];
  var result;
  var obj = {}

  //creating helper object for find frequency of each character
  for (let i of args[0]) {
    obj[i] ? obj[i]++ : obj[i] = 1;
  }

  //find the char with maximum frequency
  for (let key in obj) {
    freqofLetters.push(obj[key]);
  }
   result = Math.max(...freqofLetters);
   
  //if occurence is 1 return false else the max frequency 
  if (result === 1) {
    return false
  } else {
   return result;
  }

}

export {
  duplicateLetters,
};
