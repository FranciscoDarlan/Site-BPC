import { useState } from "react";
import { localizacoes, rede, matricula } from "../../../config/dados";

export default function ConteudoHeader() {
    const [localAtual, setLocalAtual] = useState(0)
    const [mostrarTodos, setMostrarTodos] = useState(false)

    return (
        <div className="w-full bg-white border-b border-white">
            <div className="max-w-7xl mx-auto p-4 md:px-10 flex justify-between items-center">
                <div className="flex items-center flex-1 basis-0 justify-start">
                    <div className="w-full max-w-max md:max-w-40">
                        <button onClick={() => setMostrarTodos(!mostrarTodos)} className="bg-white border border-gray-200 p-1.5 md:px-3 rounded-lg md:rounded-md flex w-full items-center justify-between cursor-pointer transition-all hover:border-gray-300 shadow-sm" >
                            <img className="h-5 w-5 shrink-0" src="https://img.icons8.com/fluency/48/location--v2.png" alt="" />

                            <div className="hidden md:flex flex-1 items-center justify-center overflow-hidden ml-2">
                                <span className="text-[15px] font-bold truncate text-gray-800">Localidades</span>
                            </div>
                        </button>
                    </div>

                    {mostrarTodos && (
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-30" onClick={() => setMostrarTodos(false)}>
                            <div className="animate-fadein bg-white rounded-2xl p-6 gap-4 flex flex-col min-w-70 max-w-[90vw] shadow-2xl" onClick={(e) => e.stopPropagation()}>
                                <p className="font-bold text-xl text-gray-800 border-b pb-2">Localidade do Polo <br /><strong className="font-extralight text-sm">Google Maps</strong></p>

                                <div className="flex flex-col gap-2 max-h-[50vh] overflow-y-auto custom-scroll">
                                    {localizacoes.map((local, index) => (
                                        <a title={`Polo ${local.nome}`} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 hover:bg-red-50 rounded-xl transition-all group" key={index} href={local.local} >
                                            <span className="text-gray-700 font-medium truncate mr-4">
                                                {local.nome}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-none justify-center px-4">
                    <h1 className="flex flex-row items-center gap-1 text-2xl md:text-4xl uppercase font-black tracking-tighter text-[#bc2c2d]">
                        <img className="h-10 w-10" src="/favicon.ico" alt="Logo" />
                        BPC
                    </h1>
                </div>

                <div className="flex items-center flex-1 basis-0 justify-end gap-2 md:gap-4">
                    <div className="hidden lg:flex items-center gap-2">
                        {rede.map((social, index) => (
                            <a title={social.nome} target="_blank" rel="noreferrer" key={index} href={social.url} className="hover:scale-110 transition-transform">
                                <img className="h-7 w-7 object-contain" src={social.icon} alt={social.nome} />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center md:border-l border-gray-200 pl-2 md:pl-4 gap-2">
                        <a title="Matricule-se pelo whatsapp" target="_blank" rel="noreferrer" href={matricula} className="hover:scale-110 transition-transform active:scale-90" >
                            <img className="h-7 w-7 md:h-8 md:w-8" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="Whastapp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}