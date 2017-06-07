import $ from 'jquery';
import Calculator from './components/calculator/calculator';
import './app.scss';

// jQuery DOM manipulation
$('body').append(`<p class='result'>${Calculator.add(4, 1)}</p>`);
