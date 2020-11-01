import { runCalculator } from "./runCalculator.js"

const display = document.getElementById("calcDisplay")
const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const minus = document.getElementById("minus")
const divide = document.getElementById("divide")
const plus = document.getElementById("plus")
const multiply = document.getElementById("multiply")
const clear = document.getElementById("clear")
const equals = document.getElementById("equals")

const buttonArray = []
buttonArray.push(zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, divide, multiply)


export const addButtonListeners = () => {
    buttonArray.map(button => {
        button.addEventListener("click", e => {
            if (e.target.value === "*" || e.target.value === "+" || e.target.value === "-" || e.target.value === "/") {
                display.value += " " + e.target.value + " "
            }
            else {
                display.value += e.target.value
            }
        })
    })

    clear.addEventListener("click", e => display.value = "")

    equals.addEventListener("click", runCalculator)
}