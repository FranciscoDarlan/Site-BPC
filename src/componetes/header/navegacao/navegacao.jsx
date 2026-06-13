import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { linkExterno } from "../../../config/imagem";

export default function Nav() {
    const [mostrarTodos, setMostrarTodos] = useState(false)
    const { data, loading, user } = useContext(AppContext);

    const linksNav = [
        { name: "Início", to: "/", type: "internal" },
        { name: "Cursos", to: "/cursos", type: "internal" },
        { name: "Questões", to: "https://questoes-bpc.vercel.app/index.html", type: "external" },
    ]

    return (
        <nav className="sticky top-0 z-20 w-full bg-[#86221d] shadow-md">
            <div className="max-w-7xl mx-auto h-14 flex items-center justify-between px-4 md:px-[10%]">
                <div className="flex gap-6">
                    <Link to={linksNav[0].to} className="text-white uppercase font-bold hover:text-white/60 transition-colors">
                        {linksNav[0].name}
                    </Link>

                    {user?.role === "admin" && (
                        <Link to={`/admin`} className="text-yellow-500 uppercase font-bold hover:text-white/60 transition-colors">EDITAR</Link>
                    )}
                </div>

                <div className="hidden md:flex flex-row items-center gap-6">
                    {linksNav.slice(1).map((link, index) => (
                        link.type === "internal" ? (
                            <Link key={index} to={link.to} className="text-white uppercase font-bold text-sm hover:text-white/60 transition-colors">
                                {link.name}
                            </Link>
                        ) : (
                            <a key={index} href={link.to} target="_blank" rel="noreferrer" className="group flex gap-2 items-center text-white uppercase font-bold text-sm hover:text-white/60 transition-colors">
                                {link.name} <img className="h-3 invert opacity-40 transition-opacity duration-300 group-hover:opacity-100" src={linkExterno} alt="link-externo" />
                            </a>
                        )
                    ))}
                </div>

                <button onClick={() => setMostrarTodos(true)} className="md:hidden p-2 text-white text-2xl active:scale-90 transition-transform" >
                    ☰
                </button>

                {mostrarTodos && (
                    <div className="fixed inset-0 z-50">
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" onClick={() => setMostrarTodos(false)} />

                        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-2xl p-6 flex flex-col gap-6 animate-faderight overflow-y-auto">
                            <div className="flex justify-between items-center border-b pb-4">
                                <span className="font-bold text-[#86221d]">MENU</span>
                                <button onClick={() => setMostrarTodos(false)} className="text-2xl text-gray-500">&times;</button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {linksNav.slice(1).map((link, index) => (link.type === "internal" ? (
                                    <Link key={index} to={link.to} onClick={() => setMostrarTodos(false)} className="text-black uppercase font-bold text-sm border-b border-gray-100 pb-2">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a key={index} href={link.to} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-black uppercase font-bold text-sm border-b border-gray-100 pb-2">
                                        {link.name} <img className="h-2.5" src={linkExterno} alt="link-externo" />
                                    </a>
                                )
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t">
                                <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Siga-nos</p>

                                <div className="grid grid-cols-2 gap-3">
                                    {loading ? null : (
                                        data?.rede?.map((social, index) => (
                                            <a key={index} href={social.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-bold text-gray-700 bg-gray-100 p-2 rounded-lg">
                                                <img className="h-5 w-5 shrink-0" src={social.icon} alt={social.nome} />
                                                <span className="truncate">{social.nome}</span>
                                            </a>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}