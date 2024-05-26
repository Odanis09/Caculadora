const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const historialLista = document.getElementById("historial-lista");
const historialContainer = document.querySelector(".historial-container");
const cerrarHistorial = document.getElementById("cerrar-historial");
const historialBoton = document.getElementById("historial");

let historial = [];

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            actualizarHistorial("Borrar historial");
            return;
        }

        if (boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            actualizarHistorial("Borrar último dígito");
            return;
        }

        if(boton.id === "igual"){
            try{
                const resultado = eval(pantalla.textContent);
                pantalla.textContent = resultado;
                actualizarHistorial(`${pantalla.textContent}`);
            } catch {
                pantalla.textContent = "Error!";
                actualizarHistorial("Error");
            }
            return;
        }

        if (boton.id === "historial") {
            mostrarHistorial();
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
        actualizarHistorial(botonApretado);
    });
});

function actualizarHistorial(entrada) {
    historial.push(entrada);
    historialLista.innerHTML = "";
    historial.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historialLista.appendChild(li);
    });
}

function mostrarHistorial() {
    historialContainer.style.display = "flex";
}

cerrarHistorial.addEventListener("click", () => {
    historialContainer.style.display = "none";
});
