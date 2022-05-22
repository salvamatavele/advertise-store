import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";
import Flash from "@/Components/Flash";
import Swal from "sweetalert2";
import Search from "@/Components/Search";
import Pagination from "@/Components/Pagination";
export default function Index(props) {
    const { products } = usePage().props;
    const {
        data,
        meta: { links },
    } = products;
    const { delete: del, processing } = useForm({});
    function destroy(id) {
        Swal.fire({
            title: "Tem a certeza?",
            text: "Voce nao vai reverter esta operacao!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim",
            cancelButtonText: "Nao",
        }).then((result) => {
            if (result.isConfirmed) {
                del(route("admin.products.delete", id));
            }
        });
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Produtos
                </h2>
            }
        >
            <Head title="Produtos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Flash />
                            <div className="">
                                <Link
                                    href={route("admin.products.create")}
                                    className="uk-button uk-button-primary button-success"
                                >
                                    Novo Produto
                                </Link>
                            </div>
                            <hr />
                            <div className="uk-overflow-auto">
                                <Search />
                                <table className="uk-table uk-table-small uk-table-divider">
                                    <thead>
                                        <tr>
                                            <th>Imagem</th>
                                            <th>Nome</th>
                                            <th>Quantidade</th>
                                            <th>Categoria</th>
                                            <th>+ Imagens</th>
                                            <th>Accoes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((product) => (
                                            <tr key={product.id}>
                                                <td>
                                                    <a>
                                                        <img
                                                            width="50"
                                                            height="50"
                                                            src={`/${product.image_path}`}
                                                        />
                                                    </a>
                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.quantity}</td>
                                                <td>{product.category}</td>
                                                <td>
                                                    <a
                                                        href={route('admin.products.images',product.id)}
                                                        className="uk-link"
                                                    >
                                                        <span
                                                            className=""
                                                            uk-icon="plus"
                                                        />
                                                        Imagens
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href={route(
                                                            "admin.products.show",
                                                            product.id
                                                        )}
                                                        className="uk-icon-button"
                                                        uk-icon="info"
                                                    />
                                                    <a
                                                        href={route(
                                                            "admin.products.edit",
                                                            product.id
                                                        )}
                                                        className="uk-icon-button uk-text-primary"
                                                        uk-icon="pencil"
                                                    />
                                                    <a
                                                        aria-disabled={
                                                            processing
                                                        }
                                                        onClick={() => {
                                                            destroy(product.id);
                                                        }}
                                                        className="uk-icon-button uk-text-danger"
                                                        uk-icon="trash"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {data.length === 0 && (
                                    <label>Nenhum produto encontrado</label>
                                )}
                                <Pagination links={links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
