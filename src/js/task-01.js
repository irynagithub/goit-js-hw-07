const allCategories = document.querySelectorAll(".item");
console.log("В списке", allCategoriesEl.length, "категорий"); // В списке 3 категорий

allCategories.forEach((num) => {
  console.log("Категория:", num.firstElementChild.textContent);
  console.log("Количество элементов:", num.lastElementChild.children.length);
});
