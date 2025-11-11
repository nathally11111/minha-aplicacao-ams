export default function Produtos(){
    return(
    <div className="container-main">
        <div className="card card-purple">
            <div className="card-header">Página de Produtos</div>
            <div className="card-body">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Descrição do produto</label>
                        <input className="form-control" name="nome" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Valor de Venda</label>
                        <input className="form-control" name="valorVenda" type="number" step="0.01" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Estoque</label>
                        <input className="form-control" name="estoque" type="number" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Código de barras</label>
                        <input className="form-control" name="codigoBarras" type="text" />
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-primary custom">Cadastrar Produto</button>
                    </div>
                </form>

                <hr/>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Valor de Venda</th>
                                <th>Código de barras</th>
                                <th>Quantidade em estoque</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Pistão forjado</td>
                                <td>R$ 152,30</td>
                                <td>7896541238</td>
                                <td>10</td>
                                <td>
                                    <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
    
}
