export abstract class Animal {
  constructor(
    protected name: string,

  ) { }

  move() {
    console.log('Moving along');
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomthing() {
    console.log('dooo')
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomthing()
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}

// const fifi = new Animal('fifi');
// fifi.move();
// console.log(fifi.greeting());

const cheis = new Dog('cheis', 'Franco')
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
// cheis.name = "otro nombre"
console.log(cheis.owner);
console.log(cheis.greeting());
// cheis.doSomthing()
cheis.move()
