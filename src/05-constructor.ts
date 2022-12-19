export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 1,
  ) { }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
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
      this.day += amount;
    }
    if (type === "month") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }

  getDay() {
    return this.day
  }
}

const myDate = new MyDate()
console.log(myDate.printFormat())
console.log(myDate.getDay())

const myDate2 = new MyDate(2022)
console.log("(2022) => ", myDate2.printFormat())

const myDate3 = new MyDate(2022, 3)
console.log("(2022, 3) => ", myDate3.printFormat())
