class Book{

    constructor(bookNumber, bookName, author, price){
        this._bookNumber=bookNumber;
        this._bookName=bookName;
        this._author=author;
        this._price=price;
    }

    toString(){
        return `${this.bookName}` + " by author " +  `${this.author}`;
    }

    set bookName(bookName){
        this._bookName= this.bookName;
    }
    get bookName(){
        return this._bookName.toLowerCase();
    }

    set author(bookName){
        this._author= this.author;
    }
    get author(){
        return this._author.toLowerCase();
    }
}

module.exports = Book;