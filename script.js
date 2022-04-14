
//
///LA IDEA DEL DESAFIO ES CREAR UN SISTEMA QUE PUEDA CREAR RESERVAS EN LAS CUALES CREANDO PERSONAS CON CLASES VA A PONER LOS DATOS DE CADA PERSONA INGRESADA
////TAMBIEN LA IDEA ES PODER HACER UN CARRITO 
/////

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








/////////////////////////////////////////////////7
//..........DESAFÍO ENTREGABLE.............

//......FUNCIÓN QUE PERMITE AGREGAR EL FILTRO +18 PARA LOS LUGARES QUE LO REQUIEREN

// let edad = function (anionacimiento) {
//      anionacimiento = parseInt(prompt("ingrese su año de nacimiento"));
//      return anionacimiento;
//      anioactual - anionacimiento;
//      return edad;
//      if (edad < 18) {
//          alert("Es obligatorio ser mayor de edad para ingresar");
//      }
//  }

let anioactual = 2022;

//......CLASE RESERVANTE PARA CREAR EL OBJETO RESERVANTE
 class Reservante {
    constructor (nombrer, apellidor, anionacimientor, telefono, direccion) {
        this.nombrer = nombrer;
           
        this.apellidor = apellidor;

        this.anionacimientor = anionacimientor;

        this.telefono = telefono;

        this.direccion = direccion;

        this.edad = anioactual - anionacimientor;

        this.datoscompletos = "Nombre: " + nombrer +"   "+ "Apellido: " + apellidor +"   "+ "Año de nacimiento: " + anionacimientor +"   "+ "Teléfono: " + telefono +"   "+ "Dirección: " + direccion;

    }
 }

