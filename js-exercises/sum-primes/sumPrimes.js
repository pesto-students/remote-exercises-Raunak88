function sumPrimes(num) {
  var sum = 0;

  function checkPrime(i) {
    for (var k = 2; k < i; k++) {
      if (i % k === 0) {
        return false;
      }
    }
    return true;
  }

  for (var i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }
  return sum;

}


export {
  sumPrimes,
};
