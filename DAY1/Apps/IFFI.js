var app=(
     function () {
        console.log('IFFE called');

        function greet() {
            return 'Hello World';
        }

        greet();
        var msg = greet();
        console.log(msg);

        function calc(inr){
            return inr * 65.00;

        }
        console.log(calc(200));


        return {
            greeter:greet
        }


    })();


    console.log("PRINT GLOBAL "+ app);
    console.log("==================");
    console.log("PRINT APP "+ app.greeter());