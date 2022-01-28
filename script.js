/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var textoEntrada = document.querySelector("#textoEntrada");
var textoSalida = document.querySelector("#textoSalida");
var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copiar");
var botonBorrar1 = document.querySelector("#borrar1");
var botonBorrar2 = document.querySelector("#borrar2");

var numeros = "0123456789";

function validacion(frase) {
  if (frase.match(/[^a-z\s]/) || frase.match(numeros) ) {
    return alert("No puedes encriptar números, letras mayúsculas, ni letras con acentos!!");
  } 
}

//encriptacion
botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  var frase = textoEntrada.value;
  
  if (frase.match(/[^a-z\s]/) || frase.match(numeros) ) {
    return alert("No puedes encriptar números, letras mayúsculas, ni letras con acentos!!");
  } 
  
  frase = frase.replaceAll("e", "enter");
  frase = frase.replaceAll("i", "imes");
  frase = frase.replaceAll("o", "ober");
  frase = frase.replaceAll("a", "ai");
  frase = frase.replaceAll("u", "ufat");

  textoSalida.value = frase;


  
});

//Desencriptacion
botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  var frase = textoEntrada.value;
  if (frase.match(/[^a-z\s]/) || frase.match(numeros) ) {
    return alert("No puedes encriptar números, letras mayúsculas, ni letras con acentos!!");
  } 

  frase = frase.replaceAll("enter", "e");
  frase = frase.replaceAll("imes", "i");
  frase = frase.replaceAll("ober", "o");
  frase = frase.replaceAll("ai", "a");
  frase = frase.replaceAll("ufat", "u");

  textoSalida.value = frase;
});

//COPIANDO
botonCopiar.addEventListener("click", function (event) {
  event.preventDefault();

  var msg = document.getElementById("textoSalida");
  msg.select();
  document.execCommand("copy");
  
});


//LIMPIAR PANTALLA DE INGRESO
botonBorrar1.addEventListener("click", function (event) {
  event.preventDefault();
  textoEntrada.value = "";
  textoEntrada.focus();
});

//LIMPIAR PANTALLA DE SALIDA
botonBorrar2.addEventListener("click", function (event) {
  event.preventDefault();
  textoSalida.value = "";
  textoSalida.focus();
});


