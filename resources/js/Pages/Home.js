import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function Home(props) {
    const { products } = usePage().props;
    console.log(products);
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <NavBar auth={props.auth} />
            {/* slidernav */}
            <div
                className="uk-position-relative uk-visible-toggle uk-light"
                tabIndex="-1"
                uk-slideshow="autoplay: true; max-height: 400"
            >
                <ul className="uk-slideshow-items">
                    <li>
                        <img
                            src="images/anunc.jpg"
                            width="100"
                            height="100"
                            alt=""
                            uk-cover="true"
                        />
                        <div className="uk-position-center uk-position-small uk-text-center">
                            <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
                            <p uk-slideshow-parallax="x: 200,-200">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src="images/pec.jpg" alt="" uk-cover="true" />
                        <div className="uk-position-center uk-position-small uk-text-center">
                            <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
                            <p uk-slideshow-parallax="x: 200,-200">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src="images/orange.jpg" alt="" uk-cover="true" />
                        <div className="uk-position-center uk-position-small uk-text-center">
                            <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
                            <p uk-slideshow-parallax="x: 200,-200">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </li>
                </ul>

                <a
                    className="uk-position-center-left uk-position-small uk-hidden-hover"
                    href="#"
                    uk-slidenav-previous="true"
                    uk-slideshow-item="previous"
                ></a>
                <a
                    className="uk-position-center-right uk-position-small uk-hidden-hover"
                    href="#"
                    uk-slidenav-next="true"
                    uk-slideshow-item="next"
                ></a>
            </div>
            {/* end slidenav */}
            {/* carrocel */}
            <div className="position-top background-grey uk-container uk-box-shadow-small">
                <h3 className="uk-heading-line text-green-600">
                    <span>Novos Produtos</span>
                </h3>
                <div
                    className="uk-slider-container-offset"
                    uk-slider="autoplay: true"
                >
                    <div
                        className="uk-position-relative uk-visible-toggle uk-dark"
                        tabIndex="-1"
                    >
                        <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@s uk-grid">
                            {!products && (
                                <>
                                    <li>
                                        <div className="uk-card uk-card-default">
                                            <div className="uk-card-media-top uk-flex uk-flex-center">
                                                <img
                                                    src="images/agro.png"
                                                    width="150"
                                                    height="150"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="uk-card-body">
                                                <h3 className="uk-card-title">
                                                    Media Top
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="uk-card uk-card-default">
                                            <div className="uk-card-media-top uk-flex uk-flex-center">
                                                <img
                                                    src="images/agro.png"
                                                    width="150"
                                                    height="150"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="uk-card-body">
                                                <h3 className="uk-card-title">
                                                    Media Top
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="uk-card uk-card-default">
                                            <div className="uk-card-media-top uk-flex uk-flex-center">
                                                <img
                                                    src="images/agro.png"
                                                    width="150"
                                                    height="150"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="uk-card-body">
                                                <h3 className="uk-card-title">
                                                    Media Top
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="uk-card uk-card-default">
                                            <div className="uk-card-media-top uk-flex uk-flex-center">
                                                <img
                                                    src="images/agro.png"
                                                    width="150"
                                                    height="150"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="uk-card-body">
                                                <h3 className="uk-card-title">
                                                    Media Top
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="uk-card uk-card-default">
                                            <div className="uk-card-media-top uk-flex uk-flex-center">
                                                <img
                                                    src="images/agro.png"
                                                    width="150"
                                                    height="150"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="uk-card-body">
                                                <h3 className="uk-card-title">
                                                    Media Top
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="uk-card uk-card-default">
                                            <div className="uk-card-media-top uk-flex uk-flex-center">
                                                <img
                                                    src="images/agro.png"
                                                    width="150"
                                                    height="150"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="uk-card-body">
                                                <h3 className="uk-card-title">
                                                    Media Top
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </>
                            )}
                            {products?.map((product) =>
                                        <li key={product.id}>
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
                                                    <p>
                                                        {product.price} .00 MZN
                                                    </p>
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
                                        </li>
                            )}
                        </ul>

                        <a
                            className="uk-position-center-left uk-position-small uk-hidden-hover"
                            href="#"
                            uk-slidenav-previous="true"
                            uk-slider-item="previous"
                        ></a>
                        <a
                            className="uk-position-center-right uk-position-small uk-hidden-hover"
                            href="#"
                            uk-slidenav-next="true"
                            uk-slider-item="next"
                        ></a>
                    </div>

                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                </div>
            </div>
            <Footer />
        </>
    );
}
