import Calculator from './components/calculator/calculator';
import './app.scss';

const node = document.createTextNode(`The number is ${Calculator.add(4, 1)}`);
document.body.appendChild(node);
