

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
//////////////////////////////////////////////////////////////////////////////////////

//                         .......BUCLES E ITERACIONES.......... 
//  CICLOS POR CONTEO : REPITEN EL BLOQUE DE CÓDIGO UN NÚMERO DE VECES ESPECÍFICA
//  
//  ESTRUCTURA  FOR()
//  
//  FOR (DESDE; HASTA; ACTUALIZACIÓN) :
//..........
//  DESDE (zona donde se establecen los valores iniciales de las variables que controlan el ciclo);
//..........
//  HASTA (único elemento que decide si se repite o se detiene el ciclo);
//..........
//  ACTUALIZACIÓN (es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición);
//..........
//.........................
//  CICLOS CONDICIONALES : REPITEN UN BLOQUE DE CÓDIGO MIENTRAS LA CONDICIÓN EVALUADA ES TRUE
//
//  ESTRUCTURAS  WHILE()  Y  DO...WHILE()
////////////////////////////////////////////////////
////////////////////...............................

//PARA CONTAR DE 0 A 9
// for (let i = 0; i < 10; i++) {
//    alert(i);
// }

////////////////////...............................

// ALGORITMO PARA DAR TURNOS DEL 1 AL 20 A LOS NOMBRES INGRESADOS                                                             .........ALGORITMO PARA DAR TURNOS............ abajo

// for (let i = 1; i <= 20; i++) {
//    // en cada repetición solicitamos un nombre
//    let nombreIngresado = prompt("Ingresa tu nombre");
//    // informamos el turno asignado usando la variable i
//    alert("Turno número: "+ i + " Nombre: "+ nombreIngresado);
// }
////////////////////...............................                                                                           .........ALGORITMO PARA DAR TURNOS............ arriba
////////////////////...............................

// PARA QUE EL CICLO SE INTERRUMPA BAJO CIERTA CONDICIÓN SE USA LA SENTENCIA   BREAK;   
// (al escribir esta sentencia dentro de un ciclo for, este se interrumpirá como si hubiera finalizado)

// for (let i = 1; i<= 10; i++) {
//    // si la variable es igual a 5 se interrumpe el for
//    if (i == 5) {
//       break;
//    }
//    alert(i);
// }
////////////////////...............................

// PARA QUE EL CICLO BAJO CIERTA CONDICIÓN SALTEE UNA REPETICIÓN Y SIGA CON LA PRÓXIMA, SE UTILIZA LA SENTENCIA   CONTINUE;

// for (let i = 1; i <=10; i++) {
//    // si la variable es  == 5  no se interpreta esa repetición y sigue con la próxima
//    if (i == 5) {
//       continue;
//    }
//    alert(i);
// }
////////////////////...............................

//PARA CREAR UNA TABLA DE MULTIPLICACION DEL NUMERO INGRESADO

// let ingresarNumero = parseInt(prompt("Ingresate ese numero"));

// for (let i = 1; i<= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert (ingresarNumero +" X "+ i +" = "+ resultado);2
// }

////////////////////...............................

let ingresarNumero = parseInt(prompt("Ingresa un numero o si quieres salir ingresa esc"));

do {

      for (let i = 1; i< 10; i++) {
            let resultado = ingresarNumero * i ;
            alert (ingresarNumero +" X "+ i +" = "+ resultado);
      } 
} while (ingresarNumero != ("esc" && 0) && (i <= 10));

////////////////////...............................


// LA ESTRUCTURA  WHILE()  PERMITE CREAR BUCLES QUE SE EJECUTAN 0 O MÁS VECES, DEPENDIENDO DE LA CONDICIÓN INDICADA. 
// (mientras se cumplan las condiciones indicadas, que se repitan las instrucciones dentro del bucle)
// AL CREARLO ASUMIMOS QUE EL BUCLE FINALIZARÁ EN ALGÚN MOMENTO, EN CASO CONTRARIO GENERARÍAMOS UN BUCLE INFINITO
////////////////////...............................

//EJEMPLO DE BUCLE INFINITO WHILE

// let repetir = true;
// while(repetir) {
//     alert ("Te como hermano");
// }

////////////////////...............................

// let entrada = prompt ("Ingresar un dato");
// // repetimos con while() hasta que el usuario ingrese "esc"
// while (entrada != "esc") {

//    alert("El usuario ingresó: "+ entrada);
//    // vovlemos a solicitar otro dato. En la próxima iteración se evaluará que sea != de "esc"
//    entrada = prompt("Ingrese otro dato");
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

// ESTRUCTURA  DO...WHILE QUE GARANTIZA QUE EL BLOQUE DE CÓDIGO SE EJECUTE AL MENOS UNA VEZ PORQUE LA CONDICIÓN SE EVALÚA AL FINAL

// let cortala = false;

// do {
//     alert ("!SEGUII!");
// }while (cortala);

////////////////////...............................

//ALGORITMO QUE SOLICITA UN NÚMERO Y SE DETIENE CUANDO EL PARSEO NO DEVUELVE UN NÚMERO

// let numero = 0;

// do {
//    // repetimos con do...while mientras el usuario ingresa el N
//    numero = prompt("Ingresar número");
//    console.log(numero);
//    // si el parseo no resulta un número se interrumpe el bucle
// }while (parseInt(numero));

///////////////////////////////////////

//   ALGORITMO QUE PIDE LA CLAVE Y DESPUES EL NOMBRE DE EL EMPLEADO      (PROYECTO DE LOS DESAFIOS)

// let clave = 0;

//  do{
//      clave = parseInt(prompt("Ingrese su clave de 3 dígitos:"));
//      // if (numero !="" (alert (numero)));
//      if ((clave >= 300) && (clave <= 800)){
//         console.log(clave);
//         alert ("Su clave es: "+ clave); 
//      }else if ((clave <= 299) || (clave >= 801)) {
//         console.log(clave); 
//         alert("Su clave: "+clave+" es incorrecta");
//      }
//  }while (parseInt(clave));


// let empleado = prompt("Ingresa tu nombre:");

//  while (empleado != ("ESC" && "esc")){
//      switch (empleado) {
//          case "JULIAN":
//              alert ("Bienvenido "+ empleado);
//              console.log(empleado);
//              break;
//          case "JUAN":
//              alert ("Bienvenido "+ empleado);
//              console.log(empleado);
//              break;
//          case "FRANCISCO":
//              alert ("Bienvenido "+ empleado);
//              console.log(empleado);
//              break;
//          case "MARIANA":
//                 alert ("Bienvenida "+ empleado);
//                 console.log(empleado);
//                 break;
//          case "DAIANA":
//                 alert ("Bienvenida "+ empleado);
//                 console.log(empleado);
//                 break;
//          case "RICARDO":
//                 alert (empleado +" ya no trabajas con nosotros");
//                 console.log(empleado);
//                 break;     
//          default:
//              alert ("No te encuentras en nuestro sistema");
//              console.log(empleado +" no se encuentra en nuestro sistema");
//              break;
//      }   
//      entrada = prompt("Ingresa nuevamente tu nombre:");

//  }

//   ALGORITMO QUE PIDE LA CLAVE Y DESPUES EL NOMBRE DE EL EMPLEADO      (PROYECTO DE LOS DESAFIOS)

////////////////////...............................

// .............................SWITCH
// ESTRUCTURA SWITCH QUE MANEJA MÚLTIPLES CONDICIONES SOBRE LA MISMA VARIABLE 
// REEMPLAZA AL IF PORQUE ES MÁS ORDENADO
// SE EVALÚA CADA CONDICIÓN, SI SE CUMPLE SE EJECUTA LO QUE ESTÉ DENTRO  DE CADA   case :
// DESPUÉS DE LAS INSTRUCCIONES DE CADA  case  SE INCLUYE LA SENTENCIA  break;  PARA FINALIZAR LA EJECUCIÓN DEL SWITCH 
// NO ES OBLIGATORIO USAR EL  break;  
// SI NINGÚN VALOR DE LA VARIABLE DEL SWITCH COINCIDE CON LOS VALORES DE LOS  case:  SE USA EL VALOR DEFAULT
// VALOR default: INDICA LAS INSTRUCCIONES QUE SE EJECUTAN SI NINGUNA CONDICIÓN ANTERIOR SE CUMPLIÓ

// ALGORITMO CON WHILE Y SWITCH QUE OPERA SEGÚN LA ENTRADA PERO NO EJECUTA EL BLOQUE SI entrada == "ESC" && "esc" 

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
// EJ 2
// SUMA A LA VARIABLE RESULTADO EL NUMERO2 EN CADA VUELTA Y A NUMERO 1 LE RESTA UNO HASTA QUE LLEGA A 0 Y SE FINALIZA LA EJECUCIÓN

// let numero1 = parseInt(prompt("ingrese un numero"));

// let numero2 = parseInt(prompt("ingrese otro numero"));

// let resultado = 0;

// while (numero1 > 0) {
//       resultado += numero2;
//       numero1--;
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                           ..............FUNCIONES................

// FUNCIÓN PARA SUMAR Y MOSTRAR

// let resultado = 0;

// // función que suma dos números y asigna el resultado a la variable RESULTADO 
// function sumar(primerNumero, segundoNumero) {

//    resultado = primerNumero + segundoNumero;
// }

// // funcion que muestra resultado por consola 
// function mostrar(mensaje) {
//    console.log(mensaje);
// }

// // llamamos a sumar y luego a mostrar
// sumar(6,3);
// mostrar(resultado);

//////////////////////////////////////////////////

// LAS FUNCIONES PUEDEN GENERAR UN VALOR DE RETORNO USANDO LA PALABRA    RETURN    , OBTENIENDO EL VALOR CUANDO LA FUNCIÓN ES LLAMADA

// function sumar(primerNumero, segundoNumero) {

//    return primerNumero + segundoNumero;
// }

// let resultado = sumar(8, 16);

// console.log(resultado);

//////////////////////////////////////////////////


////////////////////...............................
//CALCULADORA
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

//////////////////////////////////////////////////

// FUNCIÓN QUE PIDE EL AÑO DE NACIMIENTO AL USUARIO Y CALCULA LA EDAD Y LA IMPRIME EN CONSOLA

// let anioactual = 2022;

// let anionacimiento = prompt("Ingrese su año de nacimiento");


// let edad = function (anionacimiento) {

//    edad = anioactual - anionacimiento;

//    return edad;

// }

// if (anionacimiento < 2004) {
//    alert("debes ser mayor de edad");
// }

// console.log("La edad es: " + edad(anionacimiento));

//////////////////////////////////////////////////

// .................................FUNCIONES ANÓNIMAS

// UNA FUNCIÓN ANÓNIMA ES LA CUAL SE DEFINE SIN NOMBRE Y SE UTILIZA PARA SER PASADA COMO PARÁMETRO O ASIGNADA A UNA VARIABLE

// EJ

// const suma = function (a, b) { 
//    return a + b;
// }

// ..................................FUNCIONES FLECHA 

// UNA FUNCIÓN FLECHA ES UNA FUNCIÓN ANÓNIMA DE SINTAXIS SIMPLIFICADA

// EJ

// const suma = (a, b) => {
//    return a + b;
// }

//////////////////////////////////////////////////

// const suma = (a, b) => { return a + b }

// const resta = (a, b) => { return a - b }

// console.log(resta(100, 50));
// console.log(suma(4, 9));

//////////////////////////////////////////////////

// SI DENTRO DE UNA FUNCIÓN HAY UNA SOLA LÍNEA DE CÓDIGO, SE PUEDE EVITAR EL RETURN

// const suma = (a, b) => a + b;

// const resta = (a, b) => a - b;

// SI DENTRO DE UNA FUNCIÓN HAY UNA SOLA LÍNEA DE CÓDIGO, SE PUEDE EVITAR EL RETURN
// SI HAY SÓLO UN PARÁMETRO SE PUEDE EVITAR PONER LOS PARÉNTESIS

// const iva = x => x * 0.21;

// let precioProducto = 500;
// let descuento = 50;

// a nuevo precio le pasamos la función resta, como primer parámetro pasamos la suma entre precioProducto y el precioProducto con iva
// a este resultado le resta descuento 
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

// console.log(nuevoPrecio);

////////////////////////////////////////////////////////////////////////////////////////////////////

//                          ....................OBJETOS.....................

// ANATOMÍA DE UN OBJETO

// const perro1 = {
//    nombre: "Perrito",
//    apellido: "Malvado",
//    edad: 2000
// }

// // PARA OBTENER LOS VALORES DE UNA PROPIEDAD EN UN OBJETO SE USA LA NOTACIÓN PUNTO (.)
// // NOMBRE DE LA VARIABLE DEL OBJETO, SEGUIDO DE PUNTO Y EL NOMBRE DE LA PROPIEDAD

// console.log(perro1.nombre);
// console.log(perro1.apellido);
// console.log(perro1.edad);

// perro1.apellido = "malvadazo";

// console.log(perro1.apellido);


//////////////////////////////////////////////////

