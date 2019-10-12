function insert(val) {
    document.getElementById("result-pad").value += val;
}

function solve() {
    var x = document.getElementById("result-pad").value;
    var y = eval(x);
    document.getElementById("result-pad").value = y;
}

function clr() {
    document.getElementById("result-pad").value = " ";
}

