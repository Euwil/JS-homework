const input = document.querySelector("input")
const formCont = document.querySelector("#controls")
const boxesCont = document.querySelector("#boxes")
document.addEventListener(
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

function createBoxes(amount) {
const arr = []
let width = 30
let height = 30
for (let i = 0; i < amount; i++) {
const div = document.createElement('div')
div.style.width = `${width}px`
div.style.height = `${height}px`
div.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
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
