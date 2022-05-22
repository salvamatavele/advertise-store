import { Head, usePage } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";
import Search from "@/Components/Search";
import Pagination from "@/Components/Pagination";
import Flash from "@/Components/Flash";
import { Inertia } from "@inertiajs/inertia";

export default function Users(props) {
    const { users } = usePage().props;
    const {
        data,
        meta: { links },
    } = users;

    function active(id) {
        Inertia.post(route("admin.users.active", id));
    }
    function desactive(id) {
        Inertia.post(route("admin.users.desactive", id));
    }
    function block(id) {
        Inertia.post(route("admin.users.block", id));
    }
    function desblock(id) {
        Inertia.post(route("admin.users.desblock", id));
    }
    function standard(id) {
        Inertia.post(route("admin.users.standard", id));
    }
    function pro(id) {
        Inertia.post(route("admin.users.pro", id));
    }
    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Usuarios
                    </h2>
                }
            >
                <Head title="Usuarios" />
                <Flash />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="uk-overflow-auto">
                                <Search />
                                <table className="uk-table uk-table-small uk-table-divider">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>email</th>
                                            <th>Estado</th>
                                            <th>Subscricao</th>
                                            <th>Situacao</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    {user.name} {user.last_name}
                                                </td>
                                                <td>{user.email}</td>
                                                <td>
                                                    {user.status === 1 ? (
                                                        <a
                                                            className="uk-badge background-success"
                                                            title="desactivar"
                                                            onClick={() => {
                                                                desactive(
                                                                    user.id
                                                                );
                                                            }}
                                                        >
                                                            Activo
                                                        </a>
                                                    ) : (
                                                        <a
                                                            className="uk-badge uk-background-secondary"
                                                            title="activar"
                                                            onClick={() => {
                                                                active(user.id);
                                                            }}
                                                        >
                                                            Inactivo
                                                        </a>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className="uk-inline">
                                                        <button
                                                            className="uk-button uk-button-default"
                                                            type="button"
                                                        >
                                                            ACCOES
                                                        </button>
                                                        <div uk-dropdown="mode: click">
                                                            <ul className="uk-nav uk-dropdown-nav">
                                                                <li className="uk-active">
                                                                    <a>
                                                                        Subscricao
                                                                        activa:
                                                                        {user.subscribe_id ===
                                                                            1 && (
                                                                            <label className="uk-badge">
                                                                                Free
                                                                            </label>
                                                                        )}
                                                                        {user.subscribe_id ===
                                                                            2 && (
                                                                            <a className="uk-badge">
                                                                                Standard
                                                                            </a>
                                                                        )}
                                                                        {user.subscribe_id ===
                                                                            3 && (
                                                                            <a className="uk-badge">
                                                                                Pro
                                                                            </a>
                                                                        )}
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        onClick={() => {
                                                                            standard(
                                                                                user.id
                                                                            );
                                                                        }}
                                                                    >
                                                                        Standard
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        onClick={() => {
                                                                            pro(
                                                                                user.id
                                                                            );
                                                                        }}
                                                                    >
                                                                        Pro
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {user.blocked === 0 ? (
                                                        <a
                                                            className="uk-badge background-success"
                                                            title="bloquear"
                                                            onClick={() => {
                                                                block(user.id);
                                                            }}
                                                        >
                                                            Desbloqueado
                                                        </a>
                                                    ) : (
                                                        <a
                                                            className="uk-badge uk-background-secondary"
                                                            title="desbloquear"
                                                            onClick={() => {
                                                                desblock(
                                                                    user.id
                                                                );
                                                            }}
                                                        >
                                                            Bloqueado
                                                        </a>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {data.length === 0 && (
                                    <label>Nenhum usuario encontrado</label>
                                )}
                                <Pagination links={links} />
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
