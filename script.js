// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("ingrese el segundo numero"));
// let operacion = prompt("Ingrese la operacion");

// function calculadora (primerNum, segundoNum, operacion){
//     switch (operacion) {
//         case "+":
//             return primerNum + segundoNum;
//             break;
//         case "-":
//             return primerNum - segundoNum;
//             break;
//         case "*":
//             return primerNum * segundoNum;
//             break;
//         case "/":
//             return primerNum / segundoNum;
//             break;
//         default:
//             return "0";
//             break;
//     }
// }
// let resultadoSuma = calculadora(numero1, numero2, "+");
// let resultadoResta = calculadora(numero1, numero2, "-");
// let resultadoMult = calculadora(numero1, numero2, "*");
// let resultadoDiv = calculadora(numero1, numero2, "/");


// if (operacion =="+") {
//     console.log(resultadoSuma);
//     alert(resultadoSuma);
// }else if (operacion =="-") {
//     console.log(resultadoResta);
//     alert(resultadoResta);
// }else if (operacion =="*") {
//     console.log(resultadoMult);
//     alert(resultadoMult);
// }else if (operacion =="/") {
//     console.log(resultadoDiv);
//     alert(resultadoDiv);
// }else {
//     console.log("No se indicó la operación");
//     alert("No se indicó la operación");
// }


//
///
////
/////
////// DESAFIO ENTREGABLE

const reservante = prompt("Ingrese el nombre de quién realiza la reserva");
console.log (reservante +" realizó la reserva");
let numMesas = parseInt(prompt("Ingrese el número de mesas a reservar (máx 10)"));
console.log (numMesas +"mesas");

//.....RESERVA PARA 1 MESA.....
if (numMesas == 1) {
    let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 4)"));
    console.log (numPersonas +"personas");
    alert("Reservar mesa para : "+ numPersonas +"personas");
    let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
    if (respuesta == ("SI" || "si" || "Si" || "sI")) {
        alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
    }else {
        alert("Cancelaste correctamente la reserva");
    }
//.....RESERVA PARA 2 MESAS.....    
}else if (numMesas == 2) {
    let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 8)"));
    console.log (numPersonas+"personas");
    alert("Reservar mesa para : "+ numPersonas +"personas");
    let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
    if (respuesta == ("SI" || "si" || "Si" || "sI")) {
        alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
    }else {
        alert("Cancelaste correctamente la reserva");
    }
//.....RESERVA PARA 3 MESAS.....    
}else if (numMesas == 3) {
    let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 12)"));
    console.log (numPersonas+"personas");
    alert("Reservar mesa para : "+ numPersonas +"personas");
    let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
    if (respuesta == ("SI" || "si" || "Si" || "sI")) {
        alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
    }else {
        alert("Cancelaste correctamente la reserva");
    }
}
//.....RESERVA PARA 4 MESAS.....    
else if (numMesas == 4) {
    let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 16)"));
    console.log (numPersonas+"personas");
    alert("Reservar mesa para : "+ numPersonas +"personas");
    let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse cancelar");
    if (respuesta == ("SI" || "si" || "Si" || "sI")) {
        alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
    }else {
        alert("Cancelaste correctamente la reserva");
    }
}
//.....RESERVA PARA 5 MESAS.....    
else if (numMesas == 5) {
    let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 20)"));
    console.log (numPersonas+"personas");
    alert("Reservar mesa para : "+ numPersonas +"personas");
    let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
    if (respuesta == ("SI" || "si" || "Si" || "sI")) {
        alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
    }else {
        alert("Cancelaste correctamente la reserva");
    }
} else if (numMesas > 5) {
    alert ("no alcanzan las mesas");
}