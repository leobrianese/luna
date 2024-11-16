
let jugador;
let imgIngredientes = [];
let juego;

function setup() {
  createCanvas(640, 480);
  jugadorImg = loadImage("data/jugador.jpg");
  fondo = loadImage("data/fondomc.png");

  for (let i = 0; i < 3; i++) {
    imgIngredientes[i] = loadImage("data/ingrediente_" + i + ".png");
  }

  juego = new Juego();
}

function draw() {
  background(250);
  image(fondo, 0, 0, 640, 480);
  juego.actualizar();
}
