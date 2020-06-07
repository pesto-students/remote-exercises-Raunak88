const alphabeticShift = (input) => {
  const shiftedCodePointArray = input.split("").map((x) => {
    if (x === "Z" || x === "z") 
      return x.charCodeAt(0) - 25;
    else 
      return x.charCodeAt(0) + 1;
  });
  const shiftedStringArray = shiftedCodePointArray.map((x) => {
    return String.fromCodePoint(x);
  });
  const shiftedString = shiftedStringArray.join("");
  return shiftedString;
};

export { alphabeticShift };