// EL CONSTRUCTOR DE UN OBJETO ES UNA FUNCIÓN QUE USAMOS PARA CREAR UN NUEVO OBJETO CADA VEZ QUE SEA NECESARIO
// CON ESTA "FUNCIÓN CONSTRUCTORA" PODEMOS INICIALIZAR LAS PROPIEDADES DEL OBJETO AL MOMENTO DE SER INSTANCIADO CON   new.

// FUNCIÓN CONSTRUCTORA DE OBJETOS Perro

// function Perro (nombre, edad, calle) {
   
//    this.nombre = nombre;
//    this.edad = edad;
//    this.calle = calle;
// }

// const Perro1 = new Perro("Oscar", 10, "Calle 8 1776");

// const Perro2 = new Perro("María", 8, "Av. 7 300");

// console.log(Perro1);
// console.log(Perro1.edad);

// console.log(Perro2);
// console.log(Perro2.calle);

// Perro2.nombre = "Mariela";

// console.log(Perro2.nombre);

//////////////////////////////////////////////////

// LA PALABRA CLAVE    THIS   REFIERE AL ELEMENTO ACTUAL (en este ej Perro)
// THIS  REEMPLAZA LA PALABRA Perro CUANDO SE CREAN SU NOMBRE, EDAD, CALLE

// SERÍA "LO MISMO" 

// function Perro(nombre, calle) {
//    this.nombre = nombre;
//    this.calle = calle;
// }
// // QUE

// function Perro(nombre, calle) {
//    Perro.nombre = nombre;
//    Perro.calle = calle;
// }


// TAMBIÉN ES LO MISMO PONER

// function Perro(parametro1, parametro2) {
//    this.nombre = parametro1;
//    this.calle = parametro2;
// }
// // QUE

// function Perro(nombre, calle) {
//    Perro.nombre = nombre;
//    Perro.calle = calle;
// }

//////////////////////////////////////////////////

// SE CREAN VARIABLES GLOBALES PARA NOMBRE Y CALLE QUE SU VALOR LO INDICA EL USUARIO
// DESPUÉS USAMOS ESTAS VARIABLES AL MOMENTO DE CREAR EL OBJETO, INSTANCIANDO (LLAMANDO) AL OBJETO CONSTRUCTOR

// let nombre = prompt("Ingrese el nombre de su perro");
// let calle = prompt("Ingrese la/las direcciones donde vive");

// function Perro(nombre, calle) {
//       this.nombre = nombre;
//       this.calle = calle;
//    }

// const Perro1 = new Perro (nombre, calle);

// console.log(Perro1);
// console.log(Perro1.nombre);
// console.log(Perro1.calle);

//////////////////////////////////////////////////

// .....................MÉTODOS

// LOS MÉTODOS DE LOS OBJETOS SON TÉCNICAMENTE FUNCIONES, SÓLO QUE SE LIMITAN A PODER SER EJECUTADOS SÓLO DESDE EL MISMO OBJETO
// UN OBJETO QUE NO SEA   

// let nombre = prompt("Ingrese el nombre de su perro");
// let calle = prompt("Ingrese la/las direcciones donde vive");
// let anioNacimiento = prompt("Ingrese el año de nacimiento");

// function Perro(nombre, calle, anio) {
//       this.nombre = nombre;
//       this.calle = calle;
//       this.anio = anio;

//       this.calcularEdad = () => { return 2022 - anio }
//    }

// const Perro1 = new Perro (nombre, calle, anioNacimiento);

// console.log(Perro1);
// console.log(Perro1.nombre);
// console.log(Perro1.calle);
// console.log(Perro1.anio);
// console.log(Perro1.calcularEdad())


// MÉTODOS EN OBJETOS JS    .length()  .toLowerCase()   .toUpperCase()

// let cadena = "Hola perrix";

// console.log(cadena.length);
// console.log(cadena.toLowerCase());
// console.log(cadena.toUpperCase());

//////////////////////////////////////////////////

// .....................OPERADOR IN Y FOR...IN

// OPERADOR IN DEVUELVE TRUE SI LA PROPIEDAD ESPECIFICADA EXISTE EN EL OBJETO

// function Perro(nombre, calle, anio) {
//       this.nombre = nombre;
//       this.calle = calle;
//       this.anio = anio;

//       this.calcularEdad = () => { return 2022 - anio }
//    }

// const Perro1 = new Perro ("Daniel", "AV 7 1989", 1999);

//  if ("nombre" in Perro1) {
//     console.log("El nombre de este perro es: " + Perro1.nombre);
//  }

// // EL BUCLE FOR...IN PERMITE ACCEDER A TODAS LAS PROPIEDADES DEL OBJETO, OBTENIENDO UNA PROPIEDAD POR CADA ITERACIÓN

// for (const propiedad in Perro1) {
//    // SI INTENTAMOS ACCEDER A LA PROPIEDAD POR MEDIO DE Perro1.propiedad INTENTARÁ ACCEDER A ALGUNA PORPIEDAD CON NOMBRE PROPIEDAD
//    // POR ESO HAY QUE ACCERDER A LAS PROPIEDADES CON []  = Perro1[PROPIEDAD]
//    console.log(Perro1[propiedad]);
// }

//////////////////////////////////////////////////

// ............................CLASES 

// SON UNA EQUIVALENCIA AL EMPLEO DE FUNCIÓN CONSTRUCTORA Y PERMITE DEFINIR DISTINTOS TIPOS DE MÉTODOS
// SE CREA LA CLASE PERRO Y DENTRO DE ELLA CREAMOS EL MÉTODO CONSTRUCTOR  (MÉTODO CONSTRUCTOR REEMPLAZA A LA FUNCIÓN CONSTRUCTORA)

// class Perro {

//    // FUNCIÓN CONSTRUCTORA ES REEMPLAZADA POR EL MÉTODO CONSTRUCTOR
//    constructor (nombre, edad, calle) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.calle = calle;
//    }

//    // LOS MÉTODOS EN LAS CLASES NO REFERENCIAN A PROPIEDADES, SE DECLARAN DENTRO DEL BLOQUE SIN LA PALABRA FUNCTION
//    hablar() {
//       return "Mi nombre es: " + this.nombre;
//    }
// }

// const Perro1 = new Perro ("Daniel", 1999, "AV 7 1989");


// for (const propiedad in Perro1) {
//    // SI INTENTAMOS ACCEDER A LA PROPIEDAD POR MEDIO DE Perro1.propiedad INTENTARÁ ACCEDER A ALGUNA PORPIEDAD CON NOMBRE PROPIEDAD
//    // POR ESO HAY QUE ACCERDER A LAS PROPIEDADES CON []  = Perro1[PROPIEDAD]
//    console.log(Perro1[propiedad]);
// }
// console.log(Perro1.hablar());

//////////////////////////////////////////////////

// EJ DE CLASE PRODUCTO

// class Producto {

//    constructor (nombre, codigo, precio) {
//       this.nombre = nombre.toLowerCase();
//       this.codigo = codigo;
//       this.precio = precio;
//       this.vendido = false;
//    }

//    sumaIva() {
//       this.precio = this.precio * 1.21;
//    }

//    vender() {
//       this.vendido = true;
//    }
// }

// const producto1 = new Producto("Yerba", "25544", 255);

// console.log(producto1.nombre);

// console.log(producto1.precio);
// producto1.sumaIva();
// console.log(producto1.precio);

// console.log(producto1.vendido);
// producto1.vender();
// console.log(producto1.vendido);


//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//                        .....................ARRAYS.....................

// TIPO DE DATO QUE SIRVE PARA ALMACENAR VALORES EN FORMA DE LISTA (números, strings, booleanos, objetos, lista de listas)
// UN ARRAY ES UN OBJETO
// SE PUEDEN AGRGAR Y QUITAR ELEMENTOS EN TODO MOMENTO.  ESTOS TIENEN UN ÍNDICE QUE INICIA EN 0

// DECLARACIÓN DE UN ARRAY

// MÁXIMO ÍNDICE ES 4 (NÚMERO DE ELEMENTOS -1)
// let biblioteca = [ "HP 1", "HP 2", "HP 3", "HP 4", "HP 5"];

// console.log(biblioteca);
// console.log(biblioteca.length);

// // ACCEDER A UN ARRAY POR SU ÍNDICE (un índice que representa un objeto que no existe devuelve undefined)
// console.log(biblioteca[3]);

// let random = [1, "perro", true, 9];

// console.log(random);
// console.log(random.length);
// console.log(random[1]);


// // PARA RECORRER UN ARRAY ELEMENTO X ELEMENTO SE USA UN CICLO FOR

// // // RECORRIENDO ARRAY RANDOM
// // for (let i = 0; i < 4; i++) {

// //    // ACCEDEMOS A LA POSICIÓN I PORQUE DEVOLVERÁ 0, 1, 2 Y 3
// //    console.log(random[i]);
// // }

// // AL SER DINÁMICOS LOS ARRAYS (agregar y quitar elementos constantemente).. 
// // ..ES MAS ÚTIL ACCEDER AL LARGO DEL ARRAY QUE A UN NÚMERO ESPECÍFICO
// for (let i = 0; i < random.length; i++) {

//    // ACCEDEMOS A LA POSICIÓN I PORQUE DEVOLVERÁ 0, 1, 2 Y 3
//    console.log(random[i]);
// }
// // LA PROPIEDAD LENGHT EN UN ARRAY IDENTIFICA CUANTOS ELEMENTOS TIENE EL ARRAY


// // PARA AGREGAR ELEMENTOS 
// random.push("Chupame la verga");
// // .push AGREGA ELEMENTOS AL FINAL DE ARRAY 
// // PORQUE SI AGREGAS ELEMENTOS AL PRINCIPIO DEL ARRAY, ESTE MODIFICA EL ÍNDICE DE LOS DEMÁS ELEMENTOS

//// TAMBIÉN SE PUEDE AGREGAR UN ARRAY DE ELEMENTOS AL ARRAY
//// ESTO SÓLO AGREGA UN ELEMENTO AL ARRAY, PORQUE UN ARRAY(de objetos), ES UN ELEMENTO MÁS
// random.push(["Perrito malvado", "perro"])


// // PARA ELIMINAR EL ÚLTIMO ELEMENTO DEL ARRAY
// random.pop("Chupame la verga")

/////////////////////////////////////////////////////////////////

// ...............................MÉTODO SPLICE()

// PARA ELIMINAR UNO O VARIOS ELEMENTOS
// RECIBE 2 PARÁMETROS 
// 1ro = ÍNDICE DONDE SE UBICA EL MÉTODO PARA TRABAJAR
// 2do = CANTIDAD DE ELEMENTOS A ELIMINAR DESDE LA POSICIÓN ASIGNADA

// const nombres = ["Pedro", "Gabriel", "Mirtha", "Mariela"];

// const nombresitos = ["Pedrito", "Gabrielito", "Mirtita", "Marielita"];


// console.log(nombres);

// nombres.splice(1, 1);

// console.log(nombres);

// console.log(nombres.splice(0, 1));

// console.log(nombres);

// console.log(nombresitos);
// // PARA ELIMINAR TODOS LOS ELEMENTOS DEL ARRAY
// console.log(nombresitos.splice(0, nombresitos.length));
// console.log(nombresitos);

/////////////////////////////////////////////////////////////////

// // ..............................MÉTODO JOIN()

// // PERMITE GENERAR UN STRING CON TODOS LOS ELEMENTOS DEL ARRAY SEPARADOS POR EL VALOR QUE PASAMOS POR PARÁMETRO

// const nombres = ["Pedro", "Gabriel", "Mirtha", "Mariela"];

// const nombresitos = ["Pedrito", "Gabrielito", "Mirtita", "Marielita"];

// console.log(nombresitos);

// console.log(nombresitos.join("···"));

/////////////////////////////////////////////////////////////////

// ................................MÉTODO CONCAT()

// PARA CONCATENAR DOS ARRAYS EN UN ÚNICO ARRAY

// const nombres = ["Pedro", "Gabriel", "Mirtha", "Mariela"];

// const nombresitos = ["Pedrito", "Gabrielito", "Mirtita", "Marielita"];

// const nombrazos = ["Pedrazo", "Gabrielazo", "Mirtaza", "Marielaza"];

// console.log(nombres);
// console.log(nombres.concat(nombresitos));

// GUARDAMOS LA CONCATENACIÓN EN UNA VARIABLE PARA ESO LUEGO CONCATENARLO CON EL ARRAY NOMBRAZOS
// let nombres2 = nombres.concat(nombresitos);
// console.log(nombres2);

// let nombres3 = console.log(nombres2.concat(nombrazos));

// console.log(nombres3);

/////////////////////////////////////////////////////////////////

// ...............................MÉTODO SLICE()

// SIMILAR AL MÉTODO SPLICE
// DEVUELVE UNA COPIA DEL ARRAY DE LOS ELEMENTOS SELECCIONADOS
// TAMBIÉN RECIBE DOS PARÁMETROS, ÍNDICE DONDE INICIA E ÍNDICE DONDE FINALIZA EL MÉTODO
// NO INCLUYE EL FIN

