export default (n: any) => {
    let i;
    let result = BigInt(1);

    for (i = BigInt(2); i <= n; i++) {
        result *= i;
    }
    return result;
};
