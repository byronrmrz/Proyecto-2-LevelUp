const contador = document.getElementById("contar");
const suma = document.getElementById("incr");
const resta = document.getElementById("decr");
const reset = document.getElementById("reset");
let numero = 0;
const colorContador = function() {
    if(numero == 0) {
        contador.style.color = "white";
    } else if (numero > 0) {
        contador.style.color = "#31E829";
    } else {
        contador.style.color = "red";
    }
}
suma.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
    colorContador(); 
});

resta.addEventListener("click", ()=>{    
    numero--;
    contador.innerHTML = numero; 
    colorContador();
});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
    colorContador();
});
