function run() {
var name = prompt ("Enter your name")
prompt ("Hello " + name)
} 

function plus() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("result");

c.value = parseInt(a.value) + parseInt(b.value);

}

function minus() {
    let d = document.getElementById("a");
    let e = document.getElementById("b");
    let f = document.getElementById("result");

f.value = parseInt(d.value) - parseInt(e.value);

}

function multiply() {
    let g = document.getElementById("a");
    let h = document.getElementById("b");
    let i = document.getElementById("result");

i.value = parseInt(g.value) * parseInt(h.value);

}

function divide() {
    let j = document.getElementById("a");
    let k = document.getElementById("b");
    let l = document.getElementById("result");

l.value = parseInt(j.value) / parseInt(k.value);

}