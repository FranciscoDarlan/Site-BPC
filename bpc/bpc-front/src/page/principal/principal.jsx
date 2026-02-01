import { useEffect } from "react"; 

import Header from "../../componetes/header/header";
import Slide from "./sections/slide/slide";
import Footer from "../../componetes/footer/footer";

function Principal() {
    useEffect(() => {
        document.title = "BPC - Principal"
    })

    return (
        <main>
            <Header />
            
            <section className="mt-32.5">
                <Slide />
            </section>

            <Footer />
        </main>
    )
}

export default Principal