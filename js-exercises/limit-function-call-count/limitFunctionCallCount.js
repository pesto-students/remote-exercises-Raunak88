const limitFunctionCallCount = (fn, count) => {
  let invocationCount = count;
  return function() {
    if (!!invocationCount) {
      invocationCount--;
      return fn.apply(null,arguments);
    } else {
      return null;
    }
  }
};

const add = (x, y, z) => {
  return x + y + z;
};

const limit = limitFunctionCallCount(add, 2);
debugger;
console.log(limit(1, 2, 3));
console.log(limit(1, 2, 3));
console.log(limit(1, 2, 3));

// export {
//   limitFunctionCallCount
// }