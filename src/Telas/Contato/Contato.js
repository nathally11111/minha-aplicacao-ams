export default function Contato(){
    return(
    <div className="container-main">
        <div className="card card-purple" style={{maxWidth: 800, margin: '0 auto'}}>
            <div className="card-header">Contato</div>
            <div className="card-body">
                <p>Se quiser entrar em contato, preencha o formulário abaixo ou envie um e-mail para <strong>nathally3004@gmail.com</strong>.</p>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Nome</label>
                        <input className="form-control" name="nome" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">E-mail</label>
                        <input className="form-control" name="email" type="email" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Mensagem</label>
                        <textarea className="form-control" rows={4}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-primary custom">Enviar mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}
