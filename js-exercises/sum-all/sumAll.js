function sumAll(args) {
  if(args[0]>args[1]){
    let min =args[1];
    let max =args[0];
    const arrayOfParams = [...Array(max - min + 1).keys()].map(i => i + min); //create array
    const result = arrayOfParams.reduce((a, b)=>{ return a + b;}, 0);// find sum
    return(result);
    
  }else{
    let min =args[0];
    let max =args[1];
    const arrayOfParams = [...Array(max - min + 1).keys()].map(i => i + min); //create array
    const result = arrayOfParams.reduce((a, b)=>{ return a + b;}, 0);// find sum
    return(result);
  }
}

export {
  sumAll,
};
