export default (n: any) => {
    var i, result = BigInt(1);

    for (i = BigInt(2); i <= n; i++) {
        result *= i;
    }
    return result;
}