// const nombresitos = ["Pedrito", "Gabrielito", "Mirtita", "Marielita"];

// console.log(nombresitos);


// console.log(nombresitos.slice(1,3));

/////////////////////////////////////////////////////////////////

// ..............................MÉTODO INDEXOF()

// PERMITE OBTENER EL ÍNDICE DE UN ELEMENTO EN UN ARRAY
// RECIBE COMO PARÁMETRO EL ELEMENTO QUE QUEREMOS BUSCAR

// SI EXISTE RETORNARÁ SU ÍNDICE
// SI NO EXISTE RETORNARÁ -1

// const nombresitos = ["pedrito", "gabrielito", "mirtita", "marielita"];

// console.log(nombresitos);

// console.log(nombresitos.indexOf("mirtita"));

// let nombreEliminar = prompt("Ingrese el nombre que desea eliminar").toLowerCase;

// let indice = nombresitos.indexOf(nombreEliminar);

// if (indice != -1) {

//    nombresitos.splice(indice, 1);

// } else {
//    alert("No existe ese nombre");
// }

// console.log(nombresitos);

/////////////////////////////////////////////////////////////////

// .............................MÉTODO INCLUDES()

// PERMITE SABER SI UN ELEMENTO QUE RECIBO COMO PARÁMETRO EXISTE O NO DENTRO DE UN ARRAY
// RETORNA TRUE O FALSE

// const nombresitos = ["pedrito", "gabrielito", "mirtita", "marielita"];

// console.log(nombresitos);

// console.log(nombresitos.includes("gabrielito"));

/////////////////////////////////////////////////////////////////

// .............................MÉTODO REVERSE()

// INVIERTE EL ORDEN DE LOS ELEMENTOS DENTRO DEL ARRAY
// ES UN MÉTODO DESTRUCTIVO, MODIFICA EL ORDEN DEL ARRAY PERMANENTEMENTE

// const nombresitos = ["pedrito", "gabrielito", "mirtita", "marielita"];

// console.log(nombresitos);

// console.log(nombresitos.reverse());

// console.log(nombresitos);

/////////////////////////////////////////////////////////////////

// ............................ARRAYS + OBJETOS

// class Producto {

//    constructor(nombre, precio, stock) {
      
//       this.nombre = nombre;
//       this.precio = precio;
//       this.stock = stock;
//    }
// }

// let producto1 = new Producto("yerba", 432, 20);

// let producto2 = new Producto("chocolate", 307, 25);

// let producto3 = new Producto("preservativos", 350, 30);

// let producto4 = new Producto("tampones", 270, 40);

// let productos = [producto1, producto2, producto3, producto4];

// console.log(productos);
// console.log(productos.length);

// // PARA RECORRER CADA OBJETO DEL ARRAY
// for (let i = 0; i < productos.length; i++) {
//    console.log(productos[i]);
// }

// // PARA OBTENER LOS NOMBRES Y PRECIOS
// for (let i = 0; i < productos.length; i++) {
//    console.log(productos[i].nombre);
//    console.log(productos[i].precio);
// }

// let nombreProducto = prompt("Ingrese el nombre del producto que desea buscar");
// // ...........................MÉTODO FINDINDEX

// // ES IGUAL QUE INDEXOF PERO USADO EN OBJETOS
// // CONSULTAMOS DENTRO DEL ARRAY QUE EL NOMBRE ALMACENADO SEA == AL NOMBRE INGRESADO X USUARIO 
// let indice = productos.findIndex(producto => producto.nombre == nombreProducto);

// if (indice != -1) {
//    productos.splice(indice, 1);
// } else {
//    alert("No existe ese producto");
// }
// console.log(productos);

////////////////////////////////////////////

// ..............................MÉTODO FOR...OF

// PERMITE RECORRER UN ARRAY EJECUTANDO UN BLOQUE DE CÓDIGO POR CADA ELEMENTO DEL OBJETO

// for (producto of productos) {
//    console.log(producto.nombre);
//    console.log(producto.precio);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////

//                .....................FUNCIONES DE ORDEN SUPERIOR.......................... 

// ..............................ABSTRACCIÓN
// ABSTRAERNOS ES PODER EMPLEAR UN MÉTODO QUE NO VEMOS DIRECTAMENTE

// let total = 0;

// // CAMBIANDO ESTA FUNCIÓN QUE NOSOTROS DECLARAMOS
// for (let i = 1; i <= 10; i++) {
//    total += i;
// }

// console.log(total);

// // POR UNA FUNCIÓN QUE SOLO SABEMOS LO QUE HACE
// console.log(total.toLowerCase())


// ................................FUNCIONES DE ORDEN SUPERIOR

// AQUELLA QUE RETORNA UNA FUNCIÓN O RECIBE UNA COMO PARÁMETRO
// ESTE TIPO DE FUNCIONES PERMITEN ABSTRAERSE SOBRE ACCIONES Y NO SÓLO VALORES

// FUNCIÓN QUE RETORNA UNA FUNCIÓN
// function mayorQue(n) {
//    return (m) => m > n;
// }

// let mayorQueDiez = mayorQue(10);

// let mayorQueVeinte = mayorQue(20);

// // EL VALOR QUE INGRESAMOS () LO REEMPLAZA POR (m) del return
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(9));
// console.log(mayorQueDiez(10.5));

// console.log(mayorQueVeinte(21));
// console.log(mayorQueVeinte(11));

//////////////////////////////////////////

// SEGÚN EL PARÁMETRO DE OP RETORNARÁ UNA FUNCIÓN QUE SUME O QUE RESTE
// function asignarOperacion(op) {
//    if (op == "sumar") {
//       return (a, b) => a + b;
//    } else if (op == "restar") {
//       return (a, b) => a - b;
//    }
// }

// // SE ASIGNA LA FUNCIÓN DE SUMA
// let suma = asignarOperacion("sumar");

// // SE ASIGNA LA FUNCIÓN DE RESTA 
// let resta = asignarOperacion("restar");

// console.log(suma(100, 27));

// console.log(resta(200, 137));

//////////////////////////////////////////

// FUNCIÓN PARA ASIGNAR IMPUESTOS 

// function asignarImpuesto (porcentaje) {
//    return (precio) => precio + ((porcentaje * precio) / 100);
// }

// let iva = asignarImpuesto(21);

// let importacion = asignarImpuesto(40);

// let precio = 50;

// console.log("Precio con iva: " + iva(50));
// console.log("Precio con importación: " + importacion(50));

// let nuevoPrecio = precio + iva(precio);

// console.log("El nuevo precio es: " + nuevoPrecio);

///////////////////////////////////////////////////

// .............................RECIBIR FUNCIONES POR PARÁMETRO 

// SIGNIFICA ESCRIBIR FUNCIONES QUE PUEDAN RECIBIR FUNCIONES POR PARÁMETRO

// ...................PARA RECORRER UN ARRAY Y HACER ALGO CON CADA ELEMENTO 

// function porCadaUno (array, funcion) {
//    for (const el of array) {
//       funcion(el);
//    }
// };

// let arrayNombres = ["Ricardo", "Pedro", "Gabriela"];

// let arrayNumeros = [6, 22, 69];


// let funcion = (elemento) => {
//    alert(elemento);
// };

// let multiplicarPor2 = (numero) => {
//    alert(parseInt(numero) * 2);
// };

// porCadaUno(arrayNombres, funcion);

// porCadaUno(arrayNumeros, multiplicarPor2);


// // ES LO MISMO HACER
//    let multiplicarPor3 = (numero) => {
//       alert(parseInt(numero) * 3);
//    }; 
// // QUE
// porCadaUno(arrayNumeros, (numero) => {
//    alert(parseInt(numero) * 3);
// });


///////////////////////////////////////////////////

// ..................................MÉTODO FOR EACH()

// ITERA SOBRE EL ARRAY Y POR CADA ELEMENTO EJECUTA LA FUNCIÓN QUE ENVIEMOS POR PARÁMETRO
// ESTA FUNCIÓN RECIBE EL ELEMENTO DEL ARRAY QUE SE ESTA RECCORRIENDO
// RECIBE UNA FUNCIÓN COMO PARÁMETRO
// ESA FUNCIÓN RECIBE COMO PARÁMETRO UN ELEMENTO DEL ARRAY

// let arrayNombres = ["Ricardo", "Pedro", "Gabriela"];

// let arrayNumeros = [6, 22, 69];

// arrayNombres.forEach ((elemento) => {
//    console.log(elemento);
// })

///////////////////////////////////////////////////

// ..................................MÉTODO FIND()  

// RECIBE UNA FUNCIÓN DE COMPARACIÓN POR PARÁMETRO. CAPTURA EL ELEMENTO QUE SE ESTÁ RECORRIENDO Y RETORNA TRUE O FLASE SEGÚN LA COMPARACIÓN EJECUTADA.
// EL MÉTODO RETORNA EL PRIMER ELEMENTO QUE CUMPLA CON ESA CONDICIÓN

// DEVUELVE LA PRIMER BÚSQUEDA QUE ENCUENTRA

// let alumnos = [
//    {
//       nombre: "Ricardo",
//       edad: 36,
//    },{
//       nombre: "Ramiro",
//       edad: 16,      
//    },{
//       nombre: "Ruben",
//       edad: 26,
//    }
// ];

// const resultado = alumnos.find ((elemento => {
//    return elemento.nombre == "Ruben";
// }));

// console.log(resultado);

// if (resultado !== undefined) {
//    console.log("LO ENCONTRÓ");
//    alert("LO ENCONTRÓ");
// } else {
//    console.log("NO LO ENCONTRÓ");
//    alert("NO LO ENCONTRÓ");
// }

// console.log(resultado);

/////////////////////////////////////

// const cursos = [
//    {
//       nombre: "JavaScript",
//       precio: 12000,
//    },
//    {
//       nombre: "ReactJS",
//       precio: 10000,
//    }
// ]

// const resultado = cursos.find ((elemento) => elemento.nombre == "JavaScript");

// const resultado2 = cursos.find ((elemento) => elemento.nombre == "ReactJS");

// console.log(resultado);

// console.log(resultado2);

////////////////////////////////////////////////////////////

// .........................................MÉTODO FILTER()  

// AL IGUAL QUE FIND() RECIBE UNA FUNCIÓN COMPARADORA POR PARÁMETRO Y RETORNA UN NUEVO ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICIÓN
// SI NO HAY COINCIDENCIAS RETORNARÁ UN VALOR VACÍO
// BUSCAR ALUMNOS MAYORES DE 25 AÑOS 


// let alumnos = [
//    {
//       nombre: "Ricardo",
//       edad: 36,
//    },{
//       nombre: "Ramiro",
//       edad: 16,      
//    },{
//       nombre: "Ruben",
//       edad: 26,
//    }
// ];

// const alumnosMayoresDe25 = alumnos.filter ((elemento) => {
//    return elemento.edad > 25;
// });

// console.log(alumnosMayoresDe25);

////////////////////////////////////////////////////////////

// ...........................................MÉTODO SOME()   

// IGUAL QUE FIND() RECIBE UNA FUNCIÓN DE BUSQUEDA
// EN VEZ DE RETORNAR EL ELEMENTO ENCONTRADO, RETORNA TRUE O FALSE SEGÚN EL RESULTADO DE LA ITERACIÓN


// FUNCIÓN DE BÚSQUEDA DE UN ALUMNO EN ESPECÍFICO Y RETORNA TRUE O FALSE

// let alumnos = [
//    {
//       nombre: "Ricardo",
//       edad: 36,
//    },{
//       nombre: "Ramiro",
//       edad: 16,      
//    },{
//       nombre: "Ruben",
//       edad: 26,
//    }
// ];

// const estaRamiro = alumnos.some ((elemento) => {
//    return elemento.nombre == "Ramiro";
// });

// console.log(estaRamiro);

// const estaFernando = alumnos.some ((elemento) => {
//    return elemento.nombre == "Fernando";
// });

// console.log(estaFernando);

////////////////////////////////////////////////////////////

// ..........................................MÉTODO MAP() 

// DEVUELVE UN NUEVO ARRAY CON TODOS LOS ELEMENTOS DEL ORIGINAL TRANSFORMADOS SEGÚN LAS OPERACIONES DE LA FUNCIÓN ENVIADA POR PARÁMETRO

// DEVUELVE UN ARRAY SOLO CON NOMBRES 
// LE AGREGA LA PROPIEDAD NOMBRE Y APELLIDO A CADA ELEMENTO CONCATENANDO NOMBRE Y APELLIDO DE C/U


// let alumnos = [
//    {
//       nombre: "Ricardo",
//       apellido: "Gargaras",
//       edad: 36,
//    },{
//       nombre: "Ramiro",
//       apellido: "Gomez",
//       edad: 16,      
//    },{
//       nombre: "Ruben",
//       apellido: "Gatusso",
//       edad: 26,
//    }
// ];

// const nombreAlumnos = alumnos.map ((elemento) => {

//    elemento.nombreYApellido = elemento.nombre + " " + elemento.apellido;

