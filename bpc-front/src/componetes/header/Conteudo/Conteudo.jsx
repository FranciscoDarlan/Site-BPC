import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { linkExterno, localizacao, login, zap } from "../../../config/imagem";

import dadosSocias from "../../../data/social.json";
import dadosSobre from "../../../data/sobre.json";

export default function ConteudoHeader() {
    const data = dadosSocias

    const [localAtual, setLocalAtual] = useState(0)
    const [mostrarTodos, setMostrarTodos] = useState(false)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setLocalAtual((prev) =>
                prev === data.localidade.length - 1 ? 0 : prev + 1
            )

        }, 3000)

        return () => clearInterval(intervalo)
    }, [data.localidade.length])

    return (
        <div className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto p-4 md:px-10 flex justify-between items-center">

                <div className="flex items-center flex-1 basis-0 justify-start">
                    <div className="w-full max-w-max md:max-w-40">
                        <button onClick={() => setMostrarTodos(!mostrarTodos)} className="active:scale-95 bg-white border border-gray-200 p-1.5 md:px-3 rounded-lg md:rounded-md flex w-full items-center justify-between cursor-pointer transition-all hover:border-gray-400 shadow-sm" >
                            <img className="h-5 w-5 shrink-0" src={localizacao} alt="localização" />

                            <div className="hidden md:flex flex-1 items-center justify-center overflow-hidden ml-2">
                                <span className="text-[15px] font-bold truncate text-gray-800">
                                    {data.localidade[localAtual]?.nome || "Polo"}
                                </span>
                            </div>
                        </button>
                    </div>

                    {mostrarTodos && (
                        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setMostrarTodos(false)}>
                            <div className="animate-fadein bg-white rounded-2xl p-6 gap-4 flex flex-col min-w-70 max-w-[90vw] shadow-2xl" onClick={(e) => e.stopPropagation()}>
                                <h3 className="font-bold text-xl text-gray-800 border-b pb-2">Selecione seu Polo</h3>

                                <div className="flex flex-col gap-2 max-h-[50vh] overflow-y-auto pr-2 custom-scroll">
                                    {data.localidade.map((local, index) => (
                                        <a title={`Polo de ${local.nome}`} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 hover:bg-red-50 rounded-xl transition-all group" key={index} href={local.local} >

                                            <span className="text-gray-700 group-hover:text-red-600 font-medium truncate mr-4">
                                                {local.nome}
                                            </span>

                                            <img className="h-4 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" src={linkExterno} alt="externo" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-none justify-center px-4">
                    <h1 className="text-2xl md:text-4xl uppercase font-black tracking-tighter text-[#bc2c2d] select-none">
                        BPC
                    </h1>
                </div>

                <div className="flex items-center flex-1 basis-0 justify-end gap-2 md:gap-4">

                    <div className="hidden lg:flex items-center gap-2">
                        {data.rede.map((social, index) => (
                            <a title={social.nome} target="_blank" rel="noreferrer" key={index} href={social.url} className="hover:scale-110 transition-transform">
                                <img loading="lazy" className="h-7 w-7 object-contain" src={social.icon} alt={social.nome} />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center md:border-l border-gray-200 pl-2 md:pl-4 gap-2">
                        <a title="Matricule-se pelo whatsapp" target="_blank" rel="noreferrer" href={dadosSobre.matricula} className="hover:scale-110 transition-transform active:scale-90" >
                            <img className="h-7 w-7 md:h-8 md:w-8" src={zap} alt="contato" />
                        </a>

                        <button className="cursor-pointer hover:opacity-80 transition-opacity p-0.5 border-2 border-transparent hover:border-red-100 rounded-full">
                            <img className="h-9 w-9 bg-gray-50 rounded-full object-cover" src={login} alt="login" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}