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
let one = new PrintEditionItem();

class Magazine extends PrintEditionItem {
  constructor(type = "magazine"){
    super();
    this.type = type;
  }  
}


class Book extends PrintEditionItem {
  constructor(type, author){
    super();
    this.type = "book";
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(){
    super();
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(){
    super();
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor() {
    super();
    this.type = "detective";
  }
}