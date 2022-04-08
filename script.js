let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion");

function calculadora (primerNum, segundoNum, operacion){
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
            return "0";
            break;
    }
}
let resultadoSuma = calculadora(numero1, numero2, "+");
let resultadoResta = calculadora(numero1, numero2, "-");
let resultadoMult = calculadora(numero1, numero2, "*");
let resultadoDiv = calculadora(numero1, numero2, "/");


if (operacion =="+") {
    console.log(resultadoSuma);
    alert(resultadoSuma);
}else if (operacion =="-") {
    console.log(resultadoResta);
    alert(resultadoResta);
}else if (operacion =="*") {
    console.log(resultadoMult);
    alert(resultadoMult);
}else if (operacion =="/") {
    console.log(resultadoDiv);
    alert(resultadoDiv);
}else {
    console.log("No se indicó la operación");
    alert("No se indicó la operación");
}