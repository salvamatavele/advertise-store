import {Link} from "@inertiajs/inertia-react";
import React from "react";
import '../../css/styles.css'

export default function NavBar({auth}) {
    return (
        <>
            <nav className=" nav uk-navbar uk-background-default" data-uk-navbar="true">
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item uk-padding-remove-horizontal">
                        <a className="uk-logo uk-text-primary" title="Lurima produtos agropecuarios" href="">
                            <img width="90" height="90" src="/images/lurima.png" alt="LURIMA"/>
                        </a>
                    </div>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <li className="uk-active uk-visible@s"><Link href={route('home')} uk-icon="home"/>
                        </li>
                        <li><Link href={route('products')} className="uk-link">Produtos</Link></li>
                        <li><Link className="uk-link" href={route('about')}>Sobre nos</Link>
                        </li>
                        <li className="uk-navbar-item">
                            {!auth.user? (
                                <Link className="uk-text-primary uk-link" href={route('login')}>Login</Link>
                            ):(
                                <Link className="uk-text-primary uk-link " href={route('dashboard')}>Dashboard</Link>
                            )}
                        </li>


                    </ul>
                    <a className="uk-navbar-toggle uk-navbar-item uk-hidden@s" data-uk-toggle=""
                       data-uk-navbar-toggle-icon="" href="#offcanvas-nav"/>
                </div>
            </nav>
            {/*// <!-- /NAV -->*/}
            {/*// <!-- OFFCANVAS -->*/}
            <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: false">
                <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
                    <button className="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close="true"></button>
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-nav-header">Menu</li>
                        <li><a href={route('home')}><span className="uk-margin-small-right uk-icon"
                                                        data-uk-icon="icon: home"/> Home</a></li>
                        <li><a href={route('products')} ><span className="uk-margin-small-right uk-icon"
                                              data-uk-icon="icon: thumbnails"/> Produtos</a></li>
                        <li><a href={route('about')}><span className="uk-margin-small-right uk-icon"
                                              data-uk-icon="icon: thumbnails"/> Sobre Nos</a></li>
                        <li className="uk-nav-divider"/>
                        {auth.user? (
                        <li><Link className="uk-text-primary uk-link" href={route('dashboard')}><span
                            className="uk-margin-small-right uk-icon" data-uk-icon="icon: admin"/>Dashboard</Link>
                        </li>
                        ):(
                        <li><Link className="uk-text-primary uk-link" href={route('login')}><span
                            className="uk-margin-small-right uk-icon" data-uk-icon="icon: sign-in"/>Login</Link>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
            {/*// <!-- /OFFCANVAS -->*/}
        </>
    )
}
