const formatoVogais = (textoVogais) => {
    return `${textoVogais.toLowerCase().replace(/['BCDFGHJKLMNPQRSTVWXYZ']/gi, '')}`;
}
export {formatoVogais}