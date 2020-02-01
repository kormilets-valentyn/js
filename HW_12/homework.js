// JSON. Загрузить используя XMLHttpRequest и распарсить как ассоциативный массив.
//     Организовать выбор страны и города, используя два select и ассоциативный массив из примера выше.
//     При выборе страны в списке городов должны быть только города из выбранной страны.

let request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json', false);
request.send();
let result = {};
    if (request.status == 200){
        result = JSON.parse(request.responseText);
    }
    else {
        alert('shit happens: ' +  request.status + ', ' + request.statusText )
}

    const country2 = [];
    for (let key in result) {

        country2.push(key);
        country2.sort();
    }
    console.log(country2);

    let a = document.querySelector('#select1');
    let b = document.querySelector('#select2');

    const sel1 = document.createElement('option');
    sel1.textContent = "Country...";
    a.appendChild(sel1);
    for (let key in country2){
        const sel2 = document.createElement('option');
        sel2.textContent = country2[key];
        a.appendChild(sel2);
    }


    function cityFunc() {
        b.innerHTML = '';
        const selectCity = document.createElement('option');
        selectCity.textContent = "City";
        b.appendChild(selectCity);
        let value = a.value;
        let country = result[value];
        for (let key in country) {
            const select2 = document.createElement('option');
            select2.textContent = country[key];
            b.appendChild(select2);
        }

    }
    function resultFunc() {
        console.log(b.value);
        let span = document.querySelector('#span');
        span.innerHTML = `You select country: <H2>${a.value}</H2> city: <H3>${b.value}</H3>`;
    }
