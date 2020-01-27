let arr1 = {
    name: "Vasja",
    surname: "Pupkin",
    "age": undefined
};
let arr2 = {
    name: "Ivan",
    "age": 35,
    sex : "male"
};
let arr3 = {
    name: "George",
    surname: "Jacobs",
    fathername: "Petrovich",
    sex : "male"
};
if ("lalala" in arr1){
    console.log("lalala найдено")
}else {
    console.log("lalala не найдено")
}
for (let key in arr1){
    if (key in arr1){
        console.log (key + ' ' + arr1[key]);
    }

}
console.log(typeof (arr1.surname));

//Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])

    let person = [];
    person.push(arr1, arr2, arr3, ({name:   "Arnold", age: 20}));
    for (let i = 0; i <= person.length -1; i++){
        console.log(person[i]);
    }


//Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.
function lalala(){
    for (let i = 0; i <= person.length -1; i++){
        if (typeof person[i].surname === "undefined"){
            person[i].surname = "Гадя Петрович";
        }
        console.log(person[i].name + ' ' + person[i].surname);
    }
}

//Сделайте цикл, который выводит весь массив persons, но только значения всех полей из объектов.
// Используйте вложенный цикл

function loopOfLoopOfValues(){
    let a = document.querySelector('#submit');
    for (let i = 0; i <= person.length -1; i++){

        for (let key in person[i]){
            console.log (person[i][key]);
            let b = document.write(person[i][key] + '<br/>');
            let aa = document.createElement('tr');
            aa.textContent = person[i][key] + '';
            a.appendChild(aa);
        }
    }
}
loopOfLoopOfValues();

//Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.
function fullName() {
    for (let i = 0; i < person.length; i++) {
        if (typeof person[i].name !== "undefined" && typeof person[i].surname !== "undefined") {
            person[i].FIO = person[i].name + ' ' + person[i].surname;
        }
    }
    console.log(person);
}
fullName();

//Создайте JSON-строку из persons
//Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons
function json(){
    let json = JSON.stringify(person);
    console.log(json);
    let array = JSON.parse(json);
    person.push(array[0]);
    console.log(person);
}
// json();

function html(){
    let a= document.querySelector('#table2');
    const row = document.createElement('tr');
    const col = document.createElement('td');
    const col2 = document.createElement('td');
    col.textContent = 'Name';
    col2.textContent = 'Surname';
    row.appendChild(col);
    row.appendChild(col2);
    a.appendChild(row);
    person.forEach(man => {
        const row = document.createElement('tr');
        const col = document.createElement('td');
        const col2 = document.createElement('td');
        col.textContent = 'Name';
        col.textContent = man.name;
        if (man.surname){
            col2.textContent = man.surname;
        } else {
            col2.textContent = 'Призвище'
        }
        row.appendChild(col);
        row.appendChild(col2);
        a.appendChild(row);
    })
}
html();
function html2(){
    var str = "<table border='1'>";
    for (let i = 0; i < person.length; i++) {
        for (const key in person[i]) {
            console.log (person[i][key]);
            str += `<tr><td>${person[i][key]}</td></tr>`

        }
    }
    str += "</table>"

    console.log(str)
    document.write(str)

}
html2();

function test (){
    let a= document.querySelector('#table2');
    person.forEach(user =>{
        const row = document.createElement('tr');
        for (key in user){
            const col = document.createElement('td');
            col.textContent = key + ': ' + user[key];
            row.appendChild(col);
        }
        a.appendChild(row)
    });
}
test();