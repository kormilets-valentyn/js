//Сделайте счетчик кликов с помощью функции и замыкания.
// Счетчик должен выводить количество кликов в innerText элемента.

let btn = document.querySelector('#butt');

    btn.addEventListener('click',(event) => {
        event.preventDefault();
        let text = document.querySelector('#input').value;
        console.log (text);
        console.log (btn.value);
        let count = btn.textContent;
        console.log(btn.textContent);
        btn.textContent = Number(count) +1;
        let enter = document.querySelector('#span');
        console.log(enter.textContent);
        enter.textContent = Number(enter.textContent) + 1;
    } );


let btnCountable = document.querySelector('#count');

btnCountable.addEventListener('click',(event) => {
    event.preventDefault();
    console.log (btnCountable.textContent);
    let count = btnCountable.textContent;
    console.log(btnCountable.textContent);
    btnCountable.textContent = Number(count) +1;
} );


//Напишите функцию makeProfileTimer, которая служит для замера времени выполнения другого кода и работает так:
//    var timer = makeProfileTimer()
//    doSomething();  //некий код, время выполнения которого мы хотим измерить с высокой точностью
//    alert(timer()); //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(),
//                    // т. е. измерить время выполнения doSomething

function makeProfileTimer() {
    const name = performance.now();
    function displayName() {
        alert(performance.now() - name);
    }
    return displayName;
}


let myFunc = makeProfileTimer();


var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12}
];
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

myFunc();


//Напишите код, который будет делать обратный ежесекундный отсчёт в консоли, используя console.log.
// Используйте Self Invoked Function для создания замыкания и setTimeout для задержки вывода.
function finalCountDown() {
    for(let i = 0; i <= 5; i++){
        (function(i) {
            let arr = [5,4,3,2,1,"поехали"];
            setTimeout(()=>
                console.log(arr[i]), 1000 * i);
        })(i);
    }
}
finalCountDown();