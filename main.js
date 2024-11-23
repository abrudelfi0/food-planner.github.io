document.querySelector("#ingresar").addEventListener("click", function(){
    let desayuno = desayuno_valor.value;
    let almuerzo = almuerzo_valor.value;
    let merienda = merienda_valor.value;
    let cena = cena_valor.value;

    console.log(desayuno, almuerzo, merienda, cena);

if(desayuno == "" || almuerzo == "" || merienda == "" || cena == ""){
    alert("Por favor debes ingresar todos los datos solicitados");
} else{
    
     const nuevo_dia = document.createElement("div");
    nuevo_dia.classList.add("dia");

    nuevo_dia.innerHTML = `
    <div><i class="bi bi-trash3-fill" data-accion="eliminar"></i></div>
    <p class="texto-alimento"><strong>Desayuno:</strong> ${desayuno.toUpperCase()}</p>
    <p class="texto-alimento"><strong>Almuerzo:</strong> ${almuerzo.toUpperCase()}</p>
    <p class="texto-alimento"><strong>Merienda:</strong> ${merienda.toUpperCase()}</p>
    <p class="texto-alimento"><strong>Cena:</strong> ${cena.toUpperCase()}</p>
    `
   
    document.getElementById("contenedor-alimentos").appendChild(nuevo_dia);

    desayuno_valor.value = "";
    almuerzo_valor.value = "";
    merienda_valor.value = "";
    cena_valor.value = "";

let historial = document.getElementById("contenedor-alimentos").innerHTML;

localStorage.setItem("comidas", historial);
}
});


document.getElementById("eliminar-historial").addEventListener("click", function (){
    let rta = confirm ("¿Estás seguro de borrar todo tu historial?");

    if(rta){
        document.getElementById("contenedor-alimentos").innerHTML = "";
        localStorage.clear();
    }
});


document.getElementById("contenedor-alimentos").addEventListener("click", function (e){
    if (e.target.dataset.accion == "eliminar"){
        let rta = confirm("¿Quieres eliminar este día?");

        if (rta){
            e.target.parentElement.parentElement.remove();

            let historial = document.getElementById("contenedor-alimentos").innerHTML;
            localStorage.setItem("comidas", historial);
        }
    }
});


document.addEventListener("DOMContentLoaded", function (){
    let guardados = localStorage.getItem("comidas");

        if(guardados != null){
            document.getElementById("contenedor-alimentos").innerHTML = guardados;
        }
    });


document.getElementById("info-alumna").addEventListener("hide.bs.collapse", function () {
    document.getElementById("informacion").textContent = "Ver informacion";
});


document.getElementById("info-alumna").addEventListener("show.bs.collapse", function () {
    document.getElementById("informacion").textContent = "Ocultar";
});

