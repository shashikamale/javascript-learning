
var sintRef = require('./InterestCalculation');
var Book= require('./Books');

console.log("Simple Interest = "+sintRef(2000,2,5));

var angular4 = new Book(101, 'Ng-Book', 'Nade', 450);
var java = new Book(102, 'scjp', 'kathy', 450);
var dotNet = new Book(103, 'msft', 'msfoudation', 450);
var spring = new Book(104, 'action spring', 'riley', 450);


console.log("1 : "+angular4);
console.log("2 : "+ java.bookName +" by "+  angular4.author);
console.log("3 : "+ spring.toString());

let booklist= [angular4, java, dotNet, spring];


for(var x=0;x<=2;x++){
    console.log(x + " LOOP : "+ booklist[x].bookName);
}

for(let p=0;p<=2;p++){
    console.log(p + " LOOP : "+ booklist[p].bookName);
}


console.log('value of x at the end of loop using let := ' + x);
console.log('value of p at the end of loop using let := ' + p);