//    return elemento;
// })

// console.log(alumnos);


/////////////////////////////////////////////////////////////


// const cursos = [
//    {
//       nombre: 'Javascript', 
//       precio: 15000
//    },
//    {
//       nombre: 'ReactJS', 
//       precio: 22000
//    },
//    {
//       nombre: 'AngularJS', 
//       precio: 22000
//    },
//    {
//       nombre: 'Desarrollo Web',
//       precio: 16000
//    },
// ]

// const nombres = cursos.map ((elemento) => elemento.nombre);

// console.log(cursos);

// console.log(nombres);
// // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

// const actualizado = cursos.map ((elemento) => {

//    elemento = elemento.precio *= 1.25;

//    return elemento;
// });

// console.log(actualizado);


////////////////////////////////////////////////////////////////////

// .................................................MÉTODO REDUCE() 

// PERMITE OBTENER UN ÚNICO VALOR TRAS ITERAR SOBRE EL ARRAY. FUNCIONA COMO UN MÉTODO QUE RESUME EL ARRAY A UN ÚNICO VALOR DE RETORNO.
// RECIBE 2 PARÁMETROS:

// EL PRIMER PARÁMETRO ES LA FUNCIÓN QUE ORDENA QUÉ QUEREMOS RESUMIR DEL ARRAY. RECIBE UN PARÁMETRO QUE FUNCIONA COMO ACUMULADOR Y..
//.. EL ELEMENTO DEL ARRAY QUE ITERAMOS

// EL SEGUNDO PARÁMETRO ES EL VALOR INICIAL DEL ACUMULADOR

// const numeros = [1, 2, 3, 4, 5, 6];

// const total = numeros.reduce ((acumulador, elemento) => {

//    return acumulador + elemento;
// }, 0);

// console.log(total);

/////////////////////////////////////////////////////////////

// MÉTODO REDUCE() EN UN ARRAY

   // let alumnos = [
   //    {
   //       nombre: "Ricardo",
   //       apellido: "Gargaras",
   //       edad: 36,
   //       email: "Ricardito@gmail.com"
   //    },{
   //       nombre: "Ramiro",
   //       apellido: "Gomez",
   //       edad: 16,
   //       email: "Rama@gmail.com"      
   //    },{
   //       nombre: "Ruben",
   //       apellido: "Gatusso",
   //       edad: 26,
   //       email: "Ruben@gmail.com"
   //    }
   // ];

   // const NombresYEmails = alumnos.reduce ((acumulador, elemento) => {
   //    acumulador.push ({
   //       nombre: elemento.nombre,
   //       email: elemento.email,
   //    });
      
   //    return acumulador;
   // }, []);

   // console.log(NombresYEmails);

///////////////////////////////////////////////////////////////////

// ...................................................MÉTODO SORT() 

// PERMITE REORDENAR UN ARRAY SEGÚN UN CRITERIO QUE DEFINAMOS
// RECIBE UNA FUNCIÓN DE COMPARACIÓN POR PARÁMETRO QUE, A LA VEZ RECIBE DOS ELEMENTOS DEL ARRAY.
// LA FUNCIÓN RETORNA UN VALOR NUMÉRICO (1, -1, 0) QUE INDICA QUÉ ELEMENTO SE POSICIONA ANTES O DESPUÉS




// SI LA FUNCIÓN DE COMPARACIÓN RETORNA -1   A SE POSICIONA ANTES DE B


// SI LA FUNCIÓN DE COMPARACIÓN RETORNA 0   DEJA TODO IGUAL


// SI LA FUNCIÓN DE COMPARACIÓN RETORNA 1   B SE POSICIONA ANTES DE A





// !!!!!!!!MÉTODO DESTRUCTIVO, MODIFICA EL ARRAY SOBRE EL CUAL SE LLAMA!!!!!!!

// ORDENAR LOS ALUMNOS DE MENOR A MAYOR

// let alumnos = [
//    {
//       nombre: "Ricardo",
//       apellido: "Gargaras",
//       edad: 32,
//    },{
//       nombre: "Ramiro",
//       apellido: "Gomez",
//       edad: 19,      
//    },{
//       nombre: "Ruben",
//       apellido: "Gatusso",
//       edad: 26,
//    },{
//       nombre: "Marcos",
//       apellido: "Gaturro",
//       edad: 14,
//    }
// ];

// console.log(alumnos);

// alumnos.sort ((a, b) => {

//    if (a.edad > b.edad) {
//       return 1;
//    } else if (a.edad < b.edad) {
//       return -1;
//    } else {
//       return 0;
//    }
// });


/////////////////////////////////////////////////////////

// ORDENAR ALFABÉTICAMENTE POR NUEVO ELEMENTO NOMBRE Y APELLIDO DENTRO DE CADA OBJETO

// let alumnos = [
//    {
//       nombre: "Ciruela",
//       apellido: "Gargaras",
//       edad: 36,
//    },{
//       nombre: "Ramiro",
//       apellido: "Pomez",
//       edad: 16,      
//    },{
//       nombre: "Aurelio",
//       apellido: "Latusso",
//       edad: 26,
//    },{
//       nombre: "Marcos",
//       apellido: "Gaturro",
//       edad: 14,
//    }
// ];

// const nuevosAlumnos = alumnos.map ((elemento) => {

//    elemento.nombreYApellido = elemento.nombre + " " + elemento.apellido;

//    return elemento;
// });

// console.log(alumnos);

// nuevosAlumnos.sort ((a, b) => {

//    if (a.nombreYApellido > b.nombreYApellido) {
//       return 1;
//    } else if (a.nombreYApellido < b.nombreYApellido) {
//       return -1;
//    } else {
//       return 0;
//    }
// })

// console.log(nuevosAlumnos);

///////////////////////////////////////////////////////////////////

// .......................................OBJETO MATH

// JAVASCRIPT PROVEE EL OBJETO MATH QUE FUNCIONA COMO UN CONTENEDOR DE HERRAMIENTAS Y MÉTODOS PARA REALIZAR OPERACIONES MATEMÁTICAS

// PERMITE REALIZAR OPERACIONES MÁS COMPLEJAS

////////////////////////////////////////////////

// ........................................MATH.MIN() / MATH.MAX()

// ..................MATH.MIN() 

// RETORNA EL VALOR MÍNIMO

///////////////////////

// ..................MATH.MAX()

// RETORNA EL VALOR MÁXIMO

///////////////////////

// TAMBIÉN SE PUEDEN REFERENCIAS LOS VALORES DE:

// INFINITY (infinito positivo)  

// -INFINITY (infinito negativo)

////////////////////////////////////////////////

// ........................................CEIL() / FLOOR() / ROUND()

// ..................MATH.CEIL()

// RETORNA EL ENTERO MAYOR O IGUAL MÁS PRÓXIMO

///////////////////////

// ..................MATH.FLOOR()

// RETORNA EL ENTERO MÁS CERCANO REDONDEADO HACIA ABAJO

///////////////////////

// ..................MATH.ROUND()

// RETORNA EL VALOR DE UN NÚMERO REDONDEADO AL ENTERO MÁS CERCANO

////////////////////////////////////////////////

// ..........................................SQUARE ROOT()

// ..................MATH.SQRT()

// RETORNA LA RAÍZ CUADRADA DE UN NÚMERO

////////////////////////////////////////////////

// ..........................................RANDOM()

// ...................MATH.RANDOM()

// GENERA UN NÚMERO ALEATORIO ENTRE 0 Y 1


// 0 ES EL LÍMITE INCLUSIVO

// 1 ES EL LÍMITE EXCLUSIVO


// PARA GENERAR NÚMEROS ALEATORIOS EN UN RANGO DESEADO SE MULTIPLICA EL RESULTADO POR EL RANGO DESEADO

// NÚMEROS ENTRE 0 Y 10

// console.log(Math.random() * 10);

// NÚMEROS ENTRE 0 Y 50

// console.log(Math.random() * 50);

// TAMBIÉN SE PUEDE SUMAR EL LÍMITE INFERIOR SI SE NECESITA

// NÚMEROS ENTRE 20 Y 60
// console.log(Math.random() * 40 + 20);

///////////////////////////////////////////////////////////////////

// ...........................................CLASE DATE()

// LOS MESES COMIENZAN EN 0 (enero) Y TERMINAN EN 11 (diciembre)

// LOS DÍAS COMIENZAN A PARTIR DE 1

// 1ro AÑO

// 2do MES

// 3ro DÍA


// DATE() ES UN OBJETO, LO CUAL REQUIERE SER INSTANCIADO

// const fechaHoy = new Date();

// console.log("La fecha de hoy es: " + fechaHoy);

// // TAMBIÉN DEVUELVE LA FECHA ACTUAL
// // console.log(new Date())

// const fechaAyer = new Date (2022, 5, 10);

// console.log("La fecha de ayer es: " + fechaAyer);

// const casiNavidad = new Date (2022, 12, 24, 23,59,00);

// console.log("Esto es casi navidad: " + casiNavidad);


// ////////////////////////////////////////////////

// // ................................MÉTODOS DE DATE()


// //........................GETMONTH()

// // RETORNARÁ EL NÚMERO QUE REPRESENTA EL MES (0-11)

// console.log("El mes es: " + fechaAyer.getMonth());

// ////////////////////////////////////

// //........................GETFULLYEAR()

// // RETORNARÁ EL NÚMERO QUE REPRESENTA EL AÑO CREADO

// console.log("El año es: " + fechaAyer.getFullYear());

// ////////////////////////////////////

// //........................GETDAY()

// // RETORNARÁ EL NÚMERO QUE REPRESENTA EL DÍA CREADO

// console.log("El día es: " + fechaAyer.getDay());


////////////////////////////////////////////////////////////////////////////////////////////////////

//                ....................... D O M .......................... 

// ESTRUCTURA DE OBJETOS GENERADA POR EL NAVEGADOR 
// REPRESENTA LA PÁGINA HTML ACTUAL

// PARA ACCEDER AL HTML
// console.log(document);

// PARA ACCEDER AL BODY
// console.log(document.body);

/////////////////////////////////////////

// ...............................TIPOS DE NODOS 

// .............DOCUMENT

// NODO RAÍZ DEL QUE DERIVAN TODOS LOS DEMÁS NODOS DEL ARBOL

// console.log(document);

//////////////////////////

// ................ELEMENT

// REPRESENTA CADA UNA DE LAS ETIQUETAS HTML PUEDE CONTENER ATRIBUTOS Y DERIVAR OTROS NODOS DE ÉL

// console.log(document.body);
// DENTRO DEL BODY SE VERÁN TODOS LOS DEMÁS ELEMENTOS

//////////////////////////

// ................ATRIBUTO

// SE DEFINE UN NODO DE ESTE TIPO PARA REPRESENTAR CADA UNO DE LOS ATRIBUTOS DE LAS ETIQUETAS HTML
// UNO POR CADA PAR ATRIBUTO=VALOR   EJ type="text"

// <input type="text"></input>

//////////////////////////

// ................TEXT

// NODO QUE CONTIENE TEXTO ENCERRADO POR UNA ETIQUETA HTML

// <p>Hola</p>
// El  <p></p>  VA A SER UN NODO
// EL   Hola    VA A SER OTRO NODO (el que contiene el texto HTML)

//////////////////////////

// ................COMMENT

// REPRESENTA TODOS LOS COMENTARIOS INLCLUIDOS EN LA PÁGINA HTML

/////////////////////////////////////////////

// .....................ACCESO AL DOM

// MÉTODOS PARA ACCEDER A LOS ELEMENTOS DEL DOM


// ACCESO POR: 

// .............ID
// devuelve solo un elemento porque es ID

// getElementById();

// let divHijo1 = document.getElementById("divHijo1");

// console.log(divHijo1);

///////////////////

// .............CLASS
// devuelve uno o más elementos

// getElementSByClass();

// let divsPadres = document.getElementsByClassName("div-padre");

// console.log(divsPadres);

// let aches = document.getElementsByClassName("ache");

// console.log(aches);

// PARA ACCEDER A UNO EN ESPECÍFICO SE ACCEDE COMO A LOS ELEMENTOS DEL ARRAY

// console.log(divsPadres[1]);
// accede al segundo (1er índice = 0)

///////////////////

// .............TAG
// devuelve uno o más elementos

// getElementSByTagName();

// let divsTodos = document.getElementsByTagName("div");

// console.log(divsTodos);

// BUSCA DIV 3
// console.log(divsTodos[4]);

// CICLO FOR...OF PARA RECORRER TODOS LOS DIVS

// for (const div of divsTodos) {
//    console.log(div);
// }

//////////////////////////////////

// let padres = document.getElementsByClassName("div-padre");

// for (const padre of padres) {
//    console.log(padre.innerHTML);
// }

/////////////////////////////////

// ....................PROPIEDAD INNERTEXT()

// PROPIEDAD innerText DE UN NODO NOS PERMITE MODIFICAR SU NODO DE TEXTO

// let ps = document.getElementsByTagName("p");

// let strongs = document.getElementsByTagName("strong");

