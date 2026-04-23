import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Conteudo from "./Conteudo/Conteudo.jsx";
import Navegacao from "./navegacao/navegacao";

export default function Header() {
    return (
        <>
            <header className="absolute z-8 h-max top-0 w-full bg-white"> 
                <Conteudo />
                <Navegacao />
            </header>

            <div className="h-33 md:h-32"></div>
        </>
    )
}