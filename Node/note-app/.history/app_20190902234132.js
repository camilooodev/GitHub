const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notas = require("./notes.js");

/// Cambiar version
yargs.version("1.2.0");
// Creando comando para agregar nota
yargs.command({
    command: "agregar",
    describe: "Agregar nota",
    handler: function() {
        console.log("Agregando Nota");
    }
});
// Creando comando para quitar nota
yargs.command({
    command: "quitar",
    describe: "Quitar Nota",
    handler: function() {
        console.log("Quitando nota");
    }
});
// Creando comando para lista nota
yargs.command({
    command: "lista",
    describe: "Muestra lista de Notas",
    handler: function() {
        console.log("Agregando Nota");
    }
});
// Creando comando para leer nota
yargs.command({
    command: "leer",
    describe: "Abre la nota",
    handler: function() {
        console.log("Quitando nota");
    }
});

console.log(yargs.argv);