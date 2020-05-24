
function removeFalsyValues(array) {
  return array.filter(x => x ? x : null)
}

export {
  removeFalsyValues,
};
