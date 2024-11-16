class Ingredientes {
  constructor() {
    this.posX = random(width);
    this.posY = random(-300, -900);
    this.velCaida = 3;
    this.tipo = int(random(0, 3));
    this.tamImg = 50; // Define el tamaño de la imagen del ingrediente

    this.imgIngredientes = imgIngredientes[this.tipo];
  }

  actualizar(jugador) {
    this.mostrar();
    this.caer();
    this.reiniciarUbi();
    this.colisionJugador(jugador.posX, jugador.posY, jugador.tamImg);
  }

  mostrar() {
    push();
    translate(this.posX, this.posY);
    image(this.imgIngredientes, 0, 0, this.tamImg, this.tamImg);
    pop();
  }

  caer() {
    this.posY += this.velCaida;
  }

  reiniciarUbi() {
    if (this.posY > height) {
      this.posX = random(width);
      this.posY = random(-300, -900);
    }
  }

  colisionJugador(xJugador, yJugador, tamImgJugador) {
    // Verifica si el ingrediente colisiona con el jugador
    if (dist(this.posX, this.posY, xJugador, yJugador) < (this.tamImg / 2 + tamImgJugador / 2)) {
      this.posX = random(width); // Reinicia la posición en X
      this.posY = random(-300, -900); // Reinicia la posición en Y
      juego.puntaje += 1;  // Incrementa el puntaje del juego
    }
  }
}
