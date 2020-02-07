const Sequelize = require("sequelize");
const NotesModel = require("../models/Note");
const sequelize = new Sequelize("test", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

const Note = NotesModel(sequelize, Sequelize);
sequelize.sync().then(()=>{
    console.log("Connect to DB");
});

module.exports = {
    Note
};