import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            {props.auth.user.admin !== "1" && props.auth.user.subscribe_id > 0 && (
                <>
                    <div className="uk-alert-success" uk-alert="true">
                        <a className="uk-alert-close" uk-close="true" />
                        <p>
                            Ola!{props.auth.user.name}{" "}
                            {props.auth.user.last_name} Estas a usar a versao de
                            teste do sisema LURIMA, tens 30 dias para testar e
                            desfrutar do melhor do sistema.
                        </p>
                    </div>
                    <div className="uk-alert-success" uk-alert="true">
                        <a className="uk-alert-close" uk-close="true" />
                        <p>
                            Entre em contacto com a equipa da lutima para
                            qualquer esclarecimento ou caso queira subscrever se
                            aos nossos servicos.
                        </p>
                    </div>
                </>
            )}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative flex  justify-center   sm:pt-0">
                            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                                <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="p-6">
                                            <div className="flex items-center">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    className="w-8 h-8 text-gray-500"
                                                >
                                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                                </svg>
                                                <div className="ml-4 text-lg leading-7 font-semibold">
                                                    <a className="underline text-gray-900 dark:text-white">
                                                        Sobre nos
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="ml-12">
                                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                                    bla bla sbrenos.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                            <div className="flex items-center">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    className="w-8 h-8 text-gray-500"
                                                >
                                                    <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                                    <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <div className="ml-4 text-lg leading-7 font-semibold">
                                                    <a className="underline text-gray-900 dark:text-white">
                                                        Nossa Missao
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="ml-12">
                                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                                    Apostamos em bla bla bla
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    className="w-8 h-8 text-gray-500"
                                                >
                                                    <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                                </svg>
                                                <div className="ml-4 text-lg leading-7 font-semibold">
                                                    <a className="underline text-gray-900 dark:text-white">
                                                        Nossos contactos
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="ml-12">
                                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                                    contact News is a community
                                                    driven portal and newsletter
                                                    aggregating all of the
                                                    latest and most important
                                                    news in the contacts
                                                    ecosystem, including new
                                                    package releases and
                                                    tutorials.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                                            <div className="flex items-center">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    className="w-8 h-8 text-gray-500"
                                                >
                                                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                                    Nossos parceiros
                                                </div>
                                            </div>

                                            <div className="ml-12">
                                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                                    help you take your projects
                                                    to the next level. Pair them
                                                    with powerful open source
                                                    libraries like{" "}
                                                    <a
                                                        href="https://laravel.com/docs/billing"
                                                        className="underline"
                                                    >
                                                        Cashier
                                                    </a>
                                                    ,{" "}
                                                    <a
                                                        href="https://laravel.com/docs/dusk"
                                                        className="underline"
                                                    >
                                                        Dusk
                                                    </a>
                                                    ,{" "}
                                                    <a
                                                        href="https://laravel.com/docs/broadcasting"
                                                        className="underline"
                                                    >
                                                        Echo
                                                    </a>
                                                    ,{" "}
                                                    <a
                                                        href="https://laravel.com/docs/horizon"
                                                        className="underline"
                                                    >
                                                        Horizon
                                                    </a>
                                                    ,{" "}
                                                    <a
                                                        href="https://laravel.com/docs/sanctum"
                                                        className="underline"
                                                    >
                                                        Sanctum
                                                    </a>
                                                    ,{" "}
                                                    <a
                                                        href="https://laravel.com/docs/telescope"
                                                        className="underline"
                                                    >
                                                        Telescope
                                                    </a>
                                                    , and more.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
