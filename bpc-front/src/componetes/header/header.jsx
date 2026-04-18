import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Conteudo from "./Conteudo/Conteudo.jsx";
import Navegacao from "./navegacao/navegacao";

export default function Header() {
    const [Logado, setLogado] = useState(false)
    const [Admin, setAdmin] = useState(false)

    useEffect(() => {
        const userData = localStorage.getItem("user")

        if (userData) {
            const user = JSON.parse(userData)
            setLogado(true)

            setAdmin(user.role === "admin")
        }
    }, [])

    return (
        <>
            <header className="absolute z-10 h-max top-0 w-full bg-white">
                {Logado && (
                    <div className="h-10 md:h-8 bg-black text-white flex items-center flex-wrap justify-center gap-4 px-2 md:px-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">
                            Modo Editor
                        </span>

                        <Link to="/dashboard" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-[10px] bg-white text-black px-1 md:px-2 py-0.5 rounded hover:bg-gray-200 transition-colors font-bold" >
                            Editar Conteúdo
                        </Link>

                        {Admin && (
                            <Link to="/dashboard" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-[10px] bg-white text-black px-1 md:px-2 py-0.5 rounded hover:bg-gray-200 transition-colors font-bold" >
                                + Adicionar Editor
                            </Link>
                        )}
                    </div>
                )}

                <Conteudo />
                <Navegacao />
            </header>

            <div className={`${Logado ? "h-43 md:h-41" : "h-33 md:h-32"}`}></div>
        </>
    )
}