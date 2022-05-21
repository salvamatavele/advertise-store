import {Head, usePage} from "@inertiajs/inertia-react";
import Flash from "@/Components/Flash";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";

export default function Show(props) {
    const {product} = usePage().props
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {product.name}
                </h2>
            }
        >
            <Head title={product.name}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Flash/>
                            <div className="uk-flex uk-flex-center">
                                <div className="uk-card uk-card-default uk-form-width-large">
                                    <div className="uk-card-media-top uk-flex uk-flex-center">
                                        <img src={`/${product.image_path}`} width="600" height="200" alt=""/>
                                    </div>
                                    <div className="uk-card-body">
                                        <div className="uk-flex-around uk-background-muted" uk-switcher="animation: uk-animation-fade; toggle: > *" uk-tab="true">
                                            <button className="uk-button uk-button-default" type="button">Produto</button>
                                            <button className="uk-button uk-button-default" type="button">Proprietario</button>
                                            {product.images.length >0 && <button className="uk-button uk-button-default" type="button">Imagens</button>}
                                        </div>

                                        <ul className="uk-switcher uk-margin-auto-top">
                                            <li>
                                                <ul className="uk-list ">
                                                    <li><strong>Nome do produto</strong> {product.name}</li>
                                                    <li><strong>Quantidade: </strong> {product.quantity}</li>
                                                    <li><strong>Categoria: </strong> {product.category}</li>
                                                    {product.total_price && <li><strong>Preco total:</strong> {product.total_price} .00 MZN</li>}
                                                    {product.price && <li><strong>Preco por produto/{product.currency} :</strong> {product.price} .00 MZN</li>}
                                                    {product.price_details && <li><strong>Quantidade por preco:</strong> {product.price_details} .00 MZN</li>}
                                                    <li><strong>Descricao: </strong> {product.details}<br/>
                                                        {product.site && <a target="_blank" href={product.site}>Visite {product.site}</a>}
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul className="uk-list ">
                                                    <li><strong>Nome do proprietario: </strong> {product.user.name} {product.user.last_name}</li>
                                                    <li><strong>Email: </strong> {product.user.email}</li>
                                                    <li><strong>Contacto: </strong> {product.user.phone.phone}{product.user.phone.optional && <>/{product.user.phone.optional}</>}</li>
                                                    <li><strong>Endereco: </strong> {product.user.location}</li>
                                                </ul>
                                            </li>
                                            <li>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
