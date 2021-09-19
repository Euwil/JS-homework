const input = document.querySelector("#font-size-control")
console.dir(input);
const text = document.querySelector("#text")
input.addEventListener(
    'input',
    () => {
        text.style.fontSize = `${input.value}px`
    }
)