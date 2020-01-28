//Напишите функцию a, которая просто является коротким именем для alert.
// Смотрите пример с d(), которая является коротким именем для debugger из материала лекции
function a(text){
    alert(text);
}
// a("Привет!!!"); // вызывает alert("Привет!")


// Напишите функцию cube, которая возвращает число в третьей степени:
function cube (number){
    return Math.pow(number, 3);
}

//Напишите функцию avg2, которая рассчитывает среднюю для двух чисел:
function avg2 (x, y) {
    return (x + y) / 2;
}

//Напишите функцию sum3 для суммирования 3 чисел:
// Обратите внимание, что sum3 от двух параметров тоже работает корректно.
function sum3(x,y,z = false){
    if (z){
        return (x + y + z);
    } else {
        return (x + y);
    }
}

//Напишите функцию intRandom, которая принимает два параметра:
// нижнюю и верхнюю границу, и возвращает целое случайное число из этого диапазона включительно:
// Обратите внимание, что если передан один параметр (intRandom(10) в примере выше),
// то функция работает как будто первый параметр равен 0,
// а переданный параметр становится вторым параметром (intRandom(0,10))
// Используйте умножение для расширения значения встроенной функции Math.random c диапозона 1,
// сложениe для смещения результата на первый параметр, и Math.round для округления результата
function intRandom(x,y){
    if (y === undefined){
        y = x;
        x = 0;
        console.log(`x: ${x} ` + `y: ${y}`);
    }
        console.log(`x: ${x} ` + `y: ${y}`);
        return Math.round(x - 0.5 + Math.random() * (y - x +1));
}

//Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров.
function greatAll(){
    let str = '';
    for (let i = 0; i < arguments.length; i++){
        str += arguments[i];
        str += '\n'
    }
    alert ("Hello," + '\n' + str);
}

//Напишите функцию sum, которая сумирует любое количество параметров
function sum(){
    let zero = 0;
    for (let i = 0; i < arguments.length; i++){
        zero += arguments[i];
    }
    return zero;
}

const sample2 = prompt("Введите название задания (a, cube, avg2, sum3, intRandom, greatAll, sum)");


//Всё предыдущие функции и примеры с ними объедините в функции, которые вызывайте в switch по имени задания:
// switch(sample){
//     case "a" : a("Привет!!!");
//         break;
//     case "cube" : console.log(cube(5));
//         break;
//     case "avg2" : console.log(avg2(2,7));
//         break;
//     case "sum3" : console.log(sum3(2,7));
//         break;
//     case "intRandom" : console.log(intRandom(7));
//         break;
//     case "greatAll" : greatAll("Superman", "SpiderMan", "Captain Obvious");
//         break;
//     case "sum" : console.log(sum(7,3,4,5,6,7,8,9,90,54));
//         break;
//     default: alert("Задание не найдено");
//         break;
// }


//Используйте ассоциативный массив вместо switch
let arr = {
    // "a" : a("Привет!!!"),
    "cube" : (cube(5)),
    "avg2" : (avg2(2,7)),
    "sum3" : (sum3(2,7)),
    "intRandom" : (intRandom(7)),
    // "greatAll" : greatAll("Superman", "SpiderMan", "Captain Obvious"),
    "sum" : (sum(7,3,4,5,6,7,8,9,90,53)),
};

for (let key in arr){
    if (key === sample2){
        console.log(arr[key]);
    }
}