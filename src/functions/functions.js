const percenProt = (addProteins, addKcal) => {
  if (addProteins() == 0) {
    return 0;
  } else {
    return Math.round((100 * addProteins() * 4) / addKcal());
  }
};
const percenLip = (addLipids, addKcal) => {
  if (addLipids() == 0) {
    return 0;
  } else {
    return Math.round((100 * addLipids() * 9) / addKcal());
  }
};
const percenCarb = (addHc, addKcal) => {
  if (addHc() == 0) {
    return 0;
  } else {
    return Math.round((100 * addHc() * 4) / addKcal());
  }
};



export { percenProt, percenLip, percenCarb };
