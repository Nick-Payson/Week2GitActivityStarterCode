import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const sub_result = calc.subtract(7, 4);
console.log(`sub_result = ${sub_result}`);

const multiply_result = calc.multiply(5, 8);
console.log(`multiply_result = ${multiply_result}`);
