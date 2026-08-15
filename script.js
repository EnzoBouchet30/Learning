const plus = document.querySelector("#plus")
const moins = document.querySelector("#moins") 
const ajout = document.querySelector("#ajt")
const input = document.querySelector("input")
const p = document.querySelector("p")
plus.addEventListener('click', () => {
    p.textContent = Number(p.textContent) + 1
} )
moins.addEventListener('click', () => {
    p.textContent = Number(p.textContent) - 1
})
ajout.addEventListener('click', () => {
    p.textContent = Number(p.textContent) + Number(input.value)
})