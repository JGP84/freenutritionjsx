let uniqueId = 0;
function getItems(count) {
  return Array.from({ length: count }, (v, k) => {
    const idUnique = uniqueId++;
    return {
      idUnique: `id:${idUnique}`,
      text: `item ${idUnique}`,
    };
  });
}

/* [uuid()]: {
      name: "Breakfast",
      items: [],
    },
    [uuid()]: {
      name: "Lunch",
      items: [],
    },

    [uuid()]: {
      name: "Dinner",
      items: [],
    }, */
const initial = {
  columns: {
    Breakfast: {
      name: "Breakfast",
      items: [],
    },
    Lunch: {
      name: "Lunch",
      items:[],
    },
    Dinner: {
      name: "Dinner",
      items:[],
    },
  },
  columnOrder: ["Breakfast", "Lunch", "Dinner"],
};

export default function getInitialData() {
  return initial;
}



 