import { useEffect } from "react";

import Header from "../../componetes/header/header";
import Conteudo from "./conteudo/conteudo";
import Footer from "../../componetes/footer/footer";

export default function Sobre() {
    useEffect(() => {
        document.title = "Sobre o BPC"
    })

    return (
        <>
            <Header />

            <Conteudo />

            <Footer />
        </>
    )
}