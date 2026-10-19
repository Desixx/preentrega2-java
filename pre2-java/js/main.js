let cliente = prompt("Ingresá tu nombre:");

while (!cliente) {
    cliente = prompt("Por favor, ingresá un nombre válido:");
}

alert("Hola " + cliente + "! Vamos a cotizar tus envíos.");

let totalEnvio = 0;
let cantidadPaquetes = 0;
let continuar = true;

while (continuar) {
    let entrada = prompt("Ingresá el peso del paquete en KG (o escribí 'FIN' para terminar):");

    if (entrada === null || entrada.toUpperCase() === "FIN") {
        continuar = false;
    } else {
        let peso = parseFloat(entrada);

        if (isNaN(peso) || peso <= 0) {
            alert("Peso no válido, probá de nuevo.");
        } else {
            cantidadPaquetes++;

            if (peso <= 5) {
                totalEnvio += 800;
                console.log("Paquete " + cantidadPaquetes + ": " + peso + "kg -> $800 (Tarifa chica)");
            } else if (peso <= 20) {
                totalEnvio += 1500;
                console.log("Paquete " + cantidadPaquetes + ": " + peso + "kg -> $1500 (Tarifa mediana)");
            } else {
                totalEnvio += 2800;
                console.log("Paquete " + cantidadPaquetes + ": " + peso + "kg -> $2800 (Tarifa pesada)");
            }
        }
    }
}

if (cantidadPaquetes > 0) {
    let resumen = "Resumen para " + cliente + ":\n" +
        "- Total de paquetes: " + cantidadPaquetes + "\n" +
        "- Costo total de envío: $" + totalEnvio;

    alert(resumen);
    console.log("--------------------------------");
    console.log("TOTAL A COBRAR: $" + totalEnvio);
} else {
    alert("No ingresaste ningún paquete para cotizar.");
    console.log("Operación cancelada o sin datos.");
}