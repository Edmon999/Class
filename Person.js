class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(val) {
    if (typeof val !== "string") {
      throw new Error("only string");
    }
    this._firstName = val;
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(val) {
    if (typeof val !== "string") {
      throw new Error("only string");
    }
    this._lastName = val;
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  set age(num) {
    if (typeof num !== "number") {
      throw new Error("only number");
    }
    this._age = num;
    return this._age;
  }
  get gender() {
    return this._gender;
  }
  set gender(val) {
    if (typeof val !== "string") {
      throw new Error("only string");
    }
    this._gender = val;
    return this._gender;
  }
  toString() {
    return `${this._firstName} ${this._lastName} ${this._age} years old`;
  }
}
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString());
class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }
  get year() {
    return this._year;
  }
  set year(y) {
    if (typeof y !== "number") {
      throw new Error("only number");
    }
    this._year = y;
    return this._year;
  }
  get fee() {
    return this._fee;
  }
  set fee(f) {
    if (typeof f !== "number") {
      throw new Error("only number");
    }
    this._fee = f;
    return this._fee;
  }
  get program() {
    return this._program;
  }
  set program(arrProg) {
    if (!ArrayIsArray(arrProg)) {
      throw new Error("only arr");
    }
    this._program = arrProg;
    return this._program;
  }
  passExam(programName, grade) {
    this._program.map((el) => {
      if (el.programName === programName) {
        el.grade = grade;
      }
      return el;
    });
    this._program.every((el) => {
      if (el.grade > 50) {
        this._year += 1;
      }
    });
  }
  isAllPassed() {
    return this._program.every((item) => item.grade >= 50);
  }
}
let student1 = new Student("d", "s", "male", 20, 2021, 500, [
  { programName: "Math", grade: 52 },
  { programName: "phisics", grade: 40 },
]);
console.log(student1.toString());
console.log(student1);
student1.passExam("phisics", 52);
console.log(student1);
