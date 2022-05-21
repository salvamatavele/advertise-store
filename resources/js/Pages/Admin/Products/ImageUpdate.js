import {useForm} from "@inertiajs/inertia-react";
import React from "react";

export default function ImageUpdate({product}) {
    const { progress, processing, setData, post, errors} = useForm({
        image_path: undefined,
    })
    function upload(e) {
        e.preventDefault()
        post(route('admin.products.image_update', product.id))
    }
    return(
        <>
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
                 uk-grid="true">
                <div className="uk-card-media-left uk-cover-container">
                    <img src={`/${product.image_path}`} alt="alt" uk-cover="true"/>
                </div>
                <div>
                    <div className="uk-card-body">
                        {progress && (
                            <progress className="uk-progress" value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <div className="uk-margin" uk-margin="true">
                            <div uk-form-custom="target: true">
                                <input onChange={event => setData('image_path', event.target.files[0])}
                                       type="file"
                                />
                                <input className="uk-input uk-form-width-medium"
                                       type="text"
                                       placeholder="Selecione uma imagem" disabled
                                />
                                {errors.image_path && <div className="uk-text-danger">{errors.image_path}</div>}
                            </div>
                            <button disabled={processing} type="button" onClick={upload} className="uk-button uk-button-default uk-width-1-1">upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
