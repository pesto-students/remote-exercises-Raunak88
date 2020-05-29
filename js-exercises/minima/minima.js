function minima(limit, unSortedArray) {
  return unSortedArray
    .sort((a, b) => {
      return a - b;
    })
    .splice(0, limit);
}
export { minima };
