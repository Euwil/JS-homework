const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const list = document.querySelector('#ingredients')
let listOfIngredients = ingredients.map(elem => {
    let item = document.createElement("li")
    item.textContent = elem
    list.appendChild(item)
})