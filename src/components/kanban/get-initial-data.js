const initial = {
  columns: {
    Breakfast: {
      name: "Breakfast",
      items: [],
    },
    Lunch: {
      name: "Lunch",
      items: [],
    },
    Dinner: {
      name: "Dinner",
      items: [],
    },
  },
  columnOrder: ["Breakfast", "Lunch", "Dinner"],
};

export default function getInitialData() {
  return initial;
}
