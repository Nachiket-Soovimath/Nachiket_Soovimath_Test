class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(operation) {
    switch (operation.toLowerCase()) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.b !== 0 ? this.a / this.b : 'Division by zero error';
      default:
        return 'Invalid operation';
    }
  }
}

const calc = new Calculator(10.5, 2.5);
console.log("Addition:", calc.calculate('add'));
console.log("Subtraction:", calc.calculate('subtract'));
console.log("Multiplication:", calc.calculate('multiply'));
console.log("Division:", calc.calculate('divide'));
