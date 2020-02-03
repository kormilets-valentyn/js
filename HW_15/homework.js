const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));
let knopka= document.querySelector('#knopka');
let div1= document.querySelector('#div1');
let div2= document.querySelector('#div2');
let div3= document.querySelector('#div3');


async function trafficLight(){
        console.log('Green');
        const row = document.createElement('tr');
        const row2 = document.createElement('tr');
        const col = document.createElement('td');
        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        const col4 = document.createElement('td');
        let green = document.createElement('button');
        let yellow = document.createElement('button');
        let red = document.createElement('button');
        let red2 = document.createElement('button');
        let green2 = document.createElement('button');
        green.style.backgroundColor = 'green';
        red2.style.backgroundColor = 'red';
        col.appendChild(yellow);
        col2.appendChild(red2);
        row.appendChild(col);
        row.appendChild(col2);
        div1.appendChild(red);
        div2.appendChild(row);
        col3.appendChild(green);
        col4.appendChild(green2);
        row2.appendChild(col3);
        row2.appendChild(col4);
        div3.appendChild(row2);
        await knopka.addEventListener("click", async function trafficLights2(){
                knopka.disabled = true;
                console.log("Peshehod nazal");
                await delay(500);
                green.style.backgroundColor = '';
                await delay(900);
                green.style.backgroundColor = 'green';
                await delay(900)
                green.style.backgroundColor = '';
                await delay(900)
                green.style.backgroundColor = 'green';
                await delay(900)
                green.style.backgroundColor = '';
                await delay(900)
                green.style.backgroundColor = 'green';
                await delay(900);
                console.log('Yellow');
                green.style.backgroundColor = '';
                yellow.style.backgroundColor = 'yellow';
                await delay (1000);
                green2.style.backgroundColor = 'green';
                yellow.style.backgroundColor = '';
                red.style.backgroundColor = "red";
                red2.style.backgroundColor = "";
                await delay (5000);
                green2.style.backgroundColor = "";
                await delay (900);
                green2.style.backgroundColor = 'green';
                await delay (900);
                green2.style.backgroundColor = '';
                await delay (900);
                green2.style.backgroundColor = 'green';
                await delay (900);
                green2.style.backgroundColor = '';
                await delay (900);
                green2.style.backgroundColor = 'green';
                await delay (900);
                red2.style.backgroundColor = "red";
                green2.style.backgroundColor = '';
                await delay (500);
                red.style.backgroundColor = "";
                yellow.style.backgroundColor = 'yellow';
                await delay (900);
                green.style.backgroundColor = "green";
                yellow.style.backgroundColor = '';
                await delay (2000);
                knopka.disabled = false;
    });
}
trafficLight();