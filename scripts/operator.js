import { add, subtract, multiply, divide } from "./arithmetic.js"

// Operate function for passing in user input eventually
export const operate = (operator, a, b) => {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b)
    } else if (operator === "/") {
        return divide(a, b)
    } else {
        return "Something went very wrong"
    }
}

export const square = (a) => {
    return a * a
}

export const sqRoot = (a) => {
    return Math.sqrt(a)
}