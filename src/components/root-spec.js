import {Calculator} from './root';

describe('Calculator', () => {
    it('should add two numbers', () => {
        let cal = new Calculator();
        let sum = cal.add(1, 4);
        expect(sum).toBeCloseTo(5);
    });
    it('should subtract two numbers', () => {
        let cal = new Calculator();
        let sum = cal.subtract(1, 4);
        expect(sum).toBeCloseTo(-3);
    });
});