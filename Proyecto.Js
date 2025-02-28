// Variables de los recargos
var precio_base = 2000;

var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;

var casado_18 = 0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;

var hijos_recargo = 0.2;
var propiedad_recargo = 0.35; // 35% por propiedad
var ingreso_recargo = 0.05; // 5% del salario

while (true) {
    var nombre = prompt("Ingrese su nombre (o escriba 'Salir' para terminar):");
    if (nombre.toUpperCase() === "SALIR") break;

    var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números:"));
    if (edad < 18) {
        alert("Lo sentimos, solo aseguramos a personas mayores de edad.");
        continue;
    }

    var casado = prompt("¿Está casado actualmente? (si/no)").toUpperCase();
    var edad_conyuge = 0;
    if (casado === "SI") {
        edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
    }

    var hijos = prompt("¿Tiene hijos o hijas? (si/no)").toUpperCase();
    var cantidad_hijos = hijos === "SI" ? parseInt(prompt("¿Cuántos hijos tiene?")) : 0;
    
    var propiedades = parseInt(prompt("¿Cuántas propiedades posee?"));
    var ingresos = parseFloat(prompt("¿Cuál es su ingreso mensual?"));
    
    // Cálculo de recargos
    var recargo_total = 0;
    var recargo_asegurado = (edad >= 18 && edad < 25) ? precio_base * edad_18 :
                             (edad >= 25 && edad < 50) ? precio_base * edad_25 :
                             (edad >= 50) ? precio_base * edad_50 : 0;
    recargo_total += recargo_asegurado;

    var recargo_conyuge = casado === "SI" ? 
                          ((edad_conyuge >= 18 && edad_conyuge < 25) ? precio_base * casado_18 :
                          (edad_conyuge >= 25 && edad_conyuge < 50) ? precio_base * casado_25 :
                          (edad_conyuge >= 50) ? precio_base * casado_50 : 0) : 0;
    recargo_total += recargo_conyuge;

    var recargo_hijos = cantidad_hijos * (precio_base * hijos_recargo);
    recargo_total += recargo_hijos;
    
    var recargo_propiedades = propiedades * (precio_base * propiedad_recargo);
    recargo_total += recargo_propiedades;
    
    var recargo_ingresos = ingresos * ingreso_recargo;
    recargo_total += recargo_ingresos;
    
    var precio_final = precio_base + recargo_total;

    // Resumen
    alert("Reumen de cotización para " + nombre + ":\n" +
          "Recargo por edad: Q." + recargo_asegurado + "\n" +
          "Recargo por cónyuge: Q." + recargo_conyuge + "\n" +
          "Recargo por hijos: Q." + recargo_hijos + "\n" +
          "Recargo por propiedades: Q." + recargo_propiedades + "\n" +
          "Recargo por ingresos: Q." + recargo_ingresos + "\n" +
          "Recargo total: Q." + recargo_total + "\n" +
          "Precio final: Q." + precio_final);
}
