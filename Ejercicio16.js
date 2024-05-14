// 16  Solicitar al usuario un carácter y mostrar si es una vocal o consonante. 

 // Entrada: Se solicita al usuario que ingrese un carácter.
// Proceso: Función que convierte un carácter en su valor ASCII si es una vocal.
// Salida: Se verifica si el carácter es una vocal y se muestra su valor ASCII correspondiente.


function vocalAscii(){
    let vocal=""
    vocal = read("ingrese vocal: ")
    if (vocal == "a"){
      console.log("97")
    }else if (vocal == "A"){
      console.log("65")
    } else if (vocal == "e") {
      console.log("101")
    } else if (vocal == "E") {
      console.log("69")
    } else if (vocal == "i") {
      console.log("105")
    } else if (vocal == "I") {
      console.log("73")
    } else if (vocal == "o") {
      console.log("101")
    } else if (vocal == "O") {
      console.log("79")
    } else if (vocal == "u") {
      console.log("117")
    } else if (vocal == "U") {
      console.log("85")
    }else{
      console.log("caracter no es una vocal")
    }
  }
  vocalAscii()