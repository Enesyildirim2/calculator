const Calculator = require('./calculator');
const QuickCalcApp = require('./app');

describe('Calculator Unit Tests', () => {
    let calc;
    beforeEach(() => {
        calc = new Calculator();
    });

    test('Addition: correctly adds two numbers', () => {
        expect(calc.add(5, 3)).toBe(8);
    });

    test('Subtraction: correctly subtracts two numbers', () => {
        expect(calc.subtract(10, 4)).toBe(6);
    });

    test('Multiplication: correctly multiplies two numbers', () => {
        expect(calc.multiply(6, 7)).toBe(42);
    });

    test('Division: correctly divides two numbers', () => {
        expect(calc.divide(10, 2)).toBe(5);
    });

    test('Division by zero: handles division by zero gracefully', () => {
        expect(() => calc.divide(5, 0)).toThrow("Division by zero is not allowed");
    });

    test('Edge case: addition with negative numbers', () => {
        expect(calc.add(-5, -3)).toBe(-8);
    });

    test('Edge case: multiplication with decimal numbers', () => {
        expect(calc.multiply(2.5, 4)).toBe(10);
    });

    test('Clear: resets the current value to zero', () => {
        expect(calc.clear()).toBe(0);
    });
});

describe('QuickCalcApp Integration Tests', () => {
    let app;
    beforeEach(() => {
        app = new QuickCalcApp();
    });

    test('Simulate full user interaction: 5 + 3 = 8', () => {
        app.input('5');
        app.input('+');
        app.input('3');
        app.input('=');
        expect(app.getDisplay()).toBe('8');
    });

    test('Verify Clear resets the display to 0', () => {
        app.input('9');
        app.input('*');
        app.input('9');
        app.input('=');
        expect(app.getDisplay()).toBe('81');
        app.input('C');
        expect(app.getDisplay()).toBe('0');
    });
    
    test('Simulate division by zero in UI', () => {
        app.input('5');
        app.input('/');
        app.input('0');
        app.input('=');
        expect(app.getDisplay()).toBe('Error');
    });
});
