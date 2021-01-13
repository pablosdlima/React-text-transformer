
const formatoNumerico = (textoNumerico) =>{
    let textoNumerado = '';
    for(let i = 0; i < textoNumerico.length; i++) {
        if(textoNumerico[i] == 'O' || textoNumerico[i] == 'o'){
            textoNumerado += '0';
        }
        else if(textoNumerico[i] == 'L' || textoNumerico[i] == 'l'){
            textoNumerado += '1';
        }
        else if(textoNumerico[i] == 'E' || textoNumerico[i] == 'e'){
            textoNumerado += '3';
        }
        else if(textoNumerico[i] == 'A' || textoNumerico[i] == 'a'){
            textoNumerado += '4';
        }
        else if(textoNumerico[i] == 'S' || textoNumerico[i] == 's'){
            textoNumerado += '5';
        }
        else if(textoNumerico[i] == 'T' || textoNumerico[i] == 't'){
            textoNumerado += '7';
        }     
        else{
            textoNumerado += textoNumerico[i];
        }
    }
    return textoNumerado.toUpperCase();
}



export {formatoNumerico}