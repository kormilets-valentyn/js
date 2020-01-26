//declarative fields

const aaa = document.getElementById('table');

function promptInObject(){
    const obj = {
        brand: prompt('Enter brand phone'),
        model: prompt('Enter model phone'),
        memory: Number(prompt('Enter count memory')),
        wireless: {
            'wi-fi': confirm('Wi-Fi?'),
            bluetooth: confirm('Bluetooth??')
        },
    };
    console.log(obj);
    return obj;
}

function toHTML(a){
    for (const key in a) {
        if (typeof (a[key]) == 'object') {
            for (const key2 in a[key]) {
                console.log(a[key]);
                const col = document.createElement('td');
                const col2 = document.createElement('tr');
                if (a[key][key2]){
                    col2.textContent = key2 + ' имеется';
                    aaa.appendChild(col2);
                }else {
                    col2.textContent = key2 + ' не имеется';
                    aaa.appendChild(col2);
                }
                aaa.appendChild(col2);
                aaa.appendChild(col);
            }
        }
        else
        {
            const col = document.createElement('td');
            const col2 = document.createElement('tr');
            col.textContent = a[key];
            col2.textContent = key;
            aaa.appendChild(col2);
            aaa.appendChild(col);
        }
    }
}
// let arr = promptInObject();
// toHTML(arr);


//object links

// var person = {
//     name: prompt("Enter a name"),
//     surname: prompt("Enter a surname"),
// };
// person.laptop = 'HP';
// console.log(person);


//imperative array fill 3

function imperativeArrayFill (){
    let arr = [];
    arr.push(prompt(1));
    arr.push(prompt(2));
    arr.push(prompt(3));
    return arr;

}
// console.log(imperativeArrayFill());


//while confirm

function confirmRotate (){
    let conf = confirm ('Здесь все наоборот');
        if (conf === true){
            return false;
        } else {
            alert('OK');
        return true;
        }

}
// console.log(confirmRotate());


//Создайте пустой массив и добавляйте в него элементы,
// пока пользователь не нажмет Отмена в очередном prompt.
// Используйте push для удобства

function arrayFill (){
    let array = [];
    while (true) {
        let insert = prompt('Some add');
        if (!insert) {
            break;
        } else {
            array.push(insert);
        }
    }
    return array;
    }
// console.log(arrayFill());


//Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.

function arrayFillNopush () {
    let array = [];
    let i = 0;
    while (true) {
        let insert = prompt('Some add');
        if (!insert) {
            break;
        } else {
            array[i] = insert;
            i++;
        }
    }
    return array;
}
// console.log(arrayFillNopush());


// Создайте бесконечный цикл, который прерывается с помощью конструкции break,
// когда Math.random() > 0.9.
// Код должен подсчитывать количество итераций и вывести это число с помощью alert.

function infiniteProbability (){
    let i = 1;
    console.log(i);
    while(true){
        let rand = Math.random();
        console.log(rand);
        if (rand < 0.9){
            i++;
            console.log(i);
        } else {
            alert('Количество циклов: ' + i);
            break;
        }
    }
    return true;
}
// infiniteProbability();




//Сделайте цикл с prompt, который прерывается по нажатию OK и 
// продолжается по нажатию "Отмена" c пустым телом цикла.

function emptyLoop() {

    while (true){
        let empty = prompt('OK - cancel, cancel - OK');
        if (empty === null){
            alert ('TRUE');
        } else {
            alert ('FALSE');
            break;
        }
    }
    }
// emptyLoop();


// Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for.

function progressionSum() {
    let a = prompt("Введите число:");
    let res = 0;
    for (let i = 1; i <= a; i +=3){
        res += i;
    }
    return res;
}
// console.log(progressionSum());


//Сформировать строку " # # # # # " с помощью цикла for. 
// Длина строки может быть четной и нечетной, и указывается в одном месте в коде.

