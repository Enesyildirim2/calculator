const Calculator = require('./calculator');

class QuickCalcApp {
    constructor() {
        this.calc = new Calculator();
        this.display = "0";
        this.currentOperand = null;
        this.operator = null;
    }

    input(value) {
        if (['+', '-', '*', '/'].includes(value)) {
            this.operator = value;
            this.currentOperand = parseFloat(this.display);
            this.display = "0";
        } else if (value === '=') {
            if (this.operator && this.currentOperand !== null) {
                const secondOperand = parseFloat(this.display);
                try {
                    switch (this.operator) {
                        case '+': this.display = this.calc.add(this.currentOperand, secondOperand).toString(); break;
                        case '-': this.display = this.calc.subtract(this.currentOperand, secondOperand).toString(); break;
                        case '*': this.display = this.calc.multiply(this.currentOperand, secondOperand).toString(); break;
                        case '/': this.display = this.calc.divide(this.currentOperand, secondOperand).toString(); break;
                    }
                } catch (e) {
                    this.display = "Error";
                }
                this.operator = null;
                this.currentOperand = null;
            }
        } else if (value === 'C') {
            this.display = this.calc.clear().toString();
            this.operator = null;
            this.currentOperand = null;
        } else {
            if (this.display === "0" || this.display === "Error") {
                this.display = value.toString();
            } else {
                this.display += value.toString();
            }
        }
    }

    getDisplay() {
        return this.display;
    }
}

module.exports = QuickCalcApp;
