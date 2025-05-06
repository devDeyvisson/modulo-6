function calculatePercentage(num1, num2) {
    if(num1 === 0) {
        throw new Error("Não é possível calcular porcentagem com divisor 0!")
    } else {
        return (num2 / num1) * 100;
    }
}

exports.modules = calculatePercentage;