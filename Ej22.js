const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (const food of foodSchedule) {
    if (!food.isVegan) {
        food.name = fruits[0];
        food.isVegan = true;

        fruits.shift();
    }
}

console.log(foodSchedule);