import {Head, useForm, usePage} from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";
import Flash from "@/Components/Flash";

export default function New(props) {
    const {auth} = usePage().props
    const {data, post, errors, processing, reset, setData, progress} = useForm({
        user_id: auth.user.id,
        name: '',
        quantity:  '',
        total_price: '',
        price: '',
        price_details: '',
        currency: '',
        site: '',
        image_path: undefined,
        details:  '',
        category: '',
    });

    function submit(e) {
        e.preventDefault();
            post(route('admin.products.store'))
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Novo Producto
                </h2>
            }
        >
            <Head title="Novo Producto"/>
            <br/>
            <div className=" uk-flex uk-flex-center">
                <div className="uk-card uk-card-default uk-card-body">
                    <Flash/>
                    {progress && (
                        <progress className="uk-progress" value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                    <form onSubmit={submit}>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="name">Nome</label>
                            <div className="uk-form-controls">
                                <input required className="uk-input uk-form-width-large" id="name" type="text"
                                       placeholder="Nome do produto"
                                       onChange={event => setData('name', event.target.value)}
                                       value={data.name}
                                />
                                {errors.name && <div className="uk-text-danger">{errors.name}</div>}
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="qty">Quantidade</label>
                            <div className="uk-form-controls">
                                <input required className="uk-input uk-form-width-large" id="qty"
                                       type="number"
                                       placeholder="Quantidade de produtos"
                                       onChange={event => setData('quantity', event.target.value)}
                                       value={data.quantity}
                                />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="cury">Medida</label>
                            <div className="uk-form-controls uk-form-width-large">
                                <select required className="uk-select" id="cury"
                                        onChange={event => setData('currency', event.target.value)}
                                        value={data.currency}
                                >
                                    <option value="">Selecione</option>
                                    <option value="kg">Kg</option>
                                    <option value="g">G</option>
                                    <option value="cabeca">Cabecas</option>
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-stacked-select">Categoria</label>
                            <div className="uk-form-controls uk-form-width-large">
                                <select className="uk-select" id="form-stacked-select"
                                        onChange={event => setData('category', event.target.value)}
                                        value={data.category}
                                >
                                    <option value="">Selecione</option>
                                    <option value="agricultura">Agricultura</option>
                                    <option value="pecuaria">Pecuaria</option>
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="tt">Preco total(opcional)</label>
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-width-large" id="tt"
                                       type="number"
                                       placeholder="Preco total"
                                       onChange={event => setData('total_price', event.target.value)}
                                       value={data.total_price}
                                />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="p">Preco por produto (opcional)</label>
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-width-large" id="p"
                                       type="number"
                                       placeholder="Preco por cada produto "
                                       onChange={event => setData('price', event.target.value)}
                                       value={data.price}
                                />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-h-text">Preco para um numero de
                                produtos(optional)</label>
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-width-large" id="form-h-text" type="text"
                                       placeholder="Preco por numero ex.:(3/100)"
                                       onChange={event => setData('price_details', event.target.value)}
                                       value={data.price_details}
                                />
                                {errors.price_details && <div className="uk-text-danger">{errors.price_details}</div>}
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="pd">Site de compra online(opcional)</label>
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-width-large" id="pd"
                                       type="url"
                                       placeholder="Link do site que pode se comprar o produto"
                                       onChange={event => setData('site', event.target.value)}
                                       value={data.site}
                                />
                                {errors.site && <div className="uk-text-danger">{errors.site}</div>}
                            </div>
                        </div>
                        <div className="uk-margin ">
                            <label className="uk-form-label" htmlFor="img">Selecione imagem principal</label> <br/>
                            <div uk-form-custom="true" className="uk-form-width-large">
                                <input onChange={event => setData('image_path', event.target.files[0])}
                                       type="file"/>
                                <button className="uk-button uk-button-default uk-width-1-1" type="button"
                                        tabIndex="-1">
                                    <span uk-icon="icon: cloud-upload"/>
                                    <span className="uk-text-middle">Selecione uma imagem para carregar</span>
                                </button>
                            </div>
                            {errors.image_path && <div className="uk-text-danger">{errors.image_path}</div>}
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="d">Descricao do produto</label>
                            <div className="uk-form-controls uk-form-width-large">
                                <textarea required className="uk-textarea" rows="5"
                                          placeholder="Descreva mais o seu produto aqui."
                                          onChange={event => setData('details', event.target.value)}
                                          value={data.details}
                                />
                                {errors.details && <div className="uk-text-danger">{errors.details}</div>}
                            </div>
                        </div>
                        <div>
                            <button disabled={processing} className="uk-button uk-button-primary">Registar</button>
                        </div>
                    </form>
                </div>
            </div>

        </Authenticated>
    );
}
