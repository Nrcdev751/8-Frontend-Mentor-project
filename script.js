

function opennav(){
    var element = document.getElementById("burger-icon");
    var elementbody = document.getElementById("body");
    element.classList.add("active");
    elementbody.classList.add("dark");
}

function closenav(){
    var element = document.getElementById("burger-icon");
    var elementbody = document.getElementById("body");
    element.classList.remove("active");
    elementbody.classList.remove("dark");
}