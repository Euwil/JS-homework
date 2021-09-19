const input = document.querySelector("input")
const formCont = document.querySelector("#controls")
const boxesCont = document.querySelector("#boxes")
formCont.addEventListener(
    'click',
    onClick
)
function onClick(params) {
    console.log(params.target);
if (params.target.dataset.action == "render") {
    createBoxes(input.valueAsNumber)
}
if (params.target.dataset.action == "destroy") {
    removeBoxes()
}
}
function getRGB() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return [r, g, b];
  }
function createBoxes(amount) {
const arr = []
let width = 30
let height = 30
for (let i = 0; i < amount; i++) {
const div = document.createElement('div')
div.style.width = `${width}px`
div.style.height = `${height}px`
const [red, green, blue] = getRGB();
div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
width +=10
height +=10
arr.push(div)
}
boxesCont.append(...arr);
}

function removeBoxes() {
    boxesCont.innerHTML = ""
    input.value = null
}