// // muestra el texto plano de cada p y le agrega !!!!  en el dom
// for (const p of ps) {
//    console.log(p.innerText += "!!!!!");
// }

// lo muestra distinto (muestra todo el html (espacios y todo))  solo en consola
// for (const p of ps) {
//    console.log(p.innerHTML + "???????");
// }

// console.log(strongs);

// for (const p of ps) {
//    p.innerHTML += "<strong> !!!!</strong>";
// }

// console.log(strongs);

/////////////////////////////////

// let div = document.getElementById("div1");

// let div2 = document.getElementById("div2");

// div.innerHTML += "<h3>Titulo</h3>";
// div.innerHTML += "<p>Titulito</p>";

// // se le agrega al div2 un h4 con id
// div2.innerHTML += "<h4 id='hcuatro'>Este es el H4</h4>";

// // se accede a ese id
// let hcuatro = document.getElementById("hcuatro");

// console.log(hcuatro);

// // se modifica el texto de adentro 
// hcuatro.innerText = "TEXTO EDITADO";

//////////////////////////////////

// ............................BYCLASSNAME()

// let divs = document.getElementsByTagName("div");

// let div2 = document.getElementById("div2");

// console.log(divs);

// for (const div of divs) {

//    if ( div.className != "") {
//       div.className += " ";
//    }
//    div.className += "nueva-clase";

//    console.log(div);
// }

////////////////////////////////////

// ..........................CREACIÓN DE ELEMENTOS

// PARA CREAR ELEMENTOS SE USA LA FUNCIÓN document.createElement() 
// Y SE INDICA EL NOMBRE DE LA ETIQUETA HTML

// LUEGO SE AGREGA COMO HIJO EL NODO CREADO CON  append()

// let ps = document.getElementsByTagName("p");

// for (const p of ps) {
//    p.innerHTML += "<strong>STRONG</strong>";

      // se agrega el nodo strong al p
//    p.append(strong);
// }

////////////////////////////

// let div2 = document.getElementById("div2");

// let h5 = document.createElement("h5");

// console.log(h5);

// h5.innerText += "Parrafo 2";

// console.log(h5);

// // agrega como hijo el nodo creado (h5) al div2
// div2.append(h5);

//////////////////

// ......................MÉTODO REMOVE()

// PARA ELIMINAR ELEMENTOS (elimina el nodo actual y sus hijos)

// h5.remove();

//....................

// let pe = document.getElementById("pe");

// console.log(pe);

// pe.remove();

// ..............

// let divs = document.getElementsByTagName("div");

// console.log(divs);

// // para eliminar el 5to div
// divs[4].remove();


////////////////////////////////////////

//........................OBTENIENDO DATOS DE UN INPUT

// let inputNombre = document.getElementById("nombrePersona");

// let inputApellido = document.getElementById("apellidoPersona");

// console.log(inputNombre.value);

// console.log(inputApellido.value);

// // para cambiar el valor del input
// inputApellido.value = "Martinez";

// console.log(inputApellido.value);

// inputApellido.value += " Fioretti";

//.................

///////////////////////////

// CREANDO OPCIONES DESDE UN ARRAY

// let padre = document.getElementById("div1");

// let personas = ["Homero", "Marge", "Lisa", "Bart", "Maggie"];


// for (const persona of personas) {

//       let li = document.createElement("li");
//       li.innerHTML = persona;
//       padre.appendChild(li);

// }

///////////////////////////

// UN SELECT QUE CREA CADA OPCION CON EL NOMBRE DE CADA PAIS INTRODUCIDO EN EL ARRAY

// let paises = ["Argentina", "Brasil", "España", "Egipto", "Noruega"];

// let selectPais = document.getElementById("paises");

// // OPCION NULA PARA QUE SOLO APAREZCA SELECCIONAR PAIS
// let seleccionarPais = document.createElement("option");

// seleccionarPais.innerText = "Seleccionar un país";
// seleccionarPais.value = "";
// console.log(seleccionarPais);

// selectPais.append(seleccionarPais);

// paises.forEach ((pais, iPais) => {
//       let option = document.createElement("option");
//       option.innerText = pais;
//       option.value = iPais;

//       selectPais.append(option);
// });

/////////////////////////////

// CREA UNA LISTA CON LOS PAISES 
// let paises = ["Argentina", "Brasil", "España", "Egipto", "Noruega"];

// let ul = document.getElementById("lista");

// for (const pais of paises) {

//       let li = document.createElement("li");
//       li.innerText = pais;
//       ul.append(li);
// }

//////////////////////////////////////

// let nombre = "Francisco";

// // concatenación de string con variable
// console.log(`Hola tu nombre es ${nombre}`);

// PLANTILLAS LITERALES E innerHTML 

// let producto = { 
//       id: 1,
//       nombre: "Arroz",
//       precio: 200
// };

// let contenedor = document.createElement("div");

// contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                         <p> Producto: ${producto.nombre}</p>
//                         <b> $ ${producto.precio}</b>`;

// document.body.appendChild(contenedor);

///////////////////////////////////////

// CREANDO ELEMENTOS DESDE OBJETOS

// const productos = [
//       {
//             id: 1,
//             nombre: "Fideos",
//             precio: 250
//       },
//       {
//             id: 2,
//             nombre: "Arroz",
//             precio: 190
//       },
//       {
//             id: 3,
//             nombre: "Chocolate",
//             precio: 340
//       },
//       {
//             id: 4,
//             nombre: "Leche",
//             precio: 130
//       }
// ];

// for (const producto of productos) {
//       let contenedor = document.createElement("div");
//       contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                               <p> Producto: ${producto.nombre}</p>
//                               <b> $ ${producto.precio}</b>`;
//       document.body.appendChild(contenedor);
// };

// console.log(productos);

/////////////////////////////////////////

// .................................. QUERY SELECTOR()

// SOLO RETORNA EL PRIMER ELEMENTO

// PERMITE SELECCIONAR NODOS CON LA MISMA SINTAXIS QUE SE UTILIZA EN LOS SELECTORES CSS

// let p1 = document.querySelector(" .div-padre .divHijo2 .p1");

// //sólo devuelve uno
//  console.log(p1);

// .................................. QUERY SELECTOR ALL()

// RETORNA TODOS LOS ELEMENTOS QUE CUMPLAN

// let p1 = document.querySelectorAll(" .div-padre .divHijo2 .p1");

// for (p of p1) {
//    console.log(p);   
// }

// console.log(p1);

///////////////////////////////////////////////////////////////////

// .............................................................................EVENTOS

// SON LA MANERA QUE TENEMOS EN JAVASCRIPT DE CONTROLAR LAS ACCIONES DE LOS USUARIOS
// Y CON ESTO DEFINIR UN COMPORTAMIENTO DE LA PÁGINA CUANDO SE PRODUZCAN

// JAVASCRIPT PERMITE ASIGNAR UNA FUNCIÓN A CADA EVENTO       (EVENT HANDLERS)

// JAVASCRIPT PERMITE ESCUCHAR EVENTOS SOBRE ELEMENTOS SELECCIONADOS
// CUANDO SE ESCUCHA EL EVENTO QUE SE ESPERA, SE RECIBE LA FUNCIÓN EN RESPUESTA

// ESTA ESCUCHA SE LA DENOMINA       EVENT LISTENER


// ................MÉTODO() PARA EMPLEARLO

// .............ADDEVENTLISTENER()  .......................................... ES DE ESTA FORMA
// 1er PARÁMETRO = NOMBRE DEL EVENTO

// 2do PARÁMETRO = FUNCIÓN DE RESPUESTA

// let boton = document.getElementById("boton1");

// boton.addEventListener("click", () => {
//       alert("Apretaste el botón");
//       let contenedor = document.getElementById("contenedor");

//       let p = document.createElement("p");
//       p.innerText = "Apretaste el botón"

//       contenedor.append(p);
// });

///////////////////////////////////////

// CON UN ARRAY DE PRODUCTOS CREA UNA LISTA QUE AL PRESIONAR EL BOTÓN MUESTRA CADA PRODUCTO
// CUANDO NO HAY MÁS PRODUCTOS LO INFORMA EN UN ALERT

// let productos = [
//       {
//             nombre: "Producto 1",
//             precio: 500
//       },
//       {
//             nombre: "Producto 2",
//             precio: 300
//       },
//       {
//             nombre: "Producto 3",
//             precio: 100
//       },
//       {
//             nombre: "Producto 4",
//             precio: 200
//       }
// ];

// let contenedor = document.getElementById("contenedor");

// let boton = document.getElementById("boton1");

// // ......... BOTÓN MOSTRAR UN PRODUCTO

// boton.addEventListener( "click", () => {

//       if (productos.length > 0 ) {

//             let producto = productos.pop();

//             agregarProductoAHTML(producto);

//       } else {
//             alert("No hay más productos");
//       }
// });

// // ......... BOTÓN ORDENAR PRODUCTOS

// let botonOrdenar = document.getElementById("boton-ordenar");

// botonOrdenar.addEventListener("click", () => {

//       productos = productos.sort ((a, b) => {

//             if (parseInt(a.precio) > parseInt(b.precio)) {
//                   return -1;
//             } else if (parseInt(a.precio) < parseInt(b.precio)) {
//                   return 1;
//             } 
//                   return 0;
//       });
// });

// // ........ BOTÓN MOSTRAR TODOS LOS PRODUCTOS

// let botonMostrarTodos = document.getElementById("boton-mostrar-todos");

// botonMostrarTodos.addEventListener("click", () => {

//       productos.forEach ((producto) => {
            
//             agregarProductoAHTML(producto);

//       });
// });

// // PARA EVITAR REPETIR EL CÓDIGO QUE CREA UNA UL Y LAS LI DENTRO, SE LO METE TODO DENTRO DE UNA FUNCIÓN

// function agregarProductoAHTML (producto) {                          // PRINCIPIO DRY!!!!!!!!

//       let ul = document.createElement("ul");

//             let li1 = document.createElement("li");
//             li1.innerText = "Nombre: " + producto.nombre;

//             let li2 = document.createElement("li");
//             li2.innerText = "Precio: " + producto.precio;

//             ul.append(li1, li2);

//             contenedor.append(ul);
// };

///////////////////////////////////////////////////////

// ................................ EVENTOS MÁS COMUNES


// ....... MOUSE

// ....... TECLADO

// ....... CHANGE

// ....... INPUT

// ....... SUBMIT

// ....... OTROS



// ..!!..SE PUEDEN DAR TODOS LOS EVENTOS QUE SE QUIERA A UN ELEMENTO..!!..



// ...........................................


// .............. EVENTOS DEL MOUSE ..........

// let input = document.getElementById("apellidoPersona"); 


// ........ MOUSE DOWN / MOUSE UP:  se oprime o suelta el botón del mouse

// // MOUSE UP
// input.addEventListener ("mouseup", () => {
//       alert("Evento mouseup");
// });

// // MOUSE DOWN
// input.addEventListener ("mousedown", () => {
//       alert("Evento mousedown");
// });

// ........ MOUSE OVER / MOUSE OUT: el puntero se mueve sobre/ sale del elemento

// // MOUSE OVER
// input.addEventListener ("mouseover", () => {
//       alert("Evento mouseover");
// });

// // MOUSE OUT
// input.addEventListener ("mouseout", () => {
//       alert("Evento mouseout");
// });

// ........ MOUSE MOVE: movimiento del mouse sobre el elemento activa el evento

// // MOUSE MOVE
// input.addEventListener ("mousemove", () => {
//       alert("Evento mousemove");
// });

// ........ CLICK: luego de mousedown o mouseup sobre un elemento válido

// // MOUSE CLICK
// input.addEventListener ("mouseclick", () => {
//       alert("Evento mouseclick");
// });

// ...........................................


// .............. EVENTOS DEL TECLADO ........


// ........ KEY DOWN: se presiona la tecla

// let input = document.getElementById("apellidoPersona"); 

// input.addEventListener ("keydown", () => {
//             alert("Evento keydown");
//       });

// ........ KEY UP: se suelta la tecla

// let input = document.getElementById("apellidoPersona"); 

// input.addEventListener ("keyup", () => {
//             alert("Evento keyUp");
//       });

// ...........................................


// .............. EVENTOS CHANGE .............


// SE USA PARA LOS INPUT

// EL VALOR CAMBIA CUANDO SE DEJA DE HACER FOCO EN EL INPUT



// ...........................................


// .............. EVENTOS INPUT .............                    (PARA LOS INPUT CONVIENE ESTE)


// ESTE ES MÁS ÚTIL PORQUE EJECUTA LA FUNCIÓN CADA VEZ QUE SE TIPEA EN EL INPUT


// DIFERENCIA ENTRE AMBOS EVENTOS  INPUT != CHANGE

// let input = document.getElementById("apellidoPersona"); 

// // EVENTO CHANGE
// input.addEventListener ("change", () => {
//       alert("Evento change");
// });

// // EVENTO INPUT
// input.addEventListener ("input", () => {
//       console.log("Evento input");
// });



