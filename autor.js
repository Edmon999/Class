class Autor {
  constructor(name, email, gender) {
    this._name = name;
    this.email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(str) {
    if (typeof str !== "string") {
      throw new Error("only string!!!");
    }
    this._name = str;
    return this._name;
  }
  get gender() {
    return this._gender;
  }
  toString() {
    let genderCase = (this._gender = this._gender.toLowerCase());
    return genderCase === "female" ? ` Ms ${this._name}` : ` Mr ${this._name}`;
  }
}
const hov = new Autor("ar", "ed@gmail.com", "male");
console.log(hov);
console.log((hov.name = "ae"));
console.log(hov.toString());

class Book {
  constructor(title, autor, price, quantity) {
    this._title = title;
    this._autor = autor;
    this.price = price;
    this.quantity = quantity;
  }
  get title() {
    return this._title;
  }
  set title(newTitle) {
    this._title = newTitle;
    return this._title;
  }
  get autor() {
    return this._autor;
  }
  set autor(val) {
    this._autor = val;
    return this._autor;
  }
  getProfit() {
    if ((typeof this.price && typeof this.quantity) !== "number") {
      throw new Error("Only Numbers!!");
    }
    return this.price * this.quantity;
  }
}
const story = new Book("kg", "ar", 5, 150);
console.log(story.getProfit());
console.log((story.autor = "napoleon hill"));
console.log((story.title = "Think and grow rich"));
console.log(story);
