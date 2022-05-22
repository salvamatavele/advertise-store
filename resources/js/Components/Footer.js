export default function Footer(params) {
    return (
        <div
            className="uk-background-secondary uk-card uk-card-default uk-card-body uk-position-z-index "
            uk-sticky="position: bottom; end: !.uk-height-large"
        >
            <div className="uk-flex uk-flex-between@s">
                <div>
                    <a className="uk-button-link" href={route("about")}>
                        Sobre nos
                    </a>
                    <br />
                    <a className="uk-button-link" href={route("register")}>
                        Registar uma nova conta
                    </a>
                    <br />
                    <a className="uk-button-link" href={route("login")}>
                        Entrar com conta existente
                    </a>
                </div>
                <div className="uk-grid-small uk-width-auto" uk-grid="true">
                    <a>
                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
                    </a>
                    <a>
                    <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                    </a>
                    <a>
                    <img src="https://img.icons8.com/color/48/000000/youtube--v1.png"/>
                    </a>
                    <a>
                    <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/>
                    </a>
                </div>
                <div>
                    <h4>
                    Contactos
                    </h4>
                    Telefone: 84745585 / 87845854 <br/>
                    Email: info@lurima.com<br/>
                    Endereco: Inhambane#Mocambique
                </div>
            </div>
            &copy; Todos os direitos reservados.
        </div>
    );
}