// ...........................................


// .............. EVENTOS SUBMIT ............. 


// SÓLO SE ACTIVA CUANDO UN FORMULARIO ES ENVIADO


// let productos = [
//       {
//             nombre: "producto 1",
//             precio: 500
//       },
//       {
//             nombre: "producto 2",
//             precio: 300
//       },
//       {
//             nombre: "producto 3",
//             precio: 100
//       },
//       {
//             nombre: "producto 4",
//             precio: 200
//       }
// ];


// let input = document.getElementById("apellidoPersona"); 

// let contenedor = document.getElementById("contenedor");


// function agregarProductoAHTML (producto) {                    

//       let ul = document.createElement("ul");

//             let li1 = document.createElement("li");
//             li1.innerText = "Nombre: " + producto.nombre;

//             let li2 = document.createElement("li");
//             li2.innerText = "Precio: " + producto.precio;

//             ul.append(li1, li2);

//             contenedor.append(ul);
// };


// // EVENTO INPUT
// input.addEventListener ("input", () => {
      
//       let valor = input.value;

//       // MUESTRA LOS PRODUCTOS QUE MATCHEAN CON LA BÚSQUEDA
//       let productosBuscados = productos.filter ((producto) => {

//             // // ESTE RETORNA UNA VEZ MATCHEA EL NOMBRE COMPLETO
//             // return producto.nombre.toLowerCase() == valor.toLowerCase();

//             // // ESTE RETORNARÁ PRODUCTOS MATCHEADOS CON EL NOMBRE AUNQUE ESTÉ INCOMPLETO
//             // const indexOf = producto.nombre.indexOf(valor);

//             // if (indexOf !== -1) {
//             //       return false;
//             // }
//             //       return true;

//             // OTRA FORMA DE HACERLO ES CON INCLUDES()
//             return producto.nombre.includes(valor);
//       });
      
//       contenedor.innerHTML = "";

//       // AGREGA LOS PRODUCTOS AL HTML 
//       if (productosBuscados.length > 0) {

//             productosBuscados.forEach ((producto) => {
//                   agregarProductoAHTML(producto);
//             });
//       };
// });


////////////////////////////////////////////////////////////////

// ..............OTROS EVENTOS

// HAY EVENTOS QUE SON ESPECÍFICOS DE CADA NAVEGADOR

//PARA MOSTRAR EL INPUT DONDE SE ESTÁ INGRESANDO LOS DATOS !!!!!!!

// let input = document.getElementById("apellidoPersona");

// let inputs = document.getElementsByClassName("input-prueba");

// function callback (e) {
//       const target = e.target;

//       const value = target.value;

//       console.log(value);
// }

// for (input of inputs) {

//       input.addEventListener ("input", callback);   
// }



// HACER EJEMPLO DE 01:08:00


// // ................


// let productos = [
//       {
//             nombre: "producto 1",
//             precio: 500,
//             codigo: "P-1",
//       },
//       {
//             nombre: "producto 2",
//             precio: 300,
//             codigo: "P-2",
//       },
//       {
//             nombre: "producto 3",
//             precio: 100,
//             codigo: "P-3",
//       },
//       {
//             nombre: "producto 4",
//             precio: 200,
//             codigo: "P-4",
//       }
// ];

// // FUNCION AGREGAR A HTML
// function agregarProductoAHTML (producto) {                    

//       let ul = document.createElement("ul");

//             let li1 = document.createElement("li");
//             li1.innerText = "Nombre: " + producto.nombre;

//             let li2 = document.createElement("li");
//             li2.innerText = "Precio: " + producto.precio;

//             ul.append(li1, li2);

//             contenedor.append(ul);
// };

// function buscarYAgregarProducto () {

//       const valueSelect = select.value;

//       if (valueSelect !== "") {

//             const productoEncontrado = productos.find ((producto) => {
//                   return producto.codigo == valueSelect;
//             });

//             agregarProductoAHTML(productoEncontrado);
//       }
// }

// let contenedor = document.getElementById("contenedor");

// let select = document.getElementById("select-producto");

// let optionNula = document.createElement("option");

// optionNula.value = "";

// optionNula.innerText = "Seleccione un producto";

// select.append(optionNula);

// // console.log(optionNula);

// // // RECORREMOS LOS PRODUCTOS
// productos.forEach ((producto) => {
      
//       let option = document.createElement("option");

//       option.value = producto.codigo;

//       option.innerText = producto.nombre;

//       select.append(option);

//       // console.log(option);
// });


// let boton = document.getElementById("boton1");

// boton.addEventListener ("click", () => {

//       const valueSelect = select.value;

//       if (valueSelect !== "") {

//             const productoEncontrado = productos.find ((producto) => {

//                   return producto.codigo == valueSelect;
//             });

//             console.log(productoEncontrado);
//       }
// });


//////////////////////////////////////////////////////////////////////////////////////////////////


// ............................................... STORAGE Y JSON .................................


// localStorage.setItem("Nombre de usuario", "Bernardo");

// localStorage.setItem("Cantidad de mesas", 5);

// // QUEDA ESTE PORQUE SE REPITE LA CLAVE
// // localStorage.setItem("Numero", 3);


// const nombreDeUsuario = localStorage.getItem("Nombre de usuario");
// // console.log(nombreDeUsuario);


// const cantidadDeMesas = localStorage.getItem("Cantidad de mesas");
// // console.log(cantidadDeMesas);
// // MUESTRA QUE ES UN STRING A PESAR DE SER UN NÚMERO PORQUE SIEMPRE RETORNA UN STRING
// // console.log(typeof cantidadDeMesas);


// // SI SE HACE UN GETITEM DE UNA CLAVE QUE NO SE TIENE RETORNA NULL

// // sessionStorage.setItem("Producto", "Berenjenas");
// // const producto = sessionStorage.getItem("Producto", "Berenjenas");
// // console.log(producto);


// localStorage.setItem("Producto", "Berenjenas");
// const producto = localStorage.getItem("Producto", "Berenjenas");
// // console.log(producto);

// // QUE PASA SI INGRESAS UN ARRAY COMO VALOR

// localStorage.setItem("Productos", ["Arroz", "Fideos", "Berenjenas", "Chocolates"]);
// const productos = localStorage.getItem("Productos");
// // console.log(productos);

// MUESTRA TODO ESTO COMO UN STRING CON COMAS   Arroz,Fideos,Berenjenas,Chocolates

// CÓMO SEPARARLOS?

// MÉTODO SPLIT DONDE SE INGRESA EN LOS PARÉNTESIS EL CARACTER QUE SEPARE CADA ELEMENTO DEL ARRAY

// console.log(productos.split(","));

////////////////////////////////////////


// ................RECORRER EL STORAGE


// // IMPRIME EN CONSOLA CADA KEY POR SEPARADA
// for ( let i = 0; i < localStorage.length; i++) {

//       const key = localStorage.key(i);

//       console.log(key);
// }

//.........

// CON EL VALOR DE LA KEY  OBTENIDO SE ACCEDE AL ITEM PARA PODER RETORNAR LA CLAVE Y EL VALOR DE CADA ELEMENTO DEL ARRAY
// for ( let i = 0; i < localStorage.length; i++) {

//       const key = localStorage.key(i);

//       const valor = localStorage.getItem(key);
//       console.log("Key: " + key + " - Valor: " + valor);
// }


////////////////////////////////////////

// ..................... PARA ELIMINAR

// ..........MÉTODO REMOVEITEM()

// ELIMINA UNA CLAVE QUE YA HABIA BORRADO PERO SEGUÍA ALMACENADA EN EL LOCAL
// localStorage.removeItem("Numero");

// REMUEVE EL ITEM PASÁNDOLE LA CLAVE


// .......... MÉTODO CLEAR()

//  localStorage.clear();

// ELIMINA TODA LA INFORMACIÓN ALMACENADA EN EL LOCAL O SESSION


// ..................................


// let platos = [
//       {
//             nombre: "Sushi",
//             precio: 500
//       },
//       {
//             nombre: "Pasta con salmón",
//             precio: 300
//       },
//       {
//             nombre: "Carne braseada",
//             precio: 100
//       },
//       {
//             nombre: "Poll con champignones",
//             precio: 200
//       }
// ];


// function actualizarInputCantidadDePlatos () {

//       let platos = localStorage.getItem("platos");

//       let arrayPlatos = [];

//       if (platos !== null) {
//            // OBTENGO EL ARRAY POR MEDIO DE UN SPLIT PARA TRANSFORMAR EL STRING A UN ARRAY
//            arrayPlatos = platos.split(","); 
//       }

//       inputCantidadDePlatos.value = arrayPlatos.length;
// }

// function agregarALocalStorage (plato) {

//       // SE OBTIENE EL ARRAY ACTUAL
//       let platos = localStorage.getItem("platos");

//       let arrayPlatos = [];

//       if (platos === null) {
//             // localStorage.setItem("platos", []);
//             // platos = localStorage.getItem("platos");
//       } else {
//             // OBTENGO EL ARRAY POR MEDIO DE UN SPLIT PARA TRANSFORMAR EL STRING A UN ARRAY
//             arrayPlatos = platos.split(",");
//       };

//       // AGREGO AL ARRAY EL NOMBRE DEL PRODUCTO
//       arrayPlatos.push(plato.nombre);

//       localStorage.setItem("platos", arrayPlatos);

//       // console.log(arrayPlatos);

//       actualizarInputCantidadDePlatos();
// };


// let contenedor = document.getElementById("contenedor");

// const inputCantidadDePlatos = document.getElementById("cantidadDePlatos");

// platos.forEach ((plato) => {

//       const ul = document.createElement("ul");

//       const li1 = document.createElement("li");
//       li1.innerText = plato.nombre;

//       const li2 = document.createElement("li");
//       li2.innerText = plato.precio;

//       const button = document.createElement("button");
//       button.addEventListener ("click", () => {

//             agregarALocalStorage(plato);
//       });

//       button.innerText = "Agregar al carrito";

//       ul.append(li1, li2, button);

//       contenedor.append(ul);
// });


// // INICIALIZAR INPUT

// actualizarInputCantidadDePlatos();


/////////////////////////////////////////////////

// ............................. JSON

// ....... ES UN STRING CON UN FORMATO ESPECÍFICO

// ....... CUANDO SEA NECESARIO ENVIAR UN OBJETO JS AL SERVIDOR O ALMACENARLO EN STORAGE ES NECESARIO CONVERTIRLO A UN JSON


// .......................................

// ...... CONVERSIONES DE / HACIA JSON

// .................

// ..................... STRINGIFY RECIBE UN OBJETO COMO PARÁMETRO Y LO PASA A JSON

// .................

// .................

// ..................... PARSE RECIBE UN OBJETO JSON COMO PARÁMETRO Y DEVUELVE EL OBJETO JS

// .................

// localStorage.clear();

// const objeto = {

//       nombre: "Bernardo",
//       edad: 30,
// };
// // // IMPRIME EL OBJETO
// // console.log(objeto);

// // // IMPRIME EL OBJETO JSON
// // console.log(JSON.stringify(objeto));

// const jsonString = '{"nombre":"Bernardo","edad" : 30}';

// // // PASA EL JSON A OBJETO
// // console.log(JSON.parse(jsonString));

// const objetoParseado = JSON.parse(jsonString);

// console.log(objetoParseado);

// // PERMITE TRABAJARLO COMO UN OBJETO
// console.log(objetoParseado.nombre);

//////////////////////////////////////////////////////////////

// const productos = [
//       {
//             id: "p1",
//             producto: "Arroz", 
//             precio: 250
//       },
//       {
//             id: "p2",
//             producto: "Fideos", 
//             precio: 200
//       },
//       {
//             id: "p3",
//             producto: "Carne", 
//             precio: 560
//       },
//       {
//             id: "p4",
//             producto: "Chocolate", 
//             precio: 330
//       }
      
// ];

// const guardarLocal = (clave, valor) => {
//       localStorage.setItem(clave, valor)
// };

// // ALMACENAR PRODUCTO X PRODUCTO
// for (const producto of productos) {
//       guardarLocal(producto.id, JSON.stringify(producto));
// };

// // O ALMACENAR ARRAY COMPLETO 
// guardarLocal("ListaProductos", JSON.stringify(productos));

/////////////////////////////////////////////////////////////////

///////////////////////////////////////..... ALMACENAR ARRAY DE OBJETOS (PRODUCTO)

///////////////////////////////////////..... ARRAY DE PRODUCTOS QUE AGREGAMOS AL DOM EN UNA LISTA 
///////////////////////////////////////..... CON UN BOTÓN PARA AGREGAR LOS PRODUCTOS AL LOCAL STORAGE 
///////////////////////////////////////..... Y LE AGREGA LA CANTIDAD DE VECES QUE SE AGREGÓ CADA PRODUCTO


// const productos = [
//       {
//             producto: "Arroz", 
//             precio: 250
//       },
//       {
//             producto: "Fideos", 
//             precio: 200
//       },
//       {
//             producto: "Carne", 
//             precio: 560
//       },
//       {
//             producto: "Chocolate", 
//             precio: 330
//       }
      
