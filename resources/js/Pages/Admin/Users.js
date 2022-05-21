import {Head} from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";

export default function Users(props) {
    return(
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuarios</h2>}
            >
                <Head title="Usuarios" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">You're logged in user!{props.auth.user.name}</div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    )
}