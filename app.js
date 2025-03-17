// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const nombre = amigoInput.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  nombres.push(nombre);
  actualizarListaAmigos();
  amigoInput.value = ""; // Limpiar el input
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista

  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  });

}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert("Agrega amigos antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const amigoSecreto = nombres[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar el resultado anterior.

  const li = document.createElement("li");
  li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}