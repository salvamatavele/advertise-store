import NavBar from "@/Components/NavBar";
import { Head, usePage } from "@inertiajs/inertia-react";

export default function ProductDetail(props) {
    const { product } = usePage().props;
    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>
            <NavBar auth={props.auth} />
            <div className="uk-container">
                <br />
                <div class="uk-child-width-1-2@m uk-flex-center" uk-grid="true">
                    <div>
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <div uk-lightbox="animation: slide">
                                    <a
                                        class="uk-inline"
                                        href={`/${product.image_path}`}
                                        data-caption={product.name}
                                    >
                                        <img
                                            src={`/${product.image_path}`}
                                            width="600"
                                            height="300"
                                            alt="Product image"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div class="uk-card-body">
                                <div
                                    className="uk-flex-around uk-background-muted"
                                    uk-switcher="animation: uk-animation-fade; toggle: > *"
                                    uk-tab="true"
                                >
                                    <button
                                        className="uk-button uk-button-default"
                                        type="button"
                                    >
                                        Produto
                                    </button>
                                    <button
                                        className="uk-button uk-button-default"
                                        type="button"
                                    >
                                        Proprietario
                                    </button>
                                    {product.images.length > 0 && (
                                        <button
                                            className="uk-button uk-button-default"
                                            type="button"
                                        >
                                            Imagens
                                        </button>
                                    )}
                                </div>
                                <h3 class="uk-card-title">{product.name}</h3>
                                <ul className="uk-switcher uk-margin-auto-top">
                                    <li>
                                        <ul className="uk-list ">
                                            <li>
                                                <strong>Quantidade: </strong>{" "}
                                                {product.quantity}
                                            </li>
                                            <li>
                                                <strong>Categoria: </strong>{" "}
                                                {product.category}
                                            </li>
                                            {product.total_price && (
                                                <li>
                                                    <strong>
                                                        Preco total:
                                                    </strong>{" "}
                                                    {product.total_price} .00
                                                    MZN
                                                </li>
                                            )}
                                            {product.price && (
                                                <li>
                                                    <strong>
                                                        Preco por produto/
                                                        {product.currency} :
                                                    </strong>{" "}
                                                    {product.price} .00 MZN
                                                </li>
                                            )}
                                            {product.price_details && (
                                                <li>
                                                    <strong>
                                                        Quantidade por preco:
                                                    </strong>{" "}
                                                    {product.price_details} .00
                                                    MZN
                                                </li>
                                            )}
                                            <li>
                                                <strong>Descricao: </strong>{" "}
                                                {product.details}
                                                <br />
                                                {product.site && (
                                                    <a
                                                        target="_blank"
                                                        href={product.site}
                                                    >
                                                        Visite {product.site}
                                                    </a>
                                                )}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="uk-list ">
                                            <li>
                                                <strong>
                                                    Nome do proprietario:{" "}
                                                </strong>{" "}
                                                {product.user.name}{" "}
                                                {product.user.last_name}
                                            </li>
                                            <li>
                                                <strong>Email: </strong>{" "}
                                                {product.user.email}
                                            </li>
                                            <li>
                                                <strong>Contacto: </strong>{" "}
                                                {product.user.phone.phone}
                                                {product.user.phone
                                                    .optional && (
                                                    <>
                                                        /
                                                        {
                                                            product.user.phone
                                                                .optional
                                                        }
                                                    </>
                                                )}
                                            </li>
                                            <li>
                                                <strong>Endereco: </strong>{" "}
                                                {product.user.location}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="uk-flex">
                                            {product.images.map((image) => (
                                                <div className="uk-card uk-card-default uk-card-body">
                                                    <div uk-lightbox="animation: slide">
                                                        <a
                                                            class="uk-inline"
                                                            href={`/${image.image_path}`}
                                                            data-caption={
                                                                image.name
                                                            }
                                                        >
                                                            <img
                                                                src={`/${image.image_path}`}
                                                                width="600"
                                                                height="300"
                                                                alt="Product image"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
