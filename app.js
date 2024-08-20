// number - числа
// bigInt - большие и сложные числа
// string - строки
// boolean - логическое значение, либо true либо false
// undefined - отсутствие тех или иных значений у переменой
// null - когда нужно специально указать переменной, что у нее нет значений
// symbol - используется для создания уникальных ключей свойств объектов и предотвращения коллизий имён
// object - коллекция свойств и методов, связанных друг с другом

const age = 27;
console.log(typeof age);

const bigInt = 651651616516n;
console.log(typeof bigInt)

const firstName = 'Name'
console.log(typeof firstName)

let age2;
console.log(typeof age2) 

const obj = {

    name: 'Andrew',
    age: 28,
    isWorked: true
}

// Операторы

 const num = 10;
 const num2 = 5;
 
 console.log(num + num2)
 console.log(num - num2)
 console.log(num * num2)
 console.log(num / num2)
 console.log(num % num2)
