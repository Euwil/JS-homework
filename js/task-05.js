let input = document.querySelector("#name-input")
let output = document.querySelector('#name-output')
input.addEventListener('input', () => {
    if (input.value == "") {
        output.textContent = "незнакомец"
    } else {
        output.textContent = input.value
    }
    
})
