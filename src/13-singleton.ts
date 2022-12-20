export class MyService {

  static instance: MyService | null = null
  // con el constructor private prevenimos la creacion de nuevas instacias
  private constructor(
    private name: string,
  ) { }

  getname() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log(MyService.instance)
      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const myService1 = MyService.create('service 1')
console.log(myService1.getname())
const myService2 = MyService.create('service 2') // al intentar crear otra nueva intacias el metodo create me devuelve la intacias creada en myService1
console.log(myService2.getname())

// const myService2 = new MyService('service 2')
// console.log(myService2.getname())
// comprobamos que las dos intacias sean las mismas
console.log(myService1 === myService2)
