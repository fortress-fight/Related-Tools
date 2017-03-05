import say from "./index2.js";
// import css from "style-loader!css-loader!../css/style.css"
import css from "../css/style.css"


window.onload = function() {


    let p = document.createElement('p');

    p.innerHTML = "这是被打包进入的js文件";

    let con = document.getElementById('app');
    console.log(con);
    con.appendChild(p);

    say("这是第二个js文件")
}