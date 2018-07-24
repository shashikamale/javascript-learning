//Global Object Appis cerated using object literal Syntax

var app = {};
//Adding a function shoow using function literal syntax

app.show = function () {

    console.log("Inside showfunction app");
    return ' Java script examples2';
}

/* 

function show(){
// this was global
    console.log("Inside show functionGlobal ");
return ' Java script examples1';
} */

app.init = function () {
    app.greettButton = document.getElementById("showHeading");
    app.greettButton.addEventListner("click", function () {
        var majorHead = document.getElementById('majorHeading');

        majorHead.innerHTML = app.show();
    });
}

app.initOLD = function () {
    app.greettButton = document.getElementById("showHeading");
    app.greettButton.addEventListner("click", function () {
        alert("hi");
    });
}
app.greet = function () {

}