function age(){
    let age = prompt('Сколько Вам лет исполняется или уже исполнилось в этом году: ');
    const date = new Date();
    alert(`Год Вашего рождения: ${date.getFullYear() - age}`);
}

function convert(degree) {
    var x;
    if (degree == "cels") {
        x = document.getElementById("celsium").value * 9 / 5 + 32;
        document.getElementById("farengeit").value = Math.round(x);
    } else {
        x = (document.getElementById("farengeit").value -32) * 5 / 9;
        document.getElementById("celsium").value = Math.round(x);
    }
}
function floor() {
    let x = -43.555555, y = 3.3333333;
    if(x/y>=0)
        alert(Math.floor(x/y));
    else
        alert(Math.ceil(x/y));
}


function badWords (){
    let text = prompt('Введите текст (не вздумай вводить слово bad)');
    if (text.indexOf("bad") !== -1){
        alert ('There is bad words')
    } else alert ('OK')
}


function hello (){
    let name = prompt ("Ваше имя:");
    alert (`Привет, ${name}`);
}

function gender() {
    confirm('Если ты мужчина - нажми ОК!') ? alert ('Ты мужик!') : alert ('Вы женщина')
}


function calcFloor(){
    var floorNum = 5;
    var countFlat = 3;
    var ourFlat = prompt('У нас есть 5 этажный дом с 3 квартирами на этаже. Введите номер квартиры');
    let padik = Math.ceil(ourFlat / (floorNum * countFlat));
    let except = padik - 1;
    let ourFloor = Math.ceil((ourFlat - (floorNum * countFlat * except)) / countFlat);
    alert(`Ваш подьезд: ${padik}, Ваш этаж: ${ourFloor}`);
}



function numberOdd() {
    let ourNum = prompt('Input number');
    if (!Number(ourNum)) {
        alert('It isn\'t a number!!!!');
        numberOdd();
    } else alert((ourNum % 2 === 0 ) ? 'Число четное' : 'Число нечетное');
}

var arr = [{
    name: "Vasya",
    surname: "Petrov"
},{
    name: "Ivan",
    surname: "Pupkin"
}
];
console.log(arr);
arr.push('234');
arr[0].name = "Sigizmund";



function kNb(){
        var myHod = prompt('Введите Ваш вариант: Камень, Ножницы, Бумага', "");
        var compHod = Math.random();
        console.log (compHod);
        if (compHod < 0.3333){
            compHod = 'Камень';
            if (myHod === 'Камень'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. НИЧЬЯ!`)
            }
            if (myHod === 'Ножницы'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. Вы проиграли!`)
            }
            if (myHod === 'Бумага'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. Вы выиграли!`)
            }
        }
        if (compHod >= 0.3333 && compHod < 0.6666){
            compHod = 'Ножницы';
            if (myHod === 'Камень'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. Вы выиграли!`)
            }
            if (myHod === 'Ножницы'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. НИЧЬЯ!`)
            }
            if (myHod === 'Бумага'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. Вы проиграли!`)
            }
        }
        if (compHod >= 0.6666){
            compHod = 'Бумага';
            if (myHod === 'Камень'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. Вы проиграли!`)
            }
            if (myHod === 'Ножницы'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. Вы выиграли!`)
            }
            if (myHod === 'Бумага'){
                alert(`У Вас ${myHod}, у оппонента ${compHod}. НИЧЬЯ!`)
            }
        }
}