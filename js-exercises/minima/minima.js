function minima(limit, array) {
  return array
    .sort((a, b) => {
      return a - b;
    })
    .splice(0, limit);
}
export { minima };
