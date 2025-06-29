var result = document.getElementById("result");
var alertP = document.getElementById("alert");

function input(num) {
    result.value += num;
}

function calc() {
    var output = eval(result.value);
    result.value = output;
}

function cancel() {
    result.value = "";
}

function even() {
    if(result.value%2 == 0){
        alertP.innerHTML = "Even number";
        alertP.style.color = "green";
        result.value = "";
    }
    else {
        alertP.innerHTML = "Not even number";
        alertP.style.color = "red";
        result.value = "";
    }
}

function odd() {
    var result = document.getElementById("result");
    if(result.value%2 != 0){
        alertP.innerHTML = "Odd Number";
        alertP.style.color = "green";
        result.value = "";
    }
    else{
        alertP.innerHTML = "Not odd number";
        alertP.style.color = "red";
        result.value = "";
    }
}