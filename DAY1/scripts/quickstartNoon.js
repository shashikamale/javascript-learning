//Global Object Appis cerated using object literal Syntax

var app = {};
//Adding a function shoow using function literal syntax

app.show = function (title) {
    console.log("Inside showfunction app");
    return title.toUpperCase();

}

app.update = function (title) {
    console.log("Inside update app");

    return function(){
        var majorHead = document.getElementById('majorHeading');
        majorHead.innerHTML = app.show(title);
        return title;
    }
    console.log("Inside update app End");
}

app.init = function () {
    console.log("Inside init app");

    app.greetButton = document.getElementById("showHeading");
    app.greetButton.addEventListener("click", app.update ('ECMA Script') );
    console.log("Inside init app End");
}