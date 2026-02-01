import { useEffect } from "react";

import Header from "../../componetes/header/header";
import Conteudo from "./sections/conteudo/conteudo";

function Sobre(params) {
    useEffect(() => {
        document.title = "Sobre o BPC"
    })

    return (
        <>
            <Header></Header>

            <section className="mt-40.5 flex justify-center">
                <Conteudo />
            </section>
        </>
    )
}

export default Sobre