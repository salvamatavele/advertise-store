import NavBar from "@/Components/NavBar";
import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
export default function Products(props) {
    const { products } = usePage().props;
    const {
        data,
        meta: { links },
    } = products;
    return (
        <>
            <Head>
                <title>Produtos</title>
            </Head>
            <NavBar auth={props.auth} />
            <div className="uk-container">
                <h1 className="uk-heading-line">
                    <span>Produtos</span>
                </h1>
                <Search />
                <br />
                <ul
                    className=" uk-child-width-1-2@s uk-child-width-1-4@s"
                    uk-grid="masonry: true"
                >
                    {data?.map((product) => (
                        <li key={product.id}>
                            {product.user.status === 1 &&
                                product.user.blocked === 0 &&
                                (product.user.subscribe_id > 0 && (
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top uk-flex uk-flex-center">
                                            <img
                                                src={`/${product.image_path}`}
                                                height="100"
                                                alt=""
                                            />
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">
                                                {product.name}
                                            </h3>
                                            <p>{product.price} .00 MZN</p>
                                            <Link
                                                className="uk-button button-success uk-width-1-1 uk-margin-small-bottom"
                                                href={route(
                                                    "products.show",
                                                    product.id
                                                )}
                                            >
                                                +Detalhes
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </li>
                    ))}
                    {data.length === 0 && <>Nenhum produto encontrado</>}
                </ul>
                <Pagination links={links} />
            </div>
        </>
    );
}
