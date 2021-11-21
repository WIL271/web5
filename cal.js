function fun1() {[InternetShortcut]
URL=https://github.com/WIL271/web5/blob/main/cal.js

    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    var result = parseInt(f1[0].value) * parseInt(f2[0].value)
    r.innerHTML = result;
    let с = document.getElementById("button1");
    return false;
}
function fun2() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    r.innerHTML = None;
    f1.innerHTML = None;
    f2.innerHTML = None;
    return false;
}
