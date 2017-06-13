window.onload = function() {


    let p = document.createElement('p');

    p.innerHTML = "这是被打包进入的js文件";

    let con = document.getElementById('app');
    console.log(con);
    con.appendChild(p);

}