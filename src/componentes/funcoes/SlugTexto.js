const formatoSlug = (textoSlug) => {
    return `${textoSlug.toLowerCase().split(' ').join('-')}`;
}
export {formatoSlug}