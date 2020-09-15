import calcFactorial from '../../utils/calcFactorial';

describe('it should be able to calculate the factorial', () => {
    test('factorial of 4', () => {
        expect(calcFactorial(4)).toBe(BigInt(24));
    });
    test('factorial of 12', () => {
        expect(calcFactorial(12)).toBe(BigInt(479001600));
    });
    test('factorial of 5', () => {
        expect(calcFactorial(5)).toBe(BigInt(120));
    });
});
