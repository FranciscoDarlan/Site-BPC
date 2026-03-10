import { useEffect } from "react";

import Header from "../../componetes/header/header";
import Slide from "./slide/slide";
import Footer from "../../componetes/footer/footer";

export default function Principal() {
    useEffect(() => {
        document.title = "BPC - Principal"
    })

    return (
        <>
            <Header />

            <Slide />

            <Footer />
        </>
    )
}