export class MyDate {

  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 1,
  ) { }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === "days") {
      this._day += amount;
    }
    if (type === "month") {
      this._month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }

  get day() {
    return this._day
  }
  // los getters siempre deben retornar un valor
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range')
    }
  }
}

const myDate = new MyDate()
console.log(myDate.printFormat())
myDate.month = 12
console.log(myDate.printFormat())
myDate.month = 13
// este console log no deberia aparecer
console.log(myDate.printFormat())



// const myDate2 = new MyDate(2000, 7, 10)
// console.log("2000", myDate2.isLeapYear)
// const myDate3 = new MyDate(2001, 7, 10)
// console.log("2001", myDate3.isLeapYear)
// const myDate4 = new MyDate(2004, 7, 10)
// console.log("2004", myDate4.isLeapYear)
