//Creamos nuestra primera escena
import Snake from "../gameobjects/Snake.js";
class Play extends Phaser.Scene {
    // Dentro usamos el constructor
    constructor() {
        super("Play");

    }

    // preload es el metodo donde cargamos los assets
    preload() {
        console.log("Escena Play");
        // Llamamos los assets 
        // x , y , nombre , 
        this.snake = new Snake(this);
    }
    create() {

        this.input.keyboard.on("keydown_RIGHT", () => {
            console.log("Derecha")
        });
        this.input.keyboard.on("keydown_LEFT", () => {
            console.log("Izquierda")
        });
        this.input.keyboard.on("keydown_UP", () => {
            console.log("Arriba")
        });
        this.input.keyboard.on("keydown_DOWN", () => {
            console.log("Abajo")
        });

    }



    update(time) {

        this.snake.update(time);
    }
}

export default Play;