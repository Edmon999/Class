class Account {
  static id = 0;
  constructor(name, balance) {
    this.id = Account.id++;
    this._name = name;
    this._balance = balance;
  }
  get name() {
    return this._name;
  }
  set name(str) {
    if (typeof str !== "string") {
      throw new Error("only string!!!");
    }
    this_name = str;
  }
  get balance() {
    return this._balance;
  }
  set balance(num) {
    if (typeof str !== "number") {
      throw new Error("only number!!!");
    }
    this_balance = num;
  }
  credit(amount) {
    this._balance += amount;
    return this._balance;
  }
  debit(amount) {
    if (this._balance < amount) {
      throw new Error("“Amount exceeded balance.”");
    }
    this._balance -= amount;
    return this._balance;
  }
  transferTo(anotherAccount, amount) {
    if (amount < this._balance) {
      anotherAccount._balance += amount;
      this._balance -= amount;
      return anotherAccount._balance;
    }
    throw new Error("“Amount exceeded balance.”");
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id) {
      return true;
    }
    return false;
  }
  toString() {
    return `${this._name}'s account balance is ${this._balance}`;
  }
}
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc);
console.log(cardAcc);
console.log(savingAcc.balance);
console.log(savingAcc.credit(400));
console.log(savingAcc.balance);
// console.log(savingAcc.debit(9000));
console.log(savingAcc.transferTo(cardAcc, 1000));
console.log(savingAcc.balance);
console.log(cardAcc.balance);
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc));
console.log(Account.identifyAccounts(savingAcc, cardAcc));
console.log(savingAcc.toString());
