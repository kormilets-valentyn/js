function sizeCalc(){
    let sizeUkr = [40,42,44,46,48,50,52,54];
    let sizeUSA = [6,8,10,12,14,16,18,20];
    let enter = prompt ('Введите наш размер (40-54 (четные)):');
    let check = sizeUkr.indexOf(Number(enter));
    switch (check){
        case 0: alert (`Американский размер: ${sizeUSA[0]}`);
            break;
        case 1: alert (`Американский размер: ${sizeUSA[1]}`);
            break;
        case 2: alert (`Американский размер: ${sizeUSA[2]}`);
            break;
        case 3: alert (`Американский размер: ${sizeUSA[3]}`);
            break;
        case 4: alert (`Американский размер: ${sizeUSA[4]}`);
            break;
        case 5: alert (`Американский размер: ${sizeUSA[5]}`);
            break;
        case 6: alert (`Американский размер: ${sizeUSA[6]}`);
            break;
        case 7: alert (`Американский размер: ${sizeUSA[7]}`);
            break;
        default: alert('Размер не найден');
    }
}


function color(){
    const color = prompt("Введите цвет","");
    if (color === "red" || color === "black"){
        document.write("<div style='background-color: red;'>красный</div>");
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    } else if (color === "blue" || color === "green"){
        document.write("<div style='background-color: blue;'>синий</div>");
        document.write("<div style='background-color: green;'>зеленый</div>");
    } else document.write("<div style='background-color: gray;'>Я не понял</div>");
}


function age(){
    let age = prompt('Сколько Вам лет исполняется или уже исполнилось в этом году: ');
    const date = new Date();
    if (age === " "){
        age = "";
    }
    if (age === null || age === '' || isNaN(age)){
        alert ('Ошибка!!!');
    } else
    alert(`Год Вашего рождения: ${date.getFullYear() - age}`);
}


function hobotRobot(){
    let shop = confirm('Shopping???');
    shop ? alert('OK!!!'): alert('Ты бяка');
}


function triplePrompt(){
    let surname = prompt ('Фамилия', 'Иванов');
    if (surname === null){
        surname = 'Иванов';
    }
    let name = prompt ('Имя', 'Иван');
    if (name === null){
        name = 'Иван';
    }
    let patronymic = prompt ('Отчество', 'Иванович');
    if (patronymic === null){
        patronymic = 'Иванович';
    }
    alert(`ФИО: ${surname} ${name} ${patronymic}`);
}

function authorization() {
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    let login = prompt("Your login:");
    if (login === credentials.login) {
        let pass = prompt("Your password:");
        if (pass === credentials.password) {
            alert('Форма регистрации готова))');
        } else {
            alert('Pass not right');
            authorization();
        }
    } else {
        alert(`Login not right`);
        authorization();
    }

}

function currencyExchange(){
    var ratios1 = {
        usd: 24.5,
        eur: 26.5
    };
    var ratios2 = {
        usd: 24,
        eur: 26
    };
    let twoRates = confirm ('Вас интересует покупка валюты?');
    if(twoRates){
        let curr = prompt ('Какую валюту покупаем? (usd или eur)');
        let currResult = curr.toLowerCase();
        switch (currResult){
            case "usd": let cash1 = prompt('Сколько гривны меняем?');
                let res1 = cash1 / ratios1.usd;
                alert (`Вы получите ${res1.toFixed(2)} USD`);
                break;
            case "eur": let cash2 = prompt('Сколько гривны меняем?');
                let res2 = cash2 / ratios1.eur;
                alert (`Вы получите ${res2.toFixed(2)} EUR`);
                break;
            default: alert('Такой валюты нет');
        }
    } else {
        let curr = prompt ('Какую валюту продаем? (usd или eur)');
        let currResult = curr.toLowerCase();
        switch (currResult){
            case "usd": let cash1 = prompt('Сколько долларов меняем?');
                let res1 = cash1 * ratios2.usd;
                alert (`Вы получите ${res1.toFixed(2)} грн`);
                break;
            case "eur": let cash2 = prompt('Сколько евро меняем?');
                let res2 = cash2 * ratios2.eur;
                alert (`Вы получите ${res2.toFixed(2)} грн`);
                break;
            default: alert('Такой валюты нет');
        }
    }
}
currencyExchange();