class Console {
  constructor(str) {
    this.str = str;
    this.historyArr = [];
  }
  log(...arg) {
    let args = JSON.stringify(arg);
    this.historyArr.push(args.slice(1, args.length - 1));
    return `${this.str}: ${args.slice(1, args.length - 1)}`;
  }
  history() {
    return this.historyArr;
  }
  clearHistory() {
    this.historyArr = [];
    return;
  }
}
const myConsole = new Console("Regular");
console.log(myConsole.log("ara", 0)); // "Regular: [0,1,2,3]"
console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(myConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok : ", 1, 2, 3));
console.log(myConsole.history());
console.log(myConsole.clearHistory());
console.log(myConsole.history());
