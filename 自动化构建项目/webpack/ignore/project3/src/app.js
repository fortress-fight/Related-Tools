import "./asset/style.scss";
import h from "./components/header/head";


(() => {
    alert('test for es6 => es5')
})()

window.onload = function() {
    var b = document.createElement('p');
    b.innerHTML = h().con;
    box.appendChild(b);
}