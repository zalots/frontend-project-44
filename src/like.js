

export const getGcd = (num1, num2) => {
    let a = num1;
    let b = num2;

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
};