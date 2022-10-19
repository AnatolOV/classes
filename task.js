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