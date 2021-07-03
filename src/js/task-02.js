const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const addIngredients = document.querySelector("#ingredients");

const newItem = (elem) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = elem;
  return itemEl;
};
const ingredientsArray = ingredients.map((ingredient) => newItem(ingredient));
addIngredients.append(...ingredientsArray);
