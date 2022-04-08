

//PARA COMENTAR EN JAVASCRIPT ctrl + k + c
//USAR LET y CONST, ya no se usa var
//SIEMPRE ASEGURAR QUE UN CICLO TENGA UN FIN!!


// let nombre = prompt("Ingrese su nombre");
// let edad = prompt ("Ingrese su edad");

/////////////////////...............................

// if (edad < 18) {
//     alert("no puedes ingresar");
//     console.log("edad"); 
// }

// else if(edad >= 18 && edad < 80) {
//     prompt ("puedes ingresar");
//     console.log("edad");
// }

// else if (edad > 80) {
//     alert("estas viejazo");
//     console.log("edad");
// }

////////////////////...............................

// if (nombre == "") {
//     alert("No ingresaste el nombre de usuario");
// }
// else {
//     alert("Nombre de usuario ingresado " + nombre);
// }

////////////////////...............................

// if ((nombre !="") && (edad >=18)) {
//     alert ("Nombre: "+ nombre + "Edad: "+ edad);
// }else {
//     if (edad < 18){
//         alert ("Error: No tienes suficiente edad");      //////INTENTAR REHACERLO CON EL ............WHILE..........
//     }
// }else if {
//     if ((edad >= 18) && (edad != "")){
//         alert ("Error: Ingresar nombre y edad");
//     }
    
// }

////////////////////...............................

// if ((nombre !="") && (edad >= 18)) {
// alert ("Nombre: "+ nombre + "\nEdad: "+ edad);
// }else {
//   if ((edad < 18) && (edad != 0)){
//    alert ("Eres muy joven");
//   }
// } if ((edad >= 18) || (nombre ="")) {
//     alert ("Error: Falta introducir el nombre");
// }else if (edad =="") {
//     alert ("Error: Falta introducir la edad");
// }

////////////////////...............................
//PARA CREAR UNA TABLA DE MULTIPLICACION DEL NUMERO INGRESADO

// let ingresarNumero = parseInt(prompt("Ingresate ese numero"));

// for (let i = 1; i<= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert (ingresarNumero +" X "+ i +" = "+ resultado);2
// }

////////////////////...............................
//PARA DAR TURNOS A LOS NOMBRES INGRESADOS 

// for (let i = 1; i <= 30; i++) {
//     let ingresarNombre = prompt("Ingresar nombre");

//     alert(" Turno N* "+i+" Nombre paciente: "+ingresarNombre);
// }

////////////////////...............................
//SI  I == 5  SALTEAR EL 5 Y PASAR AL 6
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     alert (i);
// }

////////////////////...............................
//EJEMPLO DE BUCLE INFINITO WHILE

// let repetir = true;
// while(repetir) {
//     alert ("Te como hermano");
// }

////////////////////...............................
//EJ EDAD TUYA Y TU MASCOTA

//let edad = prompt("ingresa tu edad");

// while (edad != "ESC") {
//     alert("Tu edad es: "+ edad);

//      edad = prompt("Ingresa la edad tu mascota: ");

//      alert("La edad de tu mascota es: "+ edad);

// }

////////////////////...............................
//EJ DE LA ESTRUCTURA  DO...WHILE QUE GARANTIZA QUE EL BLOQUE DE CÓDIGO SE EJECUTE AL MENOS UNA VEZ..
//..PORQUE LA CONDICIÓN SE EVALÚA AL FINAL

// let cortala = false;

// do {
//     alert ("!SEGUII!");
// }while (cortala)

////////////////////...............................
//ALGORITMO QUE SOLICITA UN NÚMERO Y SE DETIENE CUANDO NO INGRESAS NADA Y PASA A N ENTERO LOS DECIMALES

// let numero = 0;

// do{
//     numero = prompt("Ingresar un número:");
//     // if (numero !="" (alert (numero)));
//     if (numero ==""){
//         continue;
//     }else {
//         alert ( parseInt(numero))
//     }
// }while (parseInt (numero));

