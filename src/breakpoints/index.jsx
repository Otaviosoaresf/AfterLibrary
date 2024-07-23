const tamanhosDeTela = {
    mobile: '390px',
    tablet: '500px',
    notebook: '1024px'
}

const media = {
    mobile: `(max-width: ${tamanhosDeTela.mobile})`,
    tablet: `(max-width: ${tamanhosDeTela.tablet})`,
    notebook: `(max-width: ${tamanhosDeTela.notebook})`
}

export default media;