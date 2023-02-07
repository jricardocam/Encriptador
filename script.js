
function encriptar(){
    document.getElementById("resultado").style.display = "block";
    var texto = document.getElementById("texto").value;
    var resultado = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            resultado += "enter";
        }else if(texto[i] == "i"){
            resultado += "imes";
        }else if(texto[i] == "a"){
            resultado += "ai";
        }else if(texto[i] == "o"){
            resultado += "ober";
        }else if(texto[i] == "u"){
            resultado += "ufat";
        }else{
            resultado += texto[i];
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function desencriptar(){
    document.getElementById("resultado").style.display = "block";
    var texto = document.getElementById("texto").value;
    var resultado = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e" && texto[i+1] == "n" && texto[i+2] == "t" && texto[i+3] == "e" && texto[i+4] == "r"){
            resultado += "e";
            i += 4;
        }else if(texto[i] == "i" && texto[i+1] == "m" && texto[i+2] == "e" && texto[i+3] == "s"){
            resultado += "i";
            i += 3;
        }else if(texto[i] == "a" && texto[i+1] == "i"){
            resultado += "a";
            i += 1;
        }else if(texto[i] == "o" && texto[i+1] == "b" && texto[i+2] == "e" && texto[i+3] == "r"){
            resultado += "o";
            i += 3;
        }else if(texto[i] == "u" && texto[i+1] == "f" && texto[i+2] == "a" && texto[i+3] == "t"){
            resultado += "u";
            i += 3;
        }else{
            resultado += texto[i];
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}