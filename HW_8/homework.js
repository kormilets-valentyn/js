var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12}
];

//Сделайте обобщенную функцию сортировки массива
//Функция позволяет отсортировать любой набор данных по имени поля (второй параметр).
// Третьим параметром идет необязательный Boolean, который в случае true делает сортировку по возрастанию,
// в случае false - по убыванию. По умолчанию (без третьего параметра) происходит сортировка по возрастанию.
function sort (array, field, boo = true){
    let newArr = [];
    for (let key in array){
        newArr.push(array[key][field]);
    }
    if (typeof newArr[0] === "number"){
        if (boo === true){
            newArr.sort(function(a,b){
                return a-b;
            });
        } else {
            newArr.sort(function(a,b){
                return b-a;
            })
        }
    } else {
        if (boo === true){
            newArr.sort();
        } else {
            newArr.sort();
            newArr.reverse();
        }
    }
    return newArr;
}
console.log("Сортировка: " + sort(persons,"name",false));


//Используя Array.map приведите все строки в массиве к числу. Элементы других типов оставьте как есть:
let lalala = ["1", {}, null, undefined, "500", 700];

function returnInt(element) {
    if (typeof element === "string"){
        return parseInt(element, 10);
    } else return element;
}

console.log (lalala.map(returnInt));


//Получите произведение всех чисел в массиве, используя Array.reduce. Не обрабатывайте типы данных, не являющиеся числом.
const arrSum = ['0', 5, 3, "string", null];
function reduceFunc(arr){
    return arr.reduce(function (previousValue, currentValue) {
        if (typeof currentValue !== 'number') {
            return previousValue;
        } else return previousValue * currentValue;
}, 1)
}

console.log(reduceFunc(arrSum));

// Напишите свою реализацию Array.filter для объектов:
var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
    style: "black"
};

function filter(obj, key, value) {
    let newObj = {};
    let count = 0;
    for (let aaa in obj) {
        if (aaa == key || obj[aaa] == value) {
            newObj[aaa] = obj[aaa];
        } else count++;
    }
    console.log("Кол-во не взятых значений = " + count);
    return newObj;
}
console.log(filter(phone, "ram","black"));

//Напишите свою реализацию Array.map для объектов:
let man = {name: "Иван", age: 17};

function objectMap(obj){
    let newMan = {};
    for (let key in obj){
        newMan[key + '_'] = obj[key] + "$";
    }
    return newMan;
}
console.log(objectMap(man));

// Напишите функцию, который будет считать сумму арифметической прогрессии рекурсивно.
function recursionSum(y) {
    try{
        if (y % 2 != 0){
            throw new Error("Не четное")
        }
        if (y == 0){
            return y;
        } else {
            return y + recursionSum(y - 2);
        }
    }
    catch (e) {

        console.log(e);
        console.log('Здесь идет подсчет четных чисел');
    }
}
console.log(recursionSum(10));
