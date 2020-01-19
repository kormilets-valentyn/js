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

const table = document.querySelector("#table2");


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
            td.cellIndex.style.backgroundColor = 'orange';
        };
        col.onmouseout = function(){
            this.style.backgroundColor = '';
        };
    }
    table.appendChild(row);
}
const changeBg = (event, color) => {
    const target = event.target;
    if (target.tagName === 'TD') {
        target.style.background = color;
        //задаем фон родительскому элементу, т.е. строке, в которой находится ячейка
        target.parentNode.style.background = color;
        //получаем индекс ячейки в строке
        const index = event.target.cellIndex;
        //задаем фон всем ячейкам с таким же индексом
        const rows = document.querySelectorAll('tr');
        rows.forEach((row) => row.childNodes[index].style.background = color);
    }
};

table.onmouseover = (event) => changeBg(event, 'orange');
table.onmouseout = (event) => changeBg(event, '');