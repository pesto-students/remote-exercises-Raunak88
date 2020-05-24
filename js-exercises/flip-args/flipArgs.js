function flipArgs(fn) {
  return function(){
      fn(...Array.from(arguments).reverse())
  }
}

export {
    flipArgs
}

