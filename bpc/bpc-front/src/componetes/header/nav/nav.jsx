import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../../../public/assets/LOGO.png";

import dadosSocias from "../../../data/social.json";

function Nav(params) {
    const [mostrarTodos, setMostrarTodos] = useState(false)

    return (
        <nav className="h-12 bg-[#86221d] flex items-center justify-between px-[10%]">

            <Link to="/" className="cursor-pointer">
                <img title="Ir para página inicial" className="h-18 w-18 md:w-23 md:h-23" src={Logo} alt="logo-bpc" />
            </Link>

            <div className="flex items-center">

                <div className="hidden md:flex flex-row items-center gap-3">
                    <Link to={"/cursos"} className="text-white uppercase font-bold cursor-pointer text-xs hover:text-white/40">Cursos</Link>

                    <Link to={"/sobre"} className="text-white uppercase font-bold cursor-pointer text-xs hover:text-white/40">Sobre</Link>

                    <a target="_blank" className="text-white uppercase font-bold cursor-pointer text-xs hover:text-white/40" href="https://questoes-bpc.vercel.app/index.html">
                        Questões
                    </a>
                </div>

                <button onClick={() => setMostrarTodos(true)} className="md:hidden cursor-pointer text-white text-xl">☰</button>

                {mostrarTodos && (
                    <>
                        <div className="fixed inset-0 bg-black/30" onClick={() => setMostrarTodos(false)}>
                            <div className="absolute rounded-l-lg right-0 top-20 bg-white flex flex-col gap-3 p-3 z-20 animate-faderight">

                                <Link to={"/cursos"} className="text-black uppercase font-bold cursor-pointer text-xs">Cursos</Link>

                                <Link to={"/sobre"} className="text-black uppercase font-bold cursor-pointer text-xs">Sobre</Link>

                                <a target="_blank" className="text-black uppercase font-bold cursor-pointer text-xs" href="https://questoes-bpc.vercel.app/index.html">
                                    Questões
                                </a>

                                <div>
                                    {dadosSocias[0].rede.map((social, index) => (
                                        <div key={index}>
                                            <a title={social.nome} className="flex flex-row gap-1 mb-1" href={social.url} key={index}>
                                                <img className="h-6" loading="lazy" src={social.icon} alt="redes-socias" />
                                                {social.nome}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav