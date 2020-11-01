import { operate } from "./operator.js"

const display = document.getElementById("calcDisplay")


export const runCalculator = () => {
    const stringToEvaluate = display.value

    const nativeArray = stringToEvaluate.split(" ")
    const arrayToEval = nativeArray.map(value => {
        if (value !== "+" && value !== "-" && value !== "*" && value !== "/") {
            return parseInt(value)
        } else {
            return value
        }
    })
    console.log(arrayToEval)
    if (arrayToEval.length === 3) {
        let operator = arrayToEval[1]

        display.value = operate(operator, arrayToEval[0], arrayToEval[2])
    } else if (arrayToEval.length > 3) {
        let workingValue = operate(arrayToEval[1], arrayToEval[0], arrayToEval[2])
        arrayToEval.splice(0, 3)
        console.log(arrayToEval)
        workingValue = operate(arrayToEval[0], workingValue, arrayToEval[1])
        while (arrayToEval.length > 3) {
            arrayToEval.splice(0, 2)
            workingValue = operate(arrayToEval[0], workingValue, arrayToEval[1])
        }
        display.value = workingValue
    }
}