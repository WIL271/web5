function fun1() {
    let f1 = document.getElementsByName("fiel1");
    let f2 = document.getElementsByName("fiel2");
    let r = document.getElementById("result");
    var result = parseInt(f1[0].value) * parseInt(f2[0].value)
    r.innerHTML = result;
    let с = document.getElementById("btn1");
    return false;
}
function fun2() {
    let f1 = document.getElementsByName("fiel1");
    let f2 = document.getElementsByName("fiel2");
    let r = document.getElementById("result");
    r.innerHTML = None;
    f1.innerHTML = None;
    f2.innerHTML = None;
    return false;
}