let reservante1 = new Reservante(prompt("Ingrese el nombre de quien realiza la reserva"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"), prompt("Ingrese un número de teléfono"), prompt("Ingrese una dirección"));
    console.log(reservante1.datoscompletos);
    console.log("Edad: "+ reservante1.edad); 
  
 class Persona {
    constructor (nombre, apellido, anionacimiento) {
        this.nombre = nombre;

        this.apellido = apellido;

        this.anionacimiento = anionacimiento;

        this.edad = anioactual - anionacimiento;

        }
    }


let cantidad = parseInt(prompt("Ingrese cuantas personas asistirán"));

//......WHILE QUE MIENTRAS cantidad != ("ESC" || " ") UTILIZA EL VALOR DE cantidad PARA CREAR MESAS PARA 1/2/3/4... ETC CANTIDAD DE PERSONAS
 while (cantidad != ("ESC" || " ")) {
         switch (cantidad) {
            case 1 :
                 let persona11 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                 console.log("Nombre: " + persona11.nombre);
                 console.log("Apellido: " + persona11.apellido);
                 console.log("Año de nacimiento: " + persona11.anionacimiento);
                 console.log("Edad: " + persona11.edad);
                 break;
            case 2 :
                let persona21 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona21.nombre);
                console.log("Apellido: " + persona21.apellido);
                console.log("Año de nacimiento: " + persona21.anionacimiento);
                console.log("Edad: " + persona21.edad);                  

                let persona22 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona22.nombre);
                console.log("Apellido: " + persona22.apellido);
                console.log("Año de nacimiento: " + persona22.anionacimiento);
                console.log("Edad: " + persona22.edad);
                continue;
            case 3 :
                let persona31 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona31.nombre);
                console.log("Apellido: " + persona31.apellido);
                console.log("Año de nacimiento: " + persona31.anionacimiento);
                console.log("Edad: " + persona31.edad);                  

                let persona32 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona32.nombre);
                console.log("Apellido: " + persona32.apellido);
                console.log("Año de nacimiento: " + persona32.anionacimiento);
                console.log("Edad: " + persona32.edad);

                let persona33 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona33.nombre);
                console.log("Apellido: " + persona33.apellido);
                console.log("Año de nacimiento: " + persona33.anionacimiento);
                console.log("Edad: " + persona33.edad);
                break;             
            case 4 :
                let persona41 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona41.nombre);
                console.log("Apellido: " + persona41.apellido);
                console.log("Año de nacimiento: " + persona41.anionacimiento);
                console.log("Edad: " + persona41.edad);                  

                let persona42 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona42.nombre);
                console.log("Apellido: " + persona42.apellido);
                console.log("Año de nacimiento: " + persona42.anionacimiento);
                console.log("Edad: " + persona42.edad);

                let persona43 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona43.nombre);
                console.log("Apellido: " + persona43.apellido);
                console.log("Año de nacimiento: " + persona43.anionacimiento);
                console.log("Edad: " + persona43.edad);

                let persona44 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona44.nombre);
                console.log("Apellido: " + persona44.apellido);
                console.log("Año de nacimiento: " + persona44.anionacimiento);
                console.log("Edad: " + persona44.edad);
                break;
            case 5 :
                let persona51 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona51.nombre);
                console.log("Apellido: " + persona51.apellido);
                console.log("Año de nacimiento: " + persona51.anionacimiento);
                console.log("Edad: " + persona51.edad);                  

                let persona52 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona52.nombre);
                console.log("Apellido: " + persona52.apellido);
                console.log("Año de nacimiento: " + persona52.anionacimiento);
                console.log("Edad: " + persona52.edad);

                let persona53 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona53.nombre);
                console.log("Apellido: " + persona53.apellido);
                console.log("Año de nacimiento: " + persona53.anionacimiento);
                console.log("Edad: " + persona53.edad);

                let persona54 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona54.nombre);
                console.log("Apellido: " + persona54.apellido);
                console.log("Año de nacimiento: " + persona54.anionacimiento);
                console.log("Edad: " + persona54.edad);

                let persona55 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona55.nombre);
                console.log("Apellido: " + persona55.apellido);
                console.log("Año de nacimiento: " + persona55.anionacimiento);
                console.log("Edad: " + persona55.edad);
                break;
             case 6 :
                let persona61 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona61.nombre);
                console.log("Apellido: " + persona61.apellido);
                console.log("Año de nacimiento: " + persona61.anionacimiento);
                console.log("Edad: " + persona61.edad);                  

                let persona62 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona62.nombre);
                console.log("Apellido: " + persona62.apellido);
                console.log("Año de nacimiento: " + persona62.anionacimiento);
                console.log("Edad: " + persona62.edad);

                let persona63 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona63.nombre);
                console.log("Apellido: " + persona63.apellido);
                console.log("Año de nacimiento: " + persona63.anionacimiento);
                console.log("Edad: " + persona63.edad);

                let persona64 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona64.nombre);
                console.log("Apellido: " + persona64.apellido);
                console.log("Año de nacimiento: " + persona64.anionacimiento);
                console.log("Edad: " + persona64.edad);

                let persona65 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona65.nombre);
                console.log("Apellido: " + persona65.apellido);
                console.log("Año de nacimiento: " + persona65.anionacimiento);
                console.log("Edad: " + persona65.edad);

                let persona66 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona66.nombre);
                console.log("Apellido: " + persona66.apellido);
                console.log("Año de nacimiento: " + persona66.anionacimiento);
                console.log("Edad: " + persona66.edad);
                break;
             case 7 :
                let persona71 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona71.nombre);
                console.log("Apellido: " + persona71.apellido);
                console.log("Año de nacimiento: " + persona71.anionacimiento);
                console.log("Edad: " + persona71.edad);                  

                let persona72 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona72.nombre);
                console.log("Apellido: " + persona72.apellido);
                console.log("Año de nacimiento: " + persona72.anionacimiento);
                console.log("Edad: " + persona72.edad);

                let persona73 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona73.nombre);
                console.log("Apellido: " + persona73.apellido);
                console.log("Año de nacimiento: " + persona73.anionacimiento);
                console.log("Edad: " + persona73.edad);

                let persona74 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona74.nombre);
                console.log("Apellido: " + persona74.apellido);
                console.log("Año de nacimiento: " + persona74.anionacimiento);
                console.log("Edad: " + persona74.edad);

                let persona75 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona75.nombre);
                console.log("Apellido: " + persona75.apellido);
                console.log("Año de nacimiento: " + persona75.anionacimiento);
                console.log("Edad: " + persona75.edad);

                let persona76 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona76.nombre);
                console.log("Apellido: " + persona76.apellido);
                console.log("Año de nacimiento: " + persona76.anionacimiento);
                console.log("Edad: " + persona76.edad);

                let persona77 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona77.nombre);
                console.log("Apellido: " + persona77.apellido);
                console.log("Año de nacimiento: " + persona77.anionacimiento);
                console.log("Edad: " + persona77.edad);
                break;
             case 8 :
                let persona81 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona81.nombre);
                console.log("Apellido: " + persona81.apellido);
                console.log("Año de nacimiento: " + persona81.anionacimiento);
                console.log("Edad: " + persona81.edad);                  

                let persona82 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona82.nombre);
                console.log("Apellido: " + persona82.apellido);
                console.log("Año de nacimiento: " + persona82.anionacimiento);
                console.log("Edad: " + persona82.edad);

                let persona83 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona83.nombre);
                console.log("Apellido: " + persona83.apellido);
                console.log("Año de nacimiento: " + persona83.anionacimiento);
                console.log("Edad: " + persona83.edad);

                let persona84 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona84.nombre);
                console.log("Apellido: " + persona84.apellido);
                console.log("Año de nacimiento: " + persona84.anionacimiento);
                console.log("Edad: " + persona84.edad);

                let persona85 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona85.nombre);
                console.log("Apellido: " + persona85.apellido);
                console.log("Año de nacimiento: " + persona85.anionacimiento);
                console.log("Edad: " + persona85.edad);

                let persona86 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona86.nombre);
                console.log("Apellido: " + persona86.apellido);
                console.log("Año de nacimiento: " + persona86.anionacimiento);
                console.log("Edad: " + persona86.edad);

                let persona87 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona87.nombre);
                console.log("Apellido: " + persona87.apellido);
                console.log("Año de nacimiento: " + persona87.anionacimiento);
                console.log("Edad: " + persona87.edad);

                let persona88 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona88.nombre);
                console.log("Apellido: " + persona88.apellido);
                console.log("Año de nacimiento: " + persona88.anionacimiento);
                console.log("Edad: " + persona88.edad);
                break;
             case 9 :
                let persona91 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona91.nombre);
                console.log("Apellido: " + persona91.apellido);
                console.log("Año de nacimiento: " + persona91.anionacimiento);
                console.log("Edad: " + persona91.edad);                  

                let persona92 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona92.nombre);
                console.log("Apellido: " + persona92.apellido);
                console.log("Año de nacimiento: " + persona92.anionacimiento);
                console.log("Edad: " + persona92.edad);

                let persona93 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona93.nombre);
                console.log("Apellido: " + persona93.apellido);
                console.log("Año de nacimiento: " + persona93.anionacimiento);
                console.log("Edad: " + persona93.edad);

                let persona94 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona94.nombre);
                console.log("Apellido: " + persona94.apellido);
                console.log("Año de nacimiento: " + persona94.anionacimiento);
                console.log("Edad: " + persona94.edad);

                let persona95 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona95.nombre);
                console.log("Apellido: " + persona95.apellido);
                console.log("Año de nacimiento: " + persona95.anionacimiento);
                console.log("Edad: " + persona95.edad);

                let persona96 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona96.nombre);
                console.log("Apellido: " + persona96.apellido);
                console.log("Año de nacimiento: " + persona96.anionacimiento);
                console.log("Edad: " + persona96.edad);

                let persona97 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona97.nombre);
                console.log("Apellido: " + persona97.apellido);
                console.log("Año de nacimiento: " + persona97.anionacimiento);
                console.log("Edad: " + persona97.edad);

                let persona98 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona98.nombre);
                console.log("Apellido: " + persona98.apellido);
                console.log("Año de nacimiento: " + persona98.anionacimiento);
                console.log("Edad: " + persona98.edad);

                let persona99 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona99.nombre);
                console.log("Apellido: " + persona99.apellido);
                console.log("Año de nacimiento: " + persona99.anionacimiento);
                console.log("Edad: " + persona99.edad);
                break;
             case 10 :
                let persona101 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona101.nombre);
                console.log("Apellido: " + persona101.apellido);
                console.log("Año de nacimiento: " + persona101.anionacimiento);
                console.log("Edad: " + persona101.edad);                  

                let persona102 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona102.nombre);
                console.log("Apellido: " + persona102.apellido);
                console.log("Año de nacimiento: " + persona102.anionacimiento);
                console.log("Edad: " + persona102.edad);

                let persona103 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona103.nombre);
                console.log("Apellido: " + persona103.apellido);
                console.log("Año de nacimiento: " + persona103.anionacimiento);
                console.log("Edad: " + persona103.edad);

                let persona104 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona104.nombre);
                console.log("Apellido: " + persona104.apellido);
                console.log("Año de nacimiento: " + persona104.anionacimiento);
                console.log("Edad: " + persona104.edad);

                let persona105 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona105.nombre);
                console.log("Apellido: " + persona105.apellido);
                console.log("Año de nacimiento: " + persona105.anionacimiento);
                console.log("Edad: " + persona105.edad);

                let persona106 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona106.nombre);
                console.log("Apellido: " + persona106.apellido);
                console.log("Año de nacimiento: " + persona106.anionacimiento);
                console.log("Edad: " + persona106.edad);

                let persona107 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona107.nombre);
                console.log("Apellido: " + persona107.apellido);
                console.log("Año de nacimiento: " + persona107.anionacimiento);
                console.log("Edad: " + persona107.edad);

                let persona108 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona108.nombre);
                console.log("Apellido: " + persona108.apellido);
                console.log("Año de nacimiento: " + persona108.anionacimiento);
                console.log("Edad: " + persona108.edad);

                let persona109 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona109.nombre);
                console.log("Apellido: " + persona109.apellido);
                console.log("Año de nacimiento: " + persona109.anionacimiento);
                console.log("Edad: " + persona109.edad);

                let persona1010 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona1010.nombre);
                console.log("Apellido: " + persona1010.apellido);
                console.log("Año de nacimiento: " + persona1010.anionacimiento);
                console.log("Edad: " + persona1010.edad);
                break;
             case 11 :
                let persona111 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona111.nombre);
                console.log("Apellido: " + persona111.apellido);
                console.log("Año de nacimiento: " + persona111.anionacimiento);
                console.log("Edad: " + persona111.edad);                  

                let persona112 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona112.nombre);
                console.log("Apellido: " + persona112.apellido);
                console.log("Año de nacimiento: " + persona112.anionacimiento);
                console.log("Edad: " + persona112.edad);

                let persona113 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona113.nombre);
                console.log("Apellido: " + persona113.apellido);
                console.log("Año de nacimiento: " + persona113.anionacimiento);
                console.log("Edad: " + persona113.edad);

                let persona114 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona114.nombre);
                console.log("Apellido: " + persona114.apellido);
                console.log("Año de nacimiento: " + persona114.anionacimiento);
                console.log("Edad: " + persona114.edad);

                let persona115 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona115.nombre);
                console.log("Apellido: " + persona115.apellido);
                console.log("Año de nacimiento: " + persona115.anionacimiento);
                console.log("Edad: " + persona115.edad);

                let persona116 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona116.nombre);
                console.log("Apellido: " + persona116.apellido);
                console.log("Año de nacimiento: " + persona116.anionacimiento);
                console.log("Edad: " + persona116.edad);

                let persona117 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona117.nombre);
                console.log("Apellido: " + persona117.apellido);
                console.log("Año de nacimiento: " + persona117.anionacimiento);
                console.log("Edad: " + persona117.edad);

                let persona118 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona118.nombre);
                console.log("Apellido: " + persona118.apellido);
                console.log("Año de nacimiento: " + persona118.anionacimiento);
                console.log("Edad: " + persona118.edad);

                let persona119 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona119.nombre);
                console.log("Apellido: " + persona119.apellido);
                console.log("Año de nacimiento: " + persona119.anionacimiento);
                console.log("Edad: " + persona119.edad);

                let persona1110 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona1110.nombre);
                console.log("Apellido: " + persona1110.apellido);
                console.log("Año de nacimiento: " + persona1110.anionacimiento);
                console.log("Edad: " + persona1110.edad);

                let persona1111 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona1111.nombre);
                console.log("Apellido: " + persona1111.apellido);
                console.log("Año de nacimiento: " + persona1111.anionacimiento);
                console.log("Edad: " + persona1111.edad);
                break;
             case 12 :
                let persona121 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona121.nombre);
                console.log("Apellido: " + persona121.apellido);
                console.log("Año de nacimiento: " + persona121.anionacimiento);
                console.log("Edad: " + persona121.edad);                  

                let persona122 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona122.nombre);
                console.log("Apellido: " + persona122.apellido);
                console.log("Año de nacimiento: " + persona122.anionacimiento);
                console.log("Edad: " + persona122.edad);

                let persona123 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona123.nombre);
                console.log("Apellido: " + persona123.apellido);
                console.log("Año de nacimiento: " + persona123.anionacimiento);
                console.log("Edad: " + persona123.edad);

                let persona124 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona124.nombre);
                console.log("Apellido: " + persona124.apellido);
                console.log("Año de nacimiento: " + persona124.anionacimiento);
                console.log("Edad: " + persona124.edad);

                let persona125 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona125.nombre);
                console.log("Apellido: " + persona125.apellido);
                console.log("Año de nacimiento: " + persona125.anionacimiento);
                console.log("Edad: " + persona125.edad);

                let persona126 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona126.nombre);
                console.log("Apellido: " + persona126.apellido);
                console.log("Año de nacimiento: " + persona126.anionacimiento);
                console.log("Edad: " + persona126.edad);

                let persona127 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona127.nombre);
                console.log("Apellido: " + persona127.apellido);
                console.log("Año de nacimiento: " + persona127.anionacimiento);
                console.log("Edad: " + persona127.edad);

                let persona128 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona128.nombre);
                console.log("Apellido: " + persona128.apellido);
                console.log("Año de nacimiento: " + persona128.anionacimiento);
                console.log("Edad: " + persona128.edad);

                let persona129 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona129.nombre);
                console.log("Apellido: " + persona129.apellido);
                console.log("Año de nacimiento: " + persona129.anionacimiento);
                console.log("Edad: " + persona129.edad);

                let persona1210 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona1210.nombre);
                console.log("Apellido: " + persona1210.apellido);
                console.log("Año de nacimiento: " + persona1210.anionacimiento);
                console.log("Edad: " + persona1210.edad);

                let persona1211 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona1211.nombre);
                console.log("Apellido: " + persona1211.apellido);
                console.log("Año de nacimiento: " + persona1211.anionacimiento);
                console.log("Edad: " + persona1211.edad);

                let persona1212 = new Persona (prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"));
                console.log("Nombre: " + persona1212.nombre);
                console.log("Apellido: " + persona1212.apellido);
                console.log("Año de nacimiento: " + persona1212.anionacimiento);
                console.log("Edad: " + persona1212.edad);
                break;
             default :
                 alert("No se permiten reservas para más de 12 personas");
                 continue;
                
        }   
}

prompt("Presione ENTER para confirmar la reserva o ESC para cancelarla");