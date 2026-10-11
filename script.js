let victoriasUsuario = 0;
let victoriasMaquina = 0;

while (victoriasUsuario < 3 && victoriasMaquina < 3) {

  let jugada = prompt("Elige: Piedra, Papel o Tijera");
  jugada = jugada.toLowerCase();

  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  console.log(`La máquina eligió: ${jugadaMaquina}`);

  if (jugada === jugadaMaquina) {
  console.log("Empate");
  alert(`Jugada de la máquina: ${jugadaMaquina}\n\n¡Empate en esta ronda!\nTú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
} else if (
  (jugadaMaquina === "piedra" && jugada === "tijera") ||
  (jugadaMaquina === "papel" && jugada === "piedra") ||
  (jugadaMaquina === "tijera" && jugada === "papel")
) {
  victoriasMaquina++;
  alert(`Jugada de la máquina: ${jugadaMaquina}\n\nLa máquina ganó esta ronda \nTú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
} else {
  victoriasUsuario++;
  alert(`Jugada de la máquina: ${jugadaMaquina}\n\n¡Ganaste esta ronda! \nTú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
}
}

let ganador = victoriasUsuario === 3 ? "¡Ganaste la partida 😊!" : "La máquina ganó la partida 😭";
console.log(ganador);
alert(ganador);