function chessOneLine() {
    let chess = '';
    let a = 44;
    for (let i = 1; i < 10000; i++){
            chess += `.`;
            if (chess.length < a){
                chess += `#`;
                if (chess.length === a){
                    break;
                }
            } else break;
    }
    console.log(chess);
    console.log(chess.length);
}
// chessOneLine();


//Сформировать строку c помощью вложенных циклов.
const str = document.getElementById('table2');

function numbers(){
    for (let i = 0; i <=10; i++){
        const a = document.createElement('tr');
        let iter = 0;
        while (iter < 10){
            a.textContent += iter++;
        }
        str.appendChild(a);
    }
}
numbers();


//Сформировать строку c помощью вложенных циклов.
function numbers2(){
    for (let i = 0; i <=10; i++) {
        let iter = 0;
        let b = '';
        while (iter < 10){
            b += iter++;
        }
        console.log(b);
    }
}
// numbers2();


//Сформируйте строку с шахматной доской из вложенных циклов.
// Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски.
function chess(){
    for (let j = 0; j <10; j +=2) {
        const string = document.createElement('tr');
        let chess = '';
        let a = 20;
        for (let i = 1; i < 100; i++) {
            chess += `.`;
            if (chess.length < a) {
                chess += `#`;
                if (chess.length === a) {
                    break;
                }
            } else break;
        }
        console.log(chess);
        string.textContent = chess;
        str.appendChild(string);

        for (let k = 1; k <2; k += 2) {
            const string2 = document.createElement('tr');
            let chess2 = '';
            let a = 20;
            for (let i = 1; i < 100; i++) {
                chess2 += `#`;
                if (chess2.length < a) {
                    chess2 += `.`;
                    if (chess2.length === a) {
                        break;
                    }
                } else break;
            }
            console.log(chess2);
            string2.textContent = chess2;
            str.appendChild(string2);
        }
    }
}
chess();


//Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:
function cubes(){
    let arr = [];
    for (let i = 0; i <= 10; i++){
        arr.push(i*i*i);
    }
    console.log(arr);
}
cubes();



//Сформировать следующую строку - треугольник:
function triangle(){
    for (let i=1;i<=11;i += 2){
        let space = (11 - i)/2;
        const b = document.createElement('tr');
        let string = '.';
        let str2 = '#';
        b.textContent = string.repeat(space) + str2.repeat(i) + string.repeat(space);
        console.log(string.repeat(space) + str2.repeat(i) + string.repeat(space));
        str.appendChild(b);
    }
}
triangle();

//C помощью вложенного цикла сформируйте массив массивов "таблица умножения".
function multiplyTable() {
    let array = [];
    for (let i = 0; i <= 9; i++){
        array[i] = [];
        for (j = 0; j <= 9; j++){
            array[i][j] = i*j;
        }
    }
    console.log(array);
    console.log(array[5][4]);
}
// multiplyTable();


function matrixToHtmlTable(){
    const table = document.querySelector("#table");
    for (let i = 0; i<10; i++){
        const row = document.createElement('tr');
        for (j = 0; j < 10; j++){
            const col = document.createElement('td');
            let check = i*j;
            if (check === 0) {
                check  = i || j}
            col.textContent = check;
            row.appendChild(col);
            col.onmouseover = function(){
                this.style.backgroundColor = 'orange';
            };
            col.onmouseout = function(){
                this.style.backgroundColor = '';
            };
        }
        table.appendChild(row);
    }
}
// matrixToHtmlTable();

// Пользователь вводит 0 или 1. Гадалка пытается угадать, что введет пользователь (естественно перед его вводом),
// но не показывает пользователю, что бы пользователь не выбрал противоположный вариант,
// а выводит предполагаемый вариант в консоль, скрытую от пользователя.

function nePonyatnoNichego(predictArr){
        let enter = Number(prompt('Введите 0 или 1 (выход - cancel)'));
        if (enter === 0 || enter === 1) {
            predictArr.push(enter);
            predictArr.shift();
            console.log(predictArr);
        } else {
            alert('Введено не верное значение');

        }
    return nePonyatnoNichego(predictArr);
}
// nePonyatnoNichego([2,2,2,2]);
