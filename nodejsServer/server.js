const express = require ("express");
const {Note} = require("./db/sequelize");
const app = express();
app.get ("/", function (req, res) {
    res.send("laladffadsasdsl");
});
const PORT = 8001;


app.use(express.json());

app.get("/notes", async (req, res) => {
    const notes = await Note.findAll();
    let tr = "<table border = 1>";
    tr += "<tr>";
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
    }
    tr += "</table>";
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

app.listen(PORT, () => {
    console.log("Hello ");
});