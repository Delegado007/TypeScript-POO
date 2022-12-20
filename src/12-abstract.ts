import { Animal, Dog } from './09-protected'
// la clase abstracata restreige la creacion de una intancia del objeto padre y sirve para definir en comportamiento base de la clase hija por medio de un extend
// const animal = new Animal('elite')
// animal.greeting()

const cheis = new Dog('cheis', 'franco')
cheis.greeting()
cheis.woof(2)
