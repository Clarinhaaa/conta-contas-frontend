export interface ContaInt {
    idConta?: number,
    descricaoConta: string,
    valorConta: number,
    dataVencimentoConta: Date,
    dataPagamentoConta: Date,
    tipoConta: string,
    statusConta: boolean,
    idUsuario?: number,
    idCategoria?: number
}