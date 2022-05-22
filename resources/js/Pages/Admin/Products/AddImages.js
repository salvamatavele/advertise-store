import Flash from "@/Components/Flash";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";

export default function AddImages(props) {
    let counter = 1;
    const { product } = usePage().props;
    const { data, setData, post, errors, progress, processing, reset } =
        useForm({
            product_id: product.id,
            image_path: undefined,
        });

    function upload(event) {
        event.preventDefault();
        post(route("admin.products.images.upload"));
        reset("image_path");
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mais imagens | {product.name}
                </h2>
            }
        >
            <Head title={`Addicionar Imagems ${product.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Flash />
                            <div
                                className="uk-position-relative "
                                uk-slideshow="animation: fade"
                            >
                                <ul className="uk-slideshow-items uk-uk-width-1-2">
                                    <li>
                                        <img
                                        width="400"
                                        height="400"
                                            src={`/${product.image_path}`}
                                            alt=""
                                            uk-cover="true"
                                        />
                                    </li>
                                    {product.images.map((image) => (
                                        <li key={image.id}>
                                            <img
                                            width="400"
                                            height="400"
                                                src={`/${image.image_path}`}
                                                alt=""
                                                uk-cover="true"
                                            />
                                        </li>
                                    ))}
                                </ul>

                                <div className="uk-position-bottom-center uk-position-small">
                                    <ul className="uk-thumbnav">
                                        <li uk-slideshow-item="0">
                                            <a href="#">
                                                <img
                                                    src={`/${product.image_path}`}
                                                    width="100"
                                                    height="67"
                                                    alt=""
                                                />
                                            </a>
                                        </li>
                                        {product.images.map((image) => (
                                            <li uk-slideshow-item={counter++}>
                                                <a href="#">
                                                    <img
                                                        src={`/${image.image_path}`}
                                                        width="100"
                                                        height="67"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="uk-flex uk-flex-center ">
                                <div className="uk-card-body">
                                    {progress && (
                                        <progress
                                            className="uk-progress"
                                            value={progress.percentage}
                                            max="100"
                                        >
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    <h6 className="">Adicionar mais Imagens</h6>
                                    <div className="uk-margin" uk-margin="true">
                                        <div uk-form-custom="target: true">
                                            <input
                                                type="file"
                                                onChange={(event) =>
                                                    setData(
                                                        "image_path",
                                                        event.target.files
                                                    )
                                                }
                                                multiple
                                            />
                                            <input
                                                className="uk-input uk-form-width-large"
                                                type="text"
                                                placeholder="Clique aqui e selecione imagens "
                                                disabled
                                            />
                                        </div>
                                        {errors.image_path && (
                                            <div className="uk-text-danger">
                                                {errors.image_path}
                                            </div>
                                        )}
                                        <button
                                            onClick={upload}
                                            title="upload"
                                            disabled={processing}
                                            className="uk-button uk-button-danger uk-float-right"
                                        >
                                            <span uk-icon="icon: cloud-upload" />
                                        </button>
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
