
//
///LA IDEA DEL DESAFIO ES CREAR UN SISTEMA QUE PUEDA CREAR RESERVAS EN LAS CUALES CREANDO PERSONAS CON CLASES VA A PONER LOS DATOS DE CADA PERSONA INGRESADA
////TAMBIEN LA IDEA ES PODER HACER UN CARRITO 
/////
////// DESAFIO ENTREGABLE

// const reservante = prompt("Ingrese el nombre de quién realiza la reserva");
// console.log (reservante +" realizó la reserva");
// let numMesas = parseInt(prompt("Ingrese el número de mesas a reservar (máx 10)"));
// console.log (numMesas +"mesas");

// //.....RESERVA PARA 1 MESA.....
// if (numMesas == 1) {
//     let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 4)"));
//     console.log (numPersonas +"personas");
//     alert("Reservar mesa para : "+ numPersonas +"personas");
//     let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
//     if (respuesta == ("SI" || "si" || "Si" || "sI")) {
//         alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
//     }else {
//         alert("Cancelaste correctamente la reserva");
//     }
// //.....RESERVA PARA 2 MESAS.....    
// }else if (numMesas == 2) {
//     let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 8)"));
//     console.log (numPersonas+"personas");
//     alert("Reservar mesa para : "+ numPersonas +"personas");
//     let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
//     if (respuesta == ("SI" || "si" || "Si" || "sI")) {
//         alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
//     }else {
//         alert("Cancelaste correctamente la reserva");
//     }
// //.....RESERVA PARA 3 MESAS.....    
// }else if (numMesas == 3) {
//     let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 12)"));
//     console.log (numPersonas+"personas");
//     alert("Reservar mesa para : "+ numPersonas +"personas");
//     let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
//     if (respuesta == ("SI" || "si" || "Si" || "sI")) {
//         alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
//     }else {
//         alert("Cancelaste correctamente la reserva");
//     }
// }
// //.....RESERVA PARA 4 MESAS.....    
// else if (numMesas == 4) {
//     let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 16)"));
//     console.log (numPersonas+"personas");
//     alert("Reservar mesa para : "+ numPersonas +"personas");
//     let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse cancelar");
//     if (respuesta == ("SI" || "si" || "Si" || "sI")) {
//         alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
//     }else {
//         alert("Cancelaste correctamente la reserva");
//     }
// }
// //.....RESERVA PARA 5 MESAS.....    
// else if (numMesas == 5) {
//     let numPersonas = parseInt(prompt("Ingrese el número de comensales (máx 20)"));
//     console.log (numPersonas+"personas");
//     alert("Reservar mesa para : "+ numPersonas +"personas");
//     let respuesta = prompt("Si desea realizarla ingrese SI. Si no lo desea pulse enter");
//     if (respuesta == ("SI" || "si" || "Si" || "sI")) {
//         alert("Realizaste correctamente la reserva para : "+ numPersonas +" personas");
//     }else {
//         alert("Cancelaste correctamente la reserva");
//     }
// } else if (numMesas > 5) {
//     alert ("no alcanzan las mesas");
// }



//////ESTO ES EL DESAFIO COMPLEMENTARIO !!!!!
//////ESTO ES EL DESAFIO COMPLEMENTARIO !!!!!
//////ESTO ES EL DESAFIO COMPLEMENTARIO !!!!!
//////ESTO ES EL DESAFIO COMPLEMENTARIO !!!!!
//////ESTO ES EL DESAFIO COMPLEMENTARIO !!!!!



let empleado = (prompt("Ingresa tu nombre en mayúsculas:"));

  while (empleado != ("ESC" && "esc" && "")){
      switch (empleado) {
          case "JULIAN":
              alert ("Bienvenido "+ empleado);
              console.log(empleado);
              break;
          case "JUAN":
              alert ("Bienvenido "+ empleado);
              console.log(empleado);
              break;
          case "FRANCISCO":
              alert ("Bienvenido "+ empleado);
              console.log(empleado);
              break;
          case "MARIANA":
                 alert ("Bienvenida "+ empleado);
                 console.log(empleado);
                 break;
          case "DAIANA":
                 alert ("Bienvenida "+ empleado);
                 console.log(empleado);
                 break;
          case "RICARDO":
                 alert (empleado +" ya no trabajas con nosotros");
                 console.log(empleado);
                 break;     
           default:
               alert ("No te encuentras en nuestro sistema");
               console.log(empleado +" no se encuentra en nuestro sistema");
               break;
      }   
      empleado = prompt("Ingresa tu nombre o presiona ENTER si desea continuar");

  }

  let clave = 0;

 do{
     clave = parseInt(prompt("Ingrese su clave de ingreso de 3 dígitos:"));
     // if (numero !="" (alert (numero)));
     if ((clave >= 300) && (clave <= 800)){
        console.log(clave);
        alert ("Su clave es: "+ clave); 
     }else if ((clave <= 299) || (clave >= 801)) {
        console.log(clave); 
        alert("Su clave: "+clave+" es incorrecta");
     }
 }while (parseInt(clave));