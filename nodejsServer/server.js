const express = require ("express");
const {Note} = require("./db/sequelize");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/register", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/html/register.html");
});
app.post("/register", urlencodedParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    await Note.create({
            'text': req.body.text
    });
    await res.status(201);
    await res.redirect("/notes")
});

app.get ("/", function (req, res) {
    res.send("laladffadsasdsl");
});
const PORT = 8001;

function aaa(){
    alert(aaa);
}

app.get("/notes", async (req, res) => {
    const notes = await Note.findAll();
    let tr =`<table border = 1><caption><H3>Привет из 90-х</H3></caption>`;
    tr+= "<td> <H3>" + "id" + "</H3></td>";
    tr+= "<td><H3>" + "text" + "</H3></td>";
    tr+= "<td><H3>" + "create" + "</H3></td>";
    tr+= "<td><H3>" + "update" + "</H3></td>";
    for (let i = 0; i< notes.length; i++){
        tr += "<tr>";
        tr += "<td>" + `<a href = http://valik.com:8001/notes/${notes[i].id}>` + notes[i].id + "</a></td>";
        tr += "<td>" + notes[i].text + "</td>";
        let date = String(notes[i].createdAt);
        tr += "<td>" + date.slice(0,24) + "</td>";
        let date2 = String(notes[i].updatedAt);
        tr += "<td>" + date2.slice(0,24) + "</td>";
        tr += `<td><button onclick="document.location='/delete/${notes[i].id}'">Delete</button></td>`;
    }
    tr += "</table>";
    tr += `<a href = http://valik.com:8001/register> Add new </a>`;
    res.status(200);
    res.send(tr)
});

app.get("/notes/:id", async (req, res) => {
    const notes = await Note.findAll();
    const note = notes.find (function (note) {
        return note.id === Number(req.params.id)
    });

    res.send(note);
});

app.post("/notes", async (req, res) => {
    await Note.create(req.body);
    res.status(201).send();
});

app.put("/notes/:id", async (req, res) => {
    await Note.update({
        text: req.body.text
    }, {
        where: {
            id : Number(req.params.id)
        }
    });
    res.status(201).send();
});

app.delete("/notes/:id", async (req, res) => {
        await Note.destroy({
            where: {
                id : Number(req.params.id)
            }
        });
        res.status(201).send();
});

app.get("/delete/:id", async (req, res) => {
    await Note.destroy({
        where: {
            id : Number(req.params.id)
        }
    });
    res.redirect("/notes")
});

app.listen(PORT, () => {
    console.log("Hello ");
});