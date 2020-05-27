const animalSort = (animals) => {
  animals.sort(function (a, b) {
    if (a.numberOfLegs === b.numberOfLegs) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    } else {
      return a.numberOfLegs - b.numberOfLegs;
    }
  });

  return animals;
};

export { animalSort };
