let say = (str) => {
    let p = document.createElement('p');

    p.innerHTML = str;

    let con = document.getElementById('app');
    console.log(con);
    con.appendChild(p);
}

export default say;