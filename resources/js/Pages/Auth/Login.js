import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="E-mail" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Senha" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Lembrar-me
                        </span>
                    </label>
                </div>
                <div className="mt-4 ">
                    <Button className="w-full bg-green-400 hover:bg-green-800 text-center" processing={processing}>
                        Log in
                    </Button>
                </div>
                <div className="flex  justify-between mt-4">
                    <span>
                        Nao tem conta?
                        <strong>
                            <Link
                                href={route("register")}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Regista-se
                            </Link>
                        </strong>
                    </span>&nbsp;&nbsp;
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-blue-600 hover:text-blue-900"
                        >
                            Esqueceu a senha?
                        </Link>
                    )}
                </div>
            </form>
        </Guest>
    );
}
