function onClick1() {
    let g1 = document.getElementsByName("number1");
    let g2 = document.getElementsByName("number2");
    let p = document.getElementById("proizv");
    var proizv = parseInt(g[0].value) * parseInt(g2[0].value)
    p.innerHTML = proizv;
    let с = document.getElementById("btn1");
    return false;
}
function onClick2() {
    let g1 = document.getElementsByName("number1");
    let g2 = document.getElementsByName("number2");
    let p = document.getElementById("proizv");
    p.innerHTML = None;
    g1.innerHTML = None;
    g2.innerHTML = None;
    return false;
}
