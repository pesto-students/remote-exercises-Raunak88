class RangeIterator {
  constructor(lb, ub) {
    this.lb = lb;
    this.ub = ub;
  }

  * [Symbol.iterator]() {
    let { lb } = this;
    if (this.ub > lb) {
      while (this.ub >= lb) {
        yield lb;
        lb++;
      }
    } else if (this.ub === lb) {
      yield this.ub;
    }
  }
}

function rangeIter(lb, ub) {
  if (arguments.length === 0 || !ub) {
    throw TypeError('undefined is not a number');
  }
  if (typeof ub !== 'number') {
    throw TypeError(ub, ' is not a number');
  }
  return new RangeIterator(lb, ub);
}

export { rangeIter };
