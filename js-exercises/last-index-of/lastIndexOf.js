function lastIndexOf(item, list) {
  if (list.length > 0) {
    var indexArray = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i] === item) {
        indexArray.push(i);
      }
    }
    if (indexArray.length === 0) {
      return -1;
    } else {
      return Math.max(...indexArray);
    }
  } else {
    return -1;
  }
}

export { lastIndexOf };

// const input = [1, 2, 3, 4, 5, 1];
// lastIndexOf(1, input)
