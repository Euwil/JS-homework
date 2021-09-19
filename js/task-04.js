const incBtn = document.querySelector("[data-action='increment']")
const decBtn = document.querySelector("[data-action='decrement']")
const value = document.querySelector("#value")
function counter() {
    let counterValue = 0
    function decrement() {
        return (counterValue -= 1)
    }
    
    function increment() {
        return (counterValue +=1)
    }
    return {decrement, increment}
}
const e = counter()
incBtn.addEventListener('click', () => {let result = e.increment()
    value.textContent = result})
decBtn.addEventListener('click', () => {let result = e.decrement()
    value.textContent = result})