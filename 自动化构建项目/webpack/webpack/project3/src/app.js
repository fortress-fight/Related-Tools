import './css/style.css';
import './scss/style.scss';
import header from './components/header/header.html'

console.log(header)

var app = document.getElementById('app');
app.innerHTML = header;