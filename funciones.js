function creditos() {
  Empieza = 16;
}
function mousePressed() {

  if (Empieza === 0 && mouseX > 218 && mouseX < 408 && mouseY > 14 && mouseY < 84) {
    if (!reproduciendo) {
      sonido.play();
      reproduciendo = true; 
    }
    Empieza = 1;
  }

  // Pantalla "a1"
  else if (Empieza === 1 && mouseX > 260 && mouseX < 347 && mouseY > 440 && mouseY < 468) {
    Empieza = 2; // decision aceptar o rechazar
  }

  // Pantalla "a2" - aceptar
  else if (Empieza === 2 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80) {
    Empieza = 3; // Cambia a "a3.jpg"
  }

  // Pantalla "a2" - rechazar
  else if (Empieza === 2 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80) {
    Empieza = 6; // decision elegir portal
  }

  // Pantalla "a3" - ayudar
  else if (Empieza === 3 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80) {
    Empieza = 5; // final ayudar
  }
  // Pantalla "a3" - traicionar
  else if (Empieza === 3 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80) {

    Empieza = 4; // mata a todos
  } else if (Empieza === 4 && mouseX >255 && mouseX <356 && mouseY >20 && mouseY < 50) {
    Empieza = 6;
  } else if (Empieza === 6 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 85 ) {
    Empieza = 7 ;
  } else if (Empieza === 6 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 85 ) {
    Empieza = 9 ;
  } else if (Empieza === 9 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 8; //final realidad falsa
  } else if (Empieza === 9 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 10 ;
  } else if (Empieza === 10 && mouseX > 265 && mouseX < 356 && mouseY > 20 && mouseY < 50 ) {
    Empieza = 11 ;
  } else if (Empieza === 11 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 12 ;
  } else if (Empieza === 11 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 14 ;
  } else if (Empieza === 12 && mouseX > 255 && mouseX < 356 && mouseY > 20 && mouseY < 52 ) {
    Empieza = 13 ; //final victoria
  } else if (Empieza === 14 && mouseX > 255 && mouseX < 356 && mouseY > 20 && mouseY < 52 ) {
    Empieza = 15 ; //final derrota
  }



  //pantallas finales
  else if (Empieza === 16 && mouseX > 275 && mouseX < 375 && mouseY > 360 && mouseY < 390 ) { //creditos
    Empieza = 0;
  } else if (Empieza === 5 && mouseX > 505  && mouseX < 633  && mouseY > 280 && mouseY < 350 ) {  // final ayudar
    creditos();
  } else if (Empieza === 7 && mouseX > 240 && mouseX < 370 && mouseY > 15 && mouseY < 75 ) { // final casa
    creditos() ;
  } else if (Empieza === 8 && mouseX > 240 && mouseX < 370 && mouseY > 15 && mouseY < 75 ) { // final realidad falsa
    creditos() ;
  } else if (Empieza === 13 && mouseX > 240 && mouseX < 368 && mouseY > 15 && mouseY < 75 ) { //final victoria
    creditos();
  } else if (Empieza === 15 && mouseX > 240 && mouseX < 368 && mouseY > 15 && mouseY < 75 ) { //final derrota
    creditos();
  }
}
