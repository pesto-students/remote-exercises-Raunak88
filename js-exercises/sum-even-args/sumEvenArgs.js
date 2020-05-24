const sumEvenArgs = (...args) => {
  let evenArgs = args.filter(x=>x%2===0)
  let sum = evenArgs.reduce((a,b)=>a+b ,0)
  return(sum);
};

export { sumEvenArgs };

//sumEvenArgs(1, 2, 3, 4, 5);