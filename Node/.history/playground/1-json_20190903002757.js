const book = {
    titulo: "Ego es el enemigo",
    autor: "Camilo Baquero"
};
// muentra la info guardadad en Json
const bookjson = JSON.stringify(book);
console.log(bookjson);
// Accede a la info guardada en este caso autor
const parsedData = JSON.parse(bookjson);
console.log(parsedData.autor);