// ];

// localStorage.clear();

// console.log(JSON.stringify(productos));

// function agregarALocalStorage(producto) {

//       // OBTENEMOS PRODUCTOS DEL LOCALSTORAGE
//       const productos = localStorage.getItem("productos");

//       let arrayProductos = [];

//       if (productos !== null) {
//             arrayProductos = JSON.parse(productos);
//       }

//       // MODIFICO EL PRODUCTO
//       let productoEncontrado = arrayProductos.find ((productoEnJSON) => {
//             return productoEnJSON.nombre == producto.nombre
//       });

//       if (productoEncontrado) {
//             productoEncontrado.cantidad++;
//       } else {
//             producto.cantidad = 1;
//             productoEncontrado = producto;
//       }

//       //AGREGAMOS NUEVO PRODUCTO AL LOCAL STORAGE
//       arrayProductos.push(productoEncontrado);

//       // SETEAR EL LOCAL STORAGE
//       localStorage.setItem("productos", JSON.stringify(arrayProductos));
// };


// const contenedor = document.getElementById("contenedor");

// const inputCantidadDeProductos = document.getElementById("cantidadDeProductos");


// // AGREGAMOS AL DOM
// productos.forEach ((producto) => {

//       // CREAMOS ELEMENTO LISTA
//       const ul = document.createElement("ul");

//       const li1 = document.createElement("li");
//       li1.innerText = producto.nombre;

//       const li2 = document.createElement("li");
//       li2.innerText = producto.precio;

//       const button = document.createElement("button");
//       button.addEventListener("click", () => {

//             agregarALocalStorage(producto);
//       });
//       button.innerText = "Agregar al carrito";

//       ul.append(li1, li2, button);

//       contenedor.append(ul);
// });


///////////////////////////////////////////////////////////////////////////////////////

// JSON NO PERMITE PASAR MÉTODOS DE OBJETOS (RETORNA LA FUNCIÓN MISMA)


///////////////////////////////////////////////////////////////////////////////////////


// .........................................................OPERADORES Y CONDICIONALES AVANZADOS 


// // SIMPLIFICACIÓN DE CIERTAS OPERACIONES

// // PERMITEN HACER EL CÓDIGO MÁS SIMPLE Y LEGIBLE

// // EJ 

// let a = 3;

// // FUNCIÓN ORIGINAL
// a = a + 1;

// // PRIMER REDUCCIÓN
// a += 1;

// // SEGUNDA REDUCCIÓN
// a++;


//////////////////////////////////////////////////////////////////////////////////////

// // ............................. OPERADORES TERNARIOS 

// // REEMPLAZA AL IF...ELSE  ?  :


// // ....... SINTAXIS 

// //  CONDICION            .. Q PASA SI ..  
// // Q SE CUMPLE        ES TRUE       ES FALSE
//     condicion    ?     caso1     :     caso2


// // .......SOLO SE PUEDE USAR PARA UN IF ELSE

//// ............

// EJ

// let a = 3;

// // IF CLÁSICO
// if (a==3) {
//       console.log("A es igual a 3");
// } else {
//       console.log("A es distinta de 3");
// };


// OPERADOR TERNARIO
// a==3 ? console.log("A es igual a 3") : console.log("A es distinta de 3");

// // .........SOLO ACEPTA UNA SENTENCIA.........

// // CADA CASO TIENE UN RETURN IMPLÍCITO

// // ......

// let a = 4;

// // // ASIGNACIÓN NORMAL

// // if (a == 3) {
// //       a = 4;
// // } else {
// //       a = 5;
// // }

// // console.log(a)

// // ASIGNACIÓN TERNARIA

// a==3 ? a=4 : a=5;

// console.log(a);


// // CUANDO UN OPERADOR TERNARIO ESTÁ DESPUÉS DE UNA ASIGNACIÓN 

// // LOS DOS CASOS QUE SE CUMPLEN SI ES TRUE O FALSE TIENEN UN RETURN ÍMPLICITO

// // ESTE RETURN ASIGNA EL CASO TRUE/ FALSE A LA VARIABLE A LA QUE SE ASIGNE EL TERNARIO

// // ASIGNACIÓN TERNARIA

// let a = 4;

// a = (a == 3) ? 4 : 5;

// console.log(a);

/////////////////////////////////////////////////////////////////

// const usuario = {
//       nombre: "Ricardo Darin",
//       edad: 43
// };

// // DECLARAMOS Y ASIGNAMOS CONDICIONALMENTE
// const permiso = (usuario.edad >= 18) ? true : false;

// //MOSTRAMOS EL MENSAJE
// permiso ? alert("Puede comprar escabio") : alert("No puede comprar escabio");


// // ..................................................

// // ............................... OPERADOR LÓGICO &&

// // SE UTILIZA PARA LOS IF DE UNA SOLA SENTENCIA

// // NO FUNCIONA CON LOS IF... ELSE

// const carrito = [];

// // OPERACIÓN NORMAL
// if (carrito.length === 0) {
//       console.log("El carrito está vacío");

// };

// // OPERACIÓN AND
// carrito.length === 0 && console.log("El changuito esta vacío");

// ................................

// let a = 3;

// // AL ESTAR LA CONDICIÓN DESPUÉS DE UNA ASIGNACIÓN 
// // PONE UN RETURN IMPLÍCITO EN EL CASO
// // SI A ES IGUAL A 3, A = 5 (ASIGNA 5 A LA VARIABLE A)
// a = (a === 3) && 5;

// console.log(a);

// ................................

// SI LA CONDICIÓN RESULTA FALSA  EL OPERADOR  AND  RETORNARÁ  FALSE 

// const usuario = {
//       nombre: "Ricardo Darin",
//       edad: 17
// };

// // DECLARAMOS Y ASIGNAMOS CONDICIONALMENTE
// const registroIngreso = usuario.edad >= 18 && new Date();

// console.log(registroIngreso); //RETORNARÁ FALSE


// ................................

// ........................ OPERADOR LÓGICO OR  ||

// SINTAXIS DEL OR 

// operando1 || operando2

// SI OPERANDO1 ES  !=  ( 0 , null , undefined , NaN , false o string vacío) 
// EL OPERADOR OR RETORNARÁ OPERANDO1

// DE LO CONTRARIO RETORNARÁ EL OPERANDO2

// let a = 0;

// // RETORNARÁ EL STRING
// console.log(a || "El valor de a es 0");

// let b = 1;

// // RETORNARÁ EL VALOR DE B
// console.log(b || "El valor de b es 0");

// ................................

// const usuario1 = {
//       nombre: "Pedro",
//       edad: 14
// };

// const usuario2 = null;

// console.log( usuario1 || "El usuario no existe");
// // RETORNARÁ EL usuario1

// console.log( usuario2 || "El usuario no existe");
// // RETORNARÁ "El usuario no existe"

// ................................

// let carrito;

// let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito'));

// if (carritoLocalStorage) {
//       carrito = carritoLocalStorage;
// } else {
//       carrito = [];
// }

// console.log(carritoLocalStorage);

// ........SIMPLIFICADO

// const carrito = JSON.parse(localStorage.getItem("carrito")) || []

// // LO DE ARRIBA REEMPLAZA ESTA FUNCIÓN
// localStorage.setItem("carrito", "valor");

// let carrito = [];

// let carritoJSON = localStorage.getItem("carrito");

// if (carritoJSON) {
//       carrito = JSON.parse(carritoJSON);
// }


// ................................

// ........................ OPERADOR LÓGICO NULLISH  ??    (cuando querés validar si algo es nulo o undefined)

// .... FUNCIONA IGUAL QUE EL OPERADOR OR 

// CUANDO EL operando1 ES = NULL / UNDEFINED  DEVUELVE EL operando2

// LOS ÚNICOS VALORES QUE PUEDE TOMAR EL OPERANDO1 PARA QUE DEVUELVA EL OPERANDO2 SON NULL Y UNDEFINED

// EJ

// // RETORNA "Nullish"
// console.log( null ?? "Nullish");

// // RETORNA 40
// console.log( 40 ?? "Nullish");

// let a = 0;

// // RETORNA "a es falso"
// console.log( a || "a es falso");

// // RETORNA EL VALOR DE a (0)
// console.log(a ?? "a es falso");


// // ...................... ACCESO CONDICIONAL A UN OBJETO 

// const usuario = null;

// console.log( usuario.nombre || "El usuario no existe" );
// // Error: "No se pueden leer propiedade de null"


// // EL ? DESPUÉS DE NOMBRE EVALÚA SI EVALÚA SI EL OBJETO TIENE EL ATRIBUTO NOMBRE

// console.log( usuario?.nombre || "El usuario no existe" );
// // "El usuario no existe"

// ................................

// const productos = [
//       {
//             nombre: "Arroz",
//             precio: 230,
//             categoria: {
//                   nombre: "Cereal",
//             },
//       },
//       {
//             nombre: "Leche",
//             precio: 130,
//       },
// ];

// productos.forEach( (producto) => {

//       // SI EXISTE LA CATEGORÍA LE INGRESA EL NOMBRE  SI NO LA TIENE, PONE SIN CATEGORÍA
//       const categoria = producto.categoria?.nombre || "Producto sin categoría";
//       console.log( categoria + ": " + producto.nombre );
// });

/////////////////////////////////////////////////////////////////

// .......................... DESESTRUCTURACIÓN

// SE DECLARA LA VARIABLE CON CONST O LET
// DENTRO DE LAS LLAVES SE INGRESAN LOS NOMBRES DE LAS VARIABLES QUE SE DESEAN DECLARAR
// LUEGO DE LAS LLAVES CON EL OPERADOR DE ASIGNACIÓN = INDICAMOS EL OBJETO (en este ej producto)
// JS AL RECIBIR EL NOMBRE DEL PRODUCTO BUSCA CADA ATRIBUTO DEL ELEMENTO Y SI EXISTE LO ASIGNA A LA VARIABLE ADECUADA
// EL NOMBRE DE LA VARIABLE !!!!!! TIENE QUE SER IGUAL AL NOMBRE DEL ATRIBUTO DEL OBJETO !!!!!!!
// const producto = {
//       nombre: "Yogurt",
//       categoria: {
//             nombre: "Lácteos",
//       },
//       precio: 50,
//       stock: 25,
//       vencimiento: "25/8/2022",
// };

// // // FORMA TRADICIONAL DE GUARDAR CADA ATRIBUTO EN UNA VARIABLE
// // const nombre = producto.nombre;
// // const categoria = producto.categoria;
// // const precio = producto.precio;
// // const stock = producto.stock;
// // const vencimiento = producto.vencimiento;


// // DESESTRUCTURACIÓN
// // ADENTRO DE { VAN LOS NOMBRES DE LAS VARIABLES }
// // const { nombre, categoria, precio, stock, vencimiento } = producto; 

// // // JAVASCRIPT BUSCA EN EL PRODUCTO SI TIENE CADA ATRIBUTO INGRESADO
// // // Y A ESOS ATRIBUTOS LES ASIGNA SU VALOR A CADA VARIABLE

// // console.log(categoria);
// // // RETORNA LA CATEGORÍA

// // console.log(vencimiento);
// // // RETORNA EL VENCIMIENTO


// // DESESTRUCTURACIÓN DE SUBOBJETOS

// // EL NOMBRE DE LA VARIABLE VA A SER NOMBRE
// // A CATEGORIA LO VA A TRATAR COMO UNA CLAVE
// const { categoria: {nombre} } = producto;

// // IMPRIME EL NOMBRE DE LA CATEGORÍA
// console.log(nombre);

// // // DEVUELVE ERROR PORQUE NO EXISTE
// // console.log(categoria);


// // SI SE QUIERE CREAR OTRA VARIABLE MAS
// const { categoria: {nombre, deposito} } = producto;

/////////////////////////////////////////////////////////////////

// .......................................... ALIAS

// PARA QUE LA DESESTRUCTURACIÓN FUNCIONE TIENEN QUE COINCIDIR LOS NOMBRES DE LAS PROPIEDADES DEL OBJETO CON LOS DE LAS VARIABLES

// const item = {
//       itemID: 430,
//       nombreDelProducto: "Berenjenas",
//       precioDelProducto: 380,
// };

// // SELECCIONAMOS CADA ATRIBUTO Y LE ASIGNAMOS EL NOMBRE DE LA VARIABLE
// // NOMBRE DE LAS VARIABLES  ( ID, NOMBRE, PRECIO )
// const {
//       itemID: id,
//       nombreDelProducto: nombre,
//       precioDelProducto: precio,
// } = item;

// console.log("El id es: " + id);
// console.log("El nombre es: " + nombre);
// console.log(precio);

/////////////////////////////

// HACIÉNDOLO AL REVÉS

// const producto = {
//             nombre: "Yogurt",
//             categoria: {
//                   nombre: "Lácteos",
//             },
//             precio: 50,
//             stock: 25,
//             vencimiento: "25/8/2022",
//       };


// const {
//       nombre: nombreDelProducto,
//       categoria: categoriaDelProducto,
//       precio: precioDelProducto,
//       stock: stockDelProducto,
// } = producto;

// console.log(precioDelProducto);

// console.log(categoriaDelProducto);

/////////////////////////////////////////////////////////////////

// ....................................... DESESTRUCTURACIÓN EN PARÁMETROS

// const producto = {
//       nombre: "Yogurt",
//       categoria: {
//             nombre: "Lácteos",
//       },
//       precio: 50,
//       stock: 25,
//       vencimiento: "25/8/2022",
// };

// REEMPLAZARÍA ESTO
// const desestructurar = (item) => {

//       // DESESTRUCTURANDO DENTRO DEL BLOQUE
//       const { nombre, vencimiento } = item;
//       console.log(nombre, vencimiento);
// }

// // desestructurar(producto);

// // POR ESTO
// const desestructurar = ( { nombre, vencimiento } ) => {
//       console.log( nombre, vencimiento );
// };

// desestructurar( producto );

// // ..............................

// // USO SIMILAR CON ALIAS

// const producto = {
//       nombre: "Yogurt",
//       categoria: {
//             nombre: "Lácteos",
//       },
//       precio: 50,
//       stock: 25,
//       vencimiento: "25/8/2022",
// };
// //                                se asigna el valor del atributo nombre a la variable / alias nombreDelProducto
// function imprimirNombreDelProducto ( { nombre: nombreDelProducto} ) {

//       console.log( "El nombre es: " + nombreDelProducto);
// };

// imprimirNombreDelProducto(producto);

// ...................................

// DESESTRUCTURACIÓN EN EVENTOS

// const button = document.getElementById("button1");

// button.addEventListener( "click", (e) => {

//       // TARGET ES EL ELEMENTO HTML DONDE OCURRE EL EVENTO
//       const target = e.target;

//       // DEVUELVE EL ELEMENTO DONDE SUCEDE EL EVENTO
//       // EN ESTE EJEMPLO EL BUTTON1
//       console.log(target);
// });

// DESESTRUCTURADO               OBJETO EVENTO DESESTRUCTURADO
// button.addEventListener( "click", ({target}) => {

//       // IMPRIME EL ELEMENTO DONDE SUCEDE EL EVENTO
//       // EN ESTE EJEMPLO EL BUTTON1
//       console.log(target);
// });

// ...................................

// DESESTRUCTURACIÓN EN ARRAYS

// A DIFERENCIA DE LA DESESTRUCTURACIÓN EN OBJETOS QUE SE DESESTRUCTURA POR SU NOMRE

// EN ARRAYS SE DESESTRUCTURA POSICIONALMENTE

// const nombres = ["Juan", "Fernando", "Damian", "Ludmila"];

// EL a HACE REFERENCIA A Juan, EL b A Fernando
// SI HUBIESE UN c HARÍA REFERENCIA A Damian
// const [a, b] = nombres;

// DEVUELVE Fernando
// console.log(b);

// // DEVUELVE ERROR
// console.log(c);

// // PARA OMITIR POSICIONES
// const [,, a, b] = nombres;

// // DEVUELVE Ludmila
// console.log(b);

// ..............................

// const array = [ "elemento 1", "elemento 2", "elemento 3" ]

// const [ el1, el2, el3] = array;

// console.log(el3);

// // DEVUELVE ERROR
// console.log(el4);

// // SI SÓLO QUIERO TENER LOS DOS PRIMEROS
// // ANTES HACÍA
// const el1 = array[0];
// const el2 = array[1];

// AHORA DESESTRUCTURANDO EL ARRAY
// const [el1, el2] = array;

// ...................................

// ..................... OPERADOR SPREAD

// PARA DESPARRAMAR UN ARRAY O UN OBJETO

// const nombres = ["Juan", "Fernando", "Damian", "Ludmila"];

// DEVUELVE EL ARRAY
// console.log(nombres);


// SPREAD ... DEL ARRAY
// console.log( ...nombres);
// // DEVUELVE LA LISTA DE NOMBRES COMO SI HICIÉRAMOS
// console.log("Juan", "Fernando", "Damian", "Ludmila");

// ....................................

// OTRO USO

// FUNCIÓN mostrarArray QUE TOMA TODOS LOS ELEMENTOS QUE SE INGRESEN Y CREA UN ARRAY CON ELLOS

// REALIZA UN SPREAD DE LOS ELEMENTOS INGRESADOS
// Y A ESTOS LOS METE EN UN ARRAY
// function mostrarArray (...array) {
//       console.log(array);
// };

// mostrarArray ("elemento 1", "elemento 2", "elemento 3");


// LO QUE HACE EL SPREAD AL APLICARSE SOBRE UN ARRAY
// ENVÍA TODOS LOS ELEMENTOS COMO PARÁMETROS INDIVIDUALES


// ............................................


// SI NECESITO SABER EL MAYOR O MENOR NÚMERO DE UN ARRAY

// const numeros = [ 1, -2, 33, -20, 90, 85];

// // INTENTO SACAR EL MÁXIMO
// console.log( Math.max(numeros));
// // DEVUELVE NaN

// CON EL OPERADOR SPREAD SE PUEDE SOLUCIONAR ESTO PORQUE Math.max() RECIBIRÁ CADA ELEMENTO DEL ARRAY COMO PARÁMETRO INDIVIDUAL

// const numeros = [ 1, -2, 33, -20, 90, 85];

// console.log( Math.max( ...numeros));
// // DEVUELVE 90

// ....................... SPREAD PARA CONCATENAR ARRAYS

// const array1 = ["Producto 1", "Producto 2"];

// const array2 = ["Producto 3", "Producto 4"];

// const concatenacion = [ 

//       // ACÁ METE TODOS LOS ELEMENTOS DEL ARRAY1
//       ...array1,
//       // ACÁ METE TODOS LOS ELEMENTOS DEL ARRAY2
//       ...array2,
// ];

// console.log(concatenacion);


// // ANTES LO HACÍAMOS CON EL MÉTODO CONCAT()
// const concatenacionConConcat = array1.concat(array2);

// console.log(concatenacionConConcat);


// ....................... SPREAD DE OBJETOS

// PARA HACER UN SPREAD DE OBJETOS SE DEBE HACER DENTRO DE UNA ESTRUCTURA QUE LO PERMITA


// UN SPREAD APLICADO SOBRE UN OBJETO PRESENTARÍA CADA PAR DE CLAVE: VALOR SEPARADO POR COMAS
// ESTO DENTRO DE UNA FUNCIÓN NO SERÍA ADMISIBLE
// PERO SÍ LO ES DENTRO DE OTRO OBJETO

// const producto1 = {
//       nombreDelProducto: "Producto 1",
//       precioDelProducto: 50,
// };

// const categoria = {
//       categoriaDelProducto: "Categoría 1",
// };

// const deposito = {
//       depositoDelProducto: "Depósito 1",
// };

// const productoFinal = {
//       ...producto1,
//       ...categoria,
//       ...deposito,
// };

// console.log(productoFinal)

// ...............................

// const usuario1 = {
//       nombre: "Juan",
//       edad: 24,
//       curso: "JavaScript",
// };
// console.log(usuario1);

// const usuario2 = {
//       ...usuario1
// }
// console.log(usuario2);

// const usuario3 = {
//       ...usuario1,
//       // ACÁ PARA CAMBIAR EL CURSO Y LA EDAD PISAMOS LOS PARÁMETROS
//       // Y JS PRIORIZA EL NUEVO VALOR DE CURSO / EDAD Y LE OTORGA ESE VALOR AL usuario3
//       edad: 29,
//       curso: "React JS",
// };
// console.log(usuario3);

///////////////////////////////////////////////////////////////////////////////

// EMPEZAMOS A CODEAR EN INGLES

///////////////////////////////////////////////////////////////////////////////


// ................................ LIBRERIAS

// ...... SWEETALERT

// swal.fire({
//       title: 'Cancelar reserva',
//       text: "Estas seguro que deseas cancelarla?",
//       icon: "error"
// });

// METEMOS ESE SWAL en un evento click de un boton

// const bookingButton = document.getElementById("bookingButton");
// bookingButton.innerText = "Boton Reserva";

// const cancelButton = document.getElementById("cancelButton");
// cancelButton.innerText = "Cancelar reserva";

// // EVENTO PARA EL BOTÓN RESERVA
// bookingButton.addEventListener( "click", () => {

//       swal.fire({
//             title: "Realizar reserva",
//             text: "Deseas realizar la reserva?",
//             icon: "question"
//       });
// });

// // EVENTO PARA EL CANCELAR RESERVA
// cancelButton.addEventListener( "click", () => {

//       swal.fire({
//             title: "Cancelar reserva",
//             text: "Deseas cancelar la reserva?",
//             icon: "error"
//       });
// });












/////////////////////////////////////////////////////////////////





// INTENTOS PARA LA ENTREGA DEL PROYECTO (lo de abajo)






/////////////////////////////////////////////////////////////////

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

// let reservante1 = new Reservante(prompt("Ingrese el nombre de quien realiza la reserva"), prompt("Ingrese el apellido"), prompt("Ingrese el año nacimiento"), prompt("Ingrese un número de teléfono"), prompt("Ingrese una dirección"));
//     console.log(reservante1.datoscompletos);
//     console.log("Edad: "+ reservante1.edad); 


// let mesa3 = [
//    {
//       nombre: prompt("Ingrese su nombre"),
//       apellido: prompt("Ingrese su apellido"),
//       edad: 36,
//    },{
//       nombre: prompt("Ingrese su nombre"),
//       apellido: prompt("Ingrese su apellido"),
//       edad: 16,      
//    },{
//       nombre: prompt("Ingrese su nombre"),
//       apellido: prompt("Ingrese su apellido"),
//       edad: 26,
//    }
// ];

// let mesa4 = [
//    {
//       nombre: prompt("Ingrese su nombre"),
//       apellido: prompt("Ingrese su apellido"),
//       edad: 42,
//    },{
//       nombre: prompt("Ingrese su nombre"),
//       apellido: prompt("Ingrese su apellido"),
//       edad: 33,      
//    },{
//       nombre: prompt("Ingrese su nombre"),
//       apellido: prompt("Ingrese su apellido"),
//       edad: 39,
//    },{
//       nombre: prompt("Ingrese su nombre"),
//       apellido: prompt("Ingrese su apellido"),
//       edad: 35,
//    }
// ];

// let persona = (cantidad) => {
//    let mesaPara1 = [
//       {
//          nombre: prompt("Ingrese su nombre"),
//          apellido: prompt("Ingrese su apellido"),
//          edad: 42, 
//       }
//    ];
//    console.log(mesaPara1);
// }



// const mesaPara2 = [
//    mesaPara1()
// ]

// const mesaPara3 = [] ;

// const mesaPara4 = [] ;

// const mesaPara5 = [] ;


// const mesa1Completa = mesa1.map ((elemento) => {

//    elemento.nombreYApellido = elemento.nombre + " " + elemento.apellido;

//    return elemento;
// })

// const mesa2Completa = mesa2.map ((elemento) => {

//    elemento.nombreYApellido = elemento.nombre + " " + elemento.apellido;

//    return elemento;
// })

// mesa1Completa.sort ((a, b) => {

//    if (a.nombreYApellido > b.nombreYApellido) {
//       return 1;
//    } else if (a.nombreYApellido < b.nombreYApellido) {
//       return -1;
//    } else {
//       return 0;
//    }
// })

// console.log(mesa1Completa);

// mesa2Completa.sort ((a, b) => {

//    if (a.nombreYApellido > b.nombreYApellido) {
//       return 1;
//    } else if (a.nombreYApellido < b.nombreYApellido) {
//       return -1;
//    } else {
//       return 0;
//    }
// })

// console.log(mesa2Completa);




// let cantidad = parseInt(prompt("Ingrese cuantas personas asistirán"));


// while (cantidad != ("ESC" || " " || 0)) {

//    const personas = cantidad => {

//       let persona = new Persona ((prompt('Ingrese el nombre').toLowerCase, prompt('Ingrese el apellido').toLowerCase, prompt('Ingrese el año nacimiento').toLowerCase)); 
//    }

//    switch (cantidad) {
//        case 1 :
//            personas * cantidad 
//            console.log(personas);
//        case 2 :
//            personas
//            console.log(personas);
//        default :
//        alert("no se permite");
//        break;    
//    }
// }

// while ((cantidad != 0) && (cantidad < ))

// let personass = (nombre, apellido, anioNac) => {
   
//    this.nombre = (prompt("Ingrese el nombre").toLowerCase);
//    this.apellido = (prompt("Ingrese el apellido").toLowerCase);
//    this.edad = parseInt(prompt("Ingrese la edad"));

//    return personass
   
// }

// console.log(personass.nombre);

/////////////////////////////////////////////////////////////////





// INTENTOS PARA LA ENTREGA DEL PROYECTO (lo de arriba)






/////////////////////////////////////////////////////////////////