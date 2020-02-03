elem = document.querySelector("#elem");
elem.onclick = function () {
this.remove();


const promise = new Promise(resolve => {
        resolve (fetch("https://swapi.co/api/people/1/"))
}

);
promise
    .then(result=>
        result.json()
    )
    .then(function luke(luke) {
            // console.log(luke);
            let table = document.querySelector("#tab");
            for (let key in luke){
                if (luke[key].indexOf('https://swapi.co/api/') == - 1){
                    const row = document.createElement('tr');
                    const col1 = document.createElement('td');
                    const col2 = document.createElement('td');
                    // console.log(key);
                    col1.textContent = key;
                    col2.textContent = luke[key];
                    row.appendChild(col1);
                    row.appendChild(col2);
                    table.appendChild(row);
                } else {
                    const row = document.createElement('tr');
                    const col1 = document.createElement('td');
                    const col2 = document.createElement('button');
                    col1.textContent = key;
                    col2.textContent = 'Parse';
                    row.appendChild(col1);
                    row.appendChild(col2);
                    table.appendChild(row);
                    col2.onclick = function (){
                        console.log(luke[key]);
                        this.remove();
                        fetch(luke[key])
                            .then(result=>
                            result.json()
                        )
                            .then(luke2 => {
                                console.log(luke2);
                                for (let newKey in luke2){
                                    console.log(newKey, luke2[newKey])
                                    const newRow = document.createElement('tr');
                                    const col3 = document.createElement('td');
                                    const col4 = document.createElement('td');
                                    col3.textContent = newKey;
                                    col4.textContent = luke2[newKey];
                                    newRow.appendChild(col3);
                                    newRow.appendChild(col4);
                                    row.appendChild(newRow);
                                }

                            })
                    }
                }
            }
        return table;
    }
    );

}