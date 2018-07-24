(function () {
    var customer = {
        customerId: 100,
        customerName:'Ramesh',
        toString: function () {
            return this.customerId + '-' + this.customerName;
        }
    }

    console.log(customer.toString());


    var Product = function(prodCode, prodName, qty, rpu) {
        this.prodCode = prodCode;
        this.prodName = prodName;
        this.qty = qty;
        this.rpu = rpu;

    }

    Product.prototype.toString = function () {
        return this.prodCode+' | '+this.prodName;
    }
    Product.prototype.calculate = function () {
        return this.qty * this.rpu;
    }
    var cake = new Product(101, 'Black Forest', 2, 450 );
    var pakoda = new Product(102, 'Black Forest', 2, 200 );


var items = [cake , pakoda];

console.log("No." +' | '+ "Id | Name     " + ' | '+  "qty" +' | Rs'+ "rpu" +' |  = Rs '+ "ItemTotal");
console.log("=====================================================================================");
items.forEach(function(eachItem, idx){
    console.log(++idx +' | '+ eachItem + ' | '+  eachItem.qty +' | Rs'+ eachItem.rpu+' |  = Rs '+ eachItem.calculate());

});

})();