console.log('Math.PI ', Math.PI);
console.log('Math.max ', Math.max(1, 2, 5, 4, 7, 9, 2, 1));
// El metodo static sirve para acceder a una propiedad o valor de una clase sin la necesiad de intanciarla previamente
// Readonly nos previene para que los valores de las clases no se puedan reasignar
class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item, -Infinity);
  }
}

// const math = new MyMath()
// math.PI;

console.log('MyMath', MyMath.PI)
// MyMath.PI = 121
console.log(MyMath.max(154, 4789, 4541, 677893))
const numbers = [12, 2, 1, 1112, 9]
console.log(MyMath.max(...numbers))
const numbers2 = [-1, -5, -9, -514]
console.log(MyMath.max(...numbers2))

