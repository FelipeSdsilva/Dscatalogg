import './styles.css';

const SignIn = () => {
    return (
        <>
            <div className="container">
                <main className="form-signin w-100 m-auto">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Entrar</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label >Email</label>
                        </div>
                        <br />
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label >Senha</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Lembrar credenciais
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
                    </form>
                </main>
            </div>
        </>
    );
}

export default SignIn;