////////////////////...............................
//........SWITCH......
//ESTRUCTURA SWITCH QUE MANEJA MÚLTIPLES CONDICIONES SOBRE LA MISMA VARIABLE 
//REEMPLAZA AL IF PORQUE ES MÁS ORDENADO
//SE EVALÚA CADA CONDICIÓN, SI SE CUMPLE SE EJECUTA LO QUE ESTÉ DENTRO  DE CADA   case :
//DESPUÉS DE LAS INSTRUCCIONES DE CADA  case  SE INCLUYE LA SENTENCIA  break;  PARA FINALIZAR LA EJECUCIÓN DEL SWITCH 
//NO ES OBLIGATORIO USAR EL  break;  
//SI NINGÚN VALOR DE LA VARIABLE DEL SWITCH COINCIDE CON LOS VALORES DE LOS  case:  SE USA EL VALOR DEFAULT
//VALOR default: INDICA LAS INSTRUCCIONES QUE SE EJECUTAN SI NINGUNA CONDICIÓN ANTERIOR SE CUMPLIÓ

//ALGORITMO CON WHILE Y SWITCH QUE OPERA SEGÚN LA ENTRADA PERO NO EJECUTA EL BLOQUE SI entrada == "ESC" && "esc" 

// let entrada = prompt("Ingresa tu nombre:");

// while (entrada != ("ESC" && "esc")){
//     switch (entrada) {
//         case "JULIAN":
//             alert ("Hola boludito");
//             break;
//         case "JUAN":
//             alert ("Que haces groso, animal, maquina");
//             break;
//         case "FRANCISCO":
//             alert ("Uhh si sos vos el animal mas crack que hay");
//             break;
//         default:
//             alert ("Quien sos man?? SALE TOCATA BRO?!");
//             break;
//     }   
//     entrada = prompt("Ingresa tu nombre:");

// }

////////////////////...............................
//EJ 1 del profe 
//TOMA TEXTOS INGRESADOS Y UNA VEZ INGRESADO salir DEVUELVE TODOS LOS TEXTOS CONCATENADOS 
//  let texto = "";

//  let entrada = prompt("ingrese un texto");

//  while (entrada != "salir") {
//     if (texto != "") {
//          texto += ", ";
//      }
//      texto += entrada;

//      entrada = prompt("ingrese otro texto");
//  }

//  alert (texto);

////////////////////...............................
//EJ 2
//SUMA A LA VARIABLE RESULTADO EL NUMERO2 EN CADA VUELTA Y A NUMERO 1 LE RESTA UNO HASTA QUE LLEGA A 0 Y SE..
//..FINALIZA LA EJECUCIÓN

// let numero1 = parseInt(prompt("ingrese un numero"));

// let numero2 = parseInt(prompt("ingrese otro numero"));

// let resultado = 0;

// while (numero1 > 0) {
//       resultado += numero2;
//       numero1--;
// }

////////////////////...............................
//CALCULADORA
let numero1 = (parseInt(promt("Ingresar primer numero")));
let numero2 = (parseInt(prompt("Ingresar segundo numero")));
let operacion = prompt("ingrese la operacion");
let resultadoSuma = calculadora(numero1, numero2, "+");
let resultadoResta = calculadora(numero1, numero2, "-");
let resultadoMultip = calculadora(numero1, numero2, "*");
let resultadoDivi = calculadora(numero1, numero2, "/");

function calculadora (primerNum, segundoNum, operacion) {
    switch (operacion) {
        case "+":
            return primerNum + segundoNum;
            break;
        case "-":
            return primerNum - segundoNum;
            break;
        case "*":
            return primerNum * segundoNum;
            break;
         case "/":
            return primerNum / segundoNum;
            break;
        default:
            return 0;
            break;
    }   
}


alert(resultadoSuma);
alert(resultadoResta);
alert(resultadoMultip);
alert(resultadoDivi);










