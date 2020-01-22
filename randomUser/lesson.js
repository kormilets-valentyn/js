const pr = new Promise((resolve, reject) => {
    resolve(fetch('https://randomuser.me/api/?results=8'));
}
);
console.log(pr
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        return data.results;
    })
    .then(users => {
        const a = document.querySelector('#table');
        let i = 1;

        users.forEach(user => {
            const row = document.createElement('tr');
            const col5 = document.createElement('td');
            const col = document.createElement('td');
            const col2 = document.createElement('td');
            const col3 = document.createElement('td');
            const col4 = document.createElement('td');
            const img =document.createElement("IMG");
            img.src = user.picture.medium;
            col.textContent = user.name.first + ' ' + user.name.last;
            col2.textContent = user.email;
            const str = user.dob.date;
            col3.textContent = str.slice(0,10);
            col4.textContent = user.cell;
            col5.textContent = i++;
            row.appendChild(col5);
            row.appendChild(col);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(img);
            row.appendChild(col4);
            a.appendChild(row);
        })
    })
    .catch(e => {
        console.log(e);
    })
);