    
let text1= document.querySelector("#text-area")    
let text2= document.querySelector("#mensaje")
let copiar= document.querySelector("#copiar")
copiar.style.display= "none"

function validarTexto(){
  return true
}

var matrizCodigo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] //[["a","ai"],["e","entra"],["i","iman"],["o","ohh"],["u","um"]] 

function encryptarTexto(){
  if(validarTexto()){
     var mensajeTxtPlano= text1.value 
     var encryptado= encryptar(mensajeTxtPlano)   
     text2.value= encryptado
     text1.value= "";
     copiar.style.display= "block"
  }else{
     text2.value= "Fallo encryptado, intentelo nuevamente "
     console.log("fallo validando")
  }
}

function encryptar(mensaje){
  
  var stringEncryptado= mensaje.toLowerCase()
 for(var i=0; i<matrizCodigo.length; i++){
      if(stringEncryptado.includes(matrizCodigo[i][0])){
           console.log(matrizCodigo[i][0] + " - " + matrizCodigo[i][1])
           stringEncryptado= stringEncryptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
      }
 }
 console.log("mensaje a encryptar: " + stringEncryptado)
 return stringEncryptado
}
function desencryptarTexto(){
   mensajeEncryptado= text1.value
   console.log(mensajeEncryptado)
   var desencryptado= desencryptar(mensajeEncryptado)
   text1.value= ""
   text2.value= desencryptado
}
function desencryptar(mensaje){
   var stringDesencryptado= mensaje.toLowerCase()
  for(var i=0; i<matrizCodigo.length; i++){
      if(stringDesencryptado.includes(matrizCodigo[i][1])){
        stringDesencryptado= stringDesencryptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        console.log(matrizCodigo[i][1] + " - " + matrizCodigo[i][0])
      }
  }
  return stringDesencryptado
}

function copiarTexto(){
    text2.select()
    navigator.clipboard.writeText(text2.value)
    alert("Texto copiado: " + text2.value)
    text2.value= ""
}

