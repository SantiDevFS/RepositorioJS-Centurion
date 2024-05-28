function calcularPrecioTotal(precioBase, porcentajeImpuesto, porcentajeDescuento) {
// Verificar si los valores son válidos
if (precioBase < 0 || porcentajeImpuesto < 0 || porcentajeDescuento < 0) {
    return "Los valores ingresados no pueden ser negativos.";
}
if (porcentajeDescuento > 100) {
    return "El descuento no puede ser mayor al 100%.";
}

let montoDescuento = precioBase * (porcentajeDescuento / 100);

let precioConDescuento = precioBase - montoDescuento;

let montoImpuesto = precioConDescuento * (porcentajeImpuesto / 100);

let precioTotal = precioConDescuento + montoImpuesto
return precioTotal;
}

// Función principal para manejar la entrada del usuario y el bucle
function main() {
let continuar = true;

while (continuar) {

let precioBase = parseFloat(prompt("Ingrese el precio base del producto:"));
let porcentajeImpuesto = parseFloat(prompt("Ingrese el porcentaje de impuesto:"));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

if (isNaN(precioBase) || isNaN(porcentajeImpuesto) || isNaN(porcentajeDescuento)) {
    alert("Por favor, ingrese valores numéricos válidos.");
        continue; 
}


let resultado = calcularPrecioTotal(precioBase, porcentajeImpuesto, porcentajeDescuento);

//resultado
if (typeof resultado === "string") {
        alert(resultado); 
} else {
    alert(`El precio total del producto es: ${resultado.toFixed(2)}`);
}


continuar = confirm("¿Desea calcular el precio de otro producto?");
}

alert("Gracias por usar el programa.");
}

// Ejecutar la función principal
main();