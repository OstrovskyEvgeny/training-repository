//.map
let arr = [1, 2, 3, 4, 5];

let arrMultiplied  = arr.map((n) => n ** 2);

let arrMath = arrMultiplied.map(Math.sqrt);

let arrNew = arr.map((n) => 'number ' + n);

//.filter
let nameUsers = ['Bob', 'Piter', 'Jhon', 'Oscar', 'Harry'];

let fourLetterName = nameUsers.filter((str) => str.length === 4);

let nameOscar = nameUsers.filter((str) => str === 'Oscar');

//.reduce
let factorialReduce = arr.reduce((result, current) => result * current, 1);


// 4)Вывести все ключи Объекта в виде массива то есть из {name: 'Bob', age: 16}  нужно получить ['name', 'age]

let featuresOfFerrari = {
    color: 'Red',
    power: 600,
    fuelСonsumption: 15,
    doorCount: 2,
}

let keysfeaturesOfFerrar = Object.keys(featuresOfFerrari);


// 5)Сделать функцию и использовать параметры по умолчанию 

const chooseColor = (color = featuresOfFerrari.color) => {
    return color;
}