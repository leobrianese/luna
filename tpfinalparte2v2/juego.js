class Juego {
  constructor() {
    this.temporizador = 0;
    this.puntaje = 0;
    this.jugador = new Jugador(mouseX, 400);
    this.cantIngredientes = 5;

    this.ingredientes = [];
    for (let i = 0; i < this.cantIngredientes; i++) {
      this.ingredientes.push(new Ingredientes());
    }
  }

  actualizar() {
    this.jugador.actualizar();
    for (let i = 0; i < this.ingredientes.length; i++) {
      this.ingredientes[i].actualizar(this.jugador);
    }
    this.mostrarPuntaje();
  }

  mostrarPuntaje() {
    fill(0); // Asegúrate de que el texto sea visible
    textSize(16);
    text("PUNTOS: " + this.puntaje, 10, 40);
  }
}
