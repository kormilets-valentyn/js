function gender() {
    confirm('Если ты мужчина - нажми ОК!') ? alert ('Ты мужик!') : alert ('Вы женщина')
}
gender();

function calcFloor(){
    var floorNum = 5;
    var countFlat = 3;
    var ourFlat = prompt('У нас есть 5 этажный дом с 3 квартирами на этаже. Введите номер квартиры');
    let padik = Math.ceil(ourFlat / (floorNum * countFlat));
    let except = padik - 1;
    let ourFloor = Math.ceil((ourFlat - (floorNum * countFlat * except)) / countFlat);
    alert(`Ваш подьезд: ${padik}, Ваш этаж: ${ourFloor}`);
}
calcFloor();


function numberOdd() {
    let ourNum = prompt('Input number');
    if (!Number(ourNum)) {
        alert('It isn\'t a number!!!!');
        numberOdd();
    } else alert((ourNum % 2 === 0 ) ? 'Число четное' : 'Число нечетное');
}
numberOdd();