import Calculator from './calculator';

describe('Calculator', () => {
    it('should add two numbers', () => {
        let sum = Calculator.add(1, 4);
        expect(sum).toBeCloseTo(5);
    });
    it('should subtract two numbers', () => {
        let sum = Calculator.subtract(1, 4);
        expect(sum).toBeCloseTo(-3);
    });
});