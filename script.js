document.addEventListener("DOMContentLoaded", function () {
    var cantidadTicketsInput = document.getElementById("amount");
    var totalInput = document.getElementById("total");
    var botonResumen = document.getElementById("summary");

    botonResumen.addEventListener("click", function () {
        
        var cantidadTickets = parseInt(cantidadTicketsInput.value);
        if (cantidadTickets > 0 &&  !isNaN(cantidadTickets))
        {
            var precio = 200; // Falta aplicar descuentos
            var total = cantidadTickets * precio;
            totalInput.value = total;
        } 
        else {
            alert("Por favor, ingresa una cantidad correcta.");
        }
    });
});

//FALTA: Boton BORRAR
//FALTA: Aplicar Descuentos