import {Calculator} from './components/calculator/calculator';

let calc = new Calculator();
let node = document.createTextNode(`The number is ${calc.add(4, 1)}`);
document.body.appendChild(node);
