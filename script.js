// Define los ramos con sus requisitos (identificados por clave)
const ramos = {
  "CALCULO_I": { nombre: "Cálculo I", requisitos: [] },
  "CALCULO_II": { nombre: "Cálculo II", requisitos: ["CALCULO_I"] },
  "ALGEBRA": { nombre: "Álgebra", requisitos: [] },
  "ALGEBRA_LINEAL": { nombre: "Álgebra Lineal", requisitos: ["ALGEBRA"] },
  "EJEMPLO": { nombre: "Ejemplo", requisitos: ["CALCULO_II", "ALGEBRA_LINEAL"] }
  // Agrega todos los demás aquí con su clave y requisitos
};

const container = document.getElementById("malla-container");

function crearRamos() {
  for (const clave in ramos) {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = clave;
    div.innerText = ramos[clave].nombre;
    div.onclick = () => aprobarRamo(clave);
    container.appendChild(div);
  }
}

function aprobarRamo(clave) {
  const ramo = document.getElementById(clave);
  if (ramos[clave].requisitos.every(req => document.getElementById(req).classList.contains("aprobado"))) {
    ramo.classList.toggle("aprobado");
  } else {
    alert("Primero debes aprobar los prerrequisitos.");
  }
}

crearRamos();

