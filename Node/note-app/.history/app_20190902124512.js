const validator = require("validator");

const getNotes = require("./notes.js");

const mensaje = getNotes();

const email = validator.isEmail("camilobaq@hotmail.com");
console.log(mensaje);