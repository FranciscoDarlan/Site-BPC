import { Link } from "react-router-dom";
import { useState } from "react";

import { logo } from "../../../config/imagem";

import dadosSocias from "../../../data/social.json";

export default function Nav() {
    const [mostrarTodos, setMostrarTodos] = useState(false)

    const linksNav = [
        { name: "Cursos", to: "/cursos", type: "internal" },
        { name: "Sobre", to: "/sobre", type: "internal" },
        { name: "Questões", to: "https://questoes-bpc.vercel.app/index.html", type: "external" },
    ]

    return (
        <nav className="sticky top-0 z-40 w-full bg-[#86221d] shadow-md">
            <div className="max-w-7xl mx-auto h-14 flex items-center justify-between px-4 md:px-[10%]">
                <Link to="/" className="shrink-0">
                    <img title="Ir para página inicial" className="h-12 w-auto md:h-22 transition-transform hover:scale-105" src={logo} alt="logo-bpc" />
                </Link>

                <div className="hidden md:flex flex-row items-center gap-6">
                    {linksNav.map((link, index) => (
                        link.type === "internal" ? (
                            <Link key={index} to={link.to} className="text-white uppercase font-bold text-sm hover:text-white/60 transition-colors">
                                {link.name}
                            </Link>
                        ) : (
                            <a key={index} href={link.to} target="_blank" rel="noreferrer" className="text-white uppercase font-bold text-sm hover:text-white/60 transition-colors">
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                <button onClick={() => setMostrarTodos(true)} className="md:hidden p-2 text-white text-2xl active:scale-90 transition-transform" >
                    ☰
                </button>

                {mostrarTodos && (
                    <div className="fixed inset-0 z-50">
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMostrarTodos(false)} />

                        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-2xl p-6 flex flex-col gap-6 animate-faderight overflow-y-auto">
                            <div className="flex justify-between items-center border-b pb-4">
                                <span className="font-bold text-[#86221d]">MENU</span>
                                <button onClick={() => setMostrarTodos(false)} className="text-2xl text-gray-500">&times;</button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {linksNav.map((link, index) => (link.type === "internal" ? (
                                    <Link key={index} to={link.to} onClick={() => setMostrarTodos(false)} className="text-black uppercase font-bold text-sm border-b border-gray-100 pb-2">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a key={index} href={link.to} target="_blank" rel="noreferrer" className="text-black uppercase font-bold text-sm border-b border-gray-100 pb-2">
                                        {link.name}
                                    </a>
                                )
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t">
                                <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Siga-nos</p>

                                <div className="grid grid-cols-2 gap-3">
                                    {dadosSocias.rede.map((social, index) => (
                                        <a key={index} href={social.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-bold text-gray-700 bg-gray-50 p-2 rounded-lg hover:bg-gray-100 truncate">
                                            <img className="h-5 w-5 shrink-0" src={social.icon} alt={social.nome} />
                                            <span className="truncate">{social.nome}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}