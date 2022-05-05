// let anioactual = 2022;

// //......CLASE RESERVANTE PARA CREAR EL OBJETO RESERVANTE

//  class Reservante {
//     constructor (nombrer, apellidor, anionacimientor, telefono, direccion) {
//         this.nombrer = nombrer;
           
//         this.apellidor = apellidor;

//         this.anionacimientor = anionacimientor;

//         this.telefono = telefono;

//         this.direccion = direccion;

//         this.edad = anioactual - anionacimientor;

//         this.datoscompletos = "Nombre: " + nombrer +"   "+ "Apellido: " + apellidor +"   "+ "Año de nacimiento: " + anionacimientor +"   "+ "Teléfono: " + telefono +"   "+ "Dirección: " + direccion;

//     }
//  }
// // NUEVO OBJETO RESERVANTE

// let reservante1 = new Reservante(prompt("Ingrese el nombre de quien realiza la reserva"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"), prompt("Ingrese un número de teléfono"), prompt("Ingrese una dirección"));
//     console.log(reservante1.datoscompletos);
//     console.log("Edad: "+ reservante1.edad);

// // RESERVANTE NO PUEDE SER MENOR DE 18 AÑOS

// if (reservante1.edad <= 17) {
//     prompt("No puedes realizar una reserva siendo menor de edad");
//     alert("No puedes realizar una reserva siendo menor de edad");
// } 



// let cantidad = parseInt(prompt("Ingrese cuantas personas asistirán"));
// console.log(cantidad);

// while ((cantidad != ("ESC" || " " || 0)) || (cantidad < 5)) {

//     switch (cantidad) {
//         case 1 :
//             let mesa1 = [
//                 {
//                    nombre: prompt("Ingrese el nombre"),
//                    apellido: prompt("Ingrese el apellido"),
//                    edad: parseInt(prompt("Ingrese la edad")),
//                 }
//             ];
//             console.log("Mesa 1: " + mesa1);
//             break;
//         case 2 :
//             let mesa2 = [
//                 {
//                    nombre: prompt("Ingrese el nombre"),
//                    apellido: prompt("Ingrese el apellido"),
//                    edad: parseInt(prompt("Ingrese la edad")),
//                 },{
//                    nombre: prompt("Ingrese el nombre"),
//                    apellido: prompt("Ingrese el apellido"),
//                    edad: parseInt(prompt("Ingrese la edad")),      
//                 }
//              ];
//              console.log(mesa2);
//              break;
//         case 3 :
//             let mesa3 = [
//                 {
//                    nombre: prompt("Ingrese el nombre"),
//                    apellido: prompt("Ingrese el apellido"),
//                    edad: parseInt(prompt("Ingrese la edad")),
//                 },{
//                    nombre: prompt("Ingrese el nombre"),
//                    apellido: prompt("Ingrese el apellido"),
//                    edad: parseInt(prompt("Ingrese la edad")),      
//                 },{
//                     nombre: prompt("Ingrese el nombre"),
//                     apellido: prompt("Ingrese el apellido"),
//                     edad: parseInt(prompt("Ingrese la edad")),      
//                  }
//              ];
//              console.log(mesa3);
//              break;
//         case 4 :
//             let mesa4 = [
//                 {
//                    nombre: prompt("Ingrese el nombre"),
//                    apellido: prompt("Ingrese el apellido"),
//                    edad: parseInt(prompt("Ingrese la edad")),
//                 },{
//                    nombre: prompt("Ingrese el nombre"),
//                    apellido: prompt("Ingrese el apellido"),
//                    edad: parseInt(prompt("Ingrese la edad")),      
//                 },{
//                     nombre: prompt("Ingrese el nombre"),
//                     apellido: prompt("Ingrese el apellido"),
//                     edad: parseInt(prompt("Ingrese la edad")),      
//                  },{
//                     nombre: prompt("Ingrese el nombre"),
//                     apellido: prompt("Ingrese el apellido"),
//                     edad: parseInt(prompt("Ingrese la edad")),      
//                  }
//              ];
//              console.log(mesa4);
//              break;
//         default :
//         alert ("No puedes ingresar más personas que la cantidad especificada ni reservar una mesa para más de 4 personas");   
//     }
//     break;
// }

// let precioReserva = (cantidad * 200) * 1.25;

// console.log("Precio de la reserva con iva: "+ precioReserva);
// alert("Precio de la reserva con iva: "+ precioReserva);

// let precioReservaUS = precioReserva * 0.20;

// console.log("Precio de la reserva en dólares: "+ precioReservaUS);
// alert("Precio de la reserva en dólares: "+ precioReservaUS);


// // const hayMenoresMesa2 = mesa2.some ((elemento) => {
// //     return elemento.edad < 18;
    
// //     if (elemento.edad <= 17) {
// //         alert("Hat menores en la mesa");
// //         console.log("Hat menores en la mesa");
// //     } else {
// //         alert("Todos los integrantes son mayores de edad")
// //     }
// // })








