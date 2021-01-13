const formatoCsv = (textoCSV) => {
    return `"${textoCSV.split(' ').join('" ; "')}"`;
}
export {formatoCsv}