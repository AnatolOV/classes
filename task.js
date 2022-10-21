class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix(){
    this.state = this.state * 1.5;
  }
  set state(state) {
    if (state < 0){
      this._state = 0;      
    } else {
      this._state = 100;
    }
  }
  get state(){
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null){
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.type = "magazine";
  }  
}


class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null, author){
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.type = 'book';
    this.author = author;
  }
}
let b = new Book('Война и Мир', 1986, 569, 30, 'book',"Толстой");
console.log(b);

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, state = 100, type = null, author){
    super(name, releaseDate, pagesCount, state = 100, type = null, author);
    this.type = "novel";
  }
}
let bok = new NovelBook('Pro', 2019,400,100,'n','Ken Kizy');
console.log(bok);

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, state = 100, type = null, author){
    super(name, releaseDate, pagesCount, state = 100, type = null, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, state = 100, type = null, author) {
    super(name, releaseDate, pagesCount, state = 100, type = null, author);
    this.type = "detective";
  }
}

console.log(b);

//Задание 2


class Library {
  constructor (name) {
    this.name = name;
    this.books = [];   
  }
  addBook(nameBook) {
    if(nameBook.state > 30){
    this.books.push(nameBook);
    }
  }
 
   //Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ, по которому будет производиться поиск (тип, автор, название, год выпуска и пр.) и искомое значение. 
    //??? не понимаю, где должен искаться введенный ключ и значение, как это описать в коде. Подскажите, пожалуйста, что я должен сделать, как это сделать я попробую разобраться...
  
  findBookBy(type, value) {
    this.type = 'type';
    this.value = 'value';    
    for ([this.type, this.value] of Object.entries(this.books)) {
    console.log(/*`${type}: ${value}`*/this.books);
    return this.books
    }
  }
  
  //Создайте метод giveBookByName(bookName), который будет в качестве аргумента принимать название книги, запрошенной читателем. Если запрошенная книга найдена, метод должен удалять книгу из хранилища books, и возвращать её. Если книга не была найдена, метод должен возвращать null.
  //??? так же не понимаю что я должен сделать, если можно подскажите, пожалуйста, пошагово, как реализовать шаги я разбирусь (полагаю..)
  giveBookByName(bookName) {
    this.bookName = bookName;
    this.result = books.this.bookName;
  
    
   // let result = arr.find((el) => el.name === bookName);
    console.log(result);
  }
}

let lib = new Library('библиотека имени Ленина');
lib.addBook(b);
console.log(lib.findBookBy('type', 'book'));
let lib2 = new Library('Детская библиотека');
lib2.addBook(b);
console.log(lib2)