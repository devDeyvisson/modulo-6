function calculateDivision(num1, num2) {
    if(num2 === 0) {
        throw new Error("Não é possível realizar divisão por 0!")
    } else {
        return num1 / num2;
    }
}

module.exports = calculateDivision;