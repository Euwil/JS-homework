const input = document.querySelector("#validation-input")
function onBlur() {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("valid")
    } else {
        input.classList.add("invalid")
    }
}

input.addEventListener(
    'blur',
    onBlur
)