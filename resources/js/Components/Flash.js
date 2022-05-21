import React from 'react';
import {usePage} from "@inertiajs/inertia-react";
export default function Flash() {
    const {success, error} = usePage().props
    console.log(success)
    return(
        <>
            {success &&
            <div className="uk-alert-success" uk-alert="true">
                <a className="uk-alert-close" uk-close="true"/>
                <p>{success}</p>
            </div>
            }

            {error &&
            <div className="uk-alert-danger" uk-alert="true">
                <a className="uk-alert-close" uk-close="true"/>
                <p>{error}</p>
            </div>
            }
        </>
    )

}
