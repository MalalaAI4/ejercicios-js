clima (true)

function clima (estaLloviendo){
    if (estaLloviendo){
        console.log("Sí está lloviendo")
    }
    else {
        console.log("No está lloviendo")
    }
}


// function calcular (num1, num2, num3) {
//     let sumar = num1+num2;
//     let resultado = sumar + num3;
//     return resultado
// }
// console.log(calcular(2,3,4))


function areaT (a, b) {
    let multiplicar = a*b;
    let resultado = multiplicar/2;
    return resultado
}
console.log(areaT(2,2))

/*let base = parseInt(prompt("Ingrese la base "));
let altura = parseInt(prompt("Ingrese la altura "));
let area;
area = (base*altura)/2;
document.write("El área del triángulo es: "+ area);*/

function notas(nota1,nota2,nota3){
    let sumar = nota1 + nota2 + nota3
    let resultado = sumar / 3
    if (resultado >= 3){
    return ("aprobado")
    }
    else return ("reprobado")
}
console.log(notas(2,4,1))

function calculadora(operacion,num1,num2){
    switch(operacion){
        case "suma":
            return num1 + num2
        case "resta":
            return num1 - num2
        case "multiplicación":
            return num1 * num2
        case "división":
            return num1 / num2
        case "exponente":
            return num1 ** num2
        default:
            return "Operación inexistente"
    }
}
console.log(calculadora("multiplicación", 2, 3 ))

