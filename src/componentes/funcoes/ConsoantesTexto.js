const formatoConsoantes = (textoConsoantes) => {
    return `${textoConsoantes.toLowerCase().replace(/['AEIOU']/gi, '')}`;
}
export {formatoConsoantes}