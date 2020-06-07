const countingAnagrams = (str) => {
  const arrayFromString = str.split(" ");
  const sortedArayFromString = arrayFromString.map((x) => {
    return x.split("").sort().join("");
  });
  const anagrams = sortedArayFromString
    .filter((v, i, x) => x.indexOf(v) !== i && v.length > 1)
    .filter((v, i, x) => x.indexOf(v) === i);
  return (anagrams.length);
};


export { countingAnagrams };
