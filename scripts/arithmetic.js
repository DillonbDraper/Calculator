// Basic operations
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b
export const multiply = (a, b) => a * b
export const divide = (a, b) => {
    if (b === 0) {
        window.alert("DO NOT DIVIDE BY ZERO")
    } else {
        return a / b
    }
}