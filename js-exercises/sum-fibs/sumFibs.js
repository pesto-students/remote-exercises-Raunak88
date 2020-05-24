function sumFibs(args) {
  var firstEle = 0;
  var secondEle = 1;
  var fib = 1;
  var sum = firstEle;
  while ( fib <= args){
    if (fib % 2) {
        sum += secondEle;
    }
    fib = firstEle + secondEle;
    secondEle += firstEle;
    firstEle = secondEle - firstEle;
  }

  return sum;
}


export {
  sumFibs,
};

