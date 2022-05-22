import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";

export default function About(props) {
    return(
        <>
        <NavBar auth={props.auth}/>
        <div className="uk-container">
            <p>About us</p>
        </div>
        <Footer/>
        </>
    )
}