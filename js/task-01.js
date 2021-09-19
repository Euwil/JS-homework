const list = document.querySelector('#categories')
const category = document.querySelectorAll(".item")
console.log(`В списке ${category.length} категории.`);

const title = document.querySelectorAll("h2")
title.forEach(elem => {
    console.log(`Категория: ${elem.textContent}`);
    console.log(`Количество элементов: ${elem.nextElementSibling.children.length}`);
})

