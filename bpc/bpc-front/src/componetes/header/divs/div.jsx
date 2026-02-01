import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import dadosSocias from "../../../data/social.json";
import dadosSobre from "../../../data/sobre.json";

function Div() {
    const data = dadosSocias[0]

    const [localAtual, setLocalAtual] = useState(0)
    const [mostrarTodos, setMostrarTodos] = useState(false)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setLocalAtual((prev) =>
                prev === data.localidade.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(intervalo);
    }, [data.localidade.length]);

    return (
        <div className="px-4 py-3 md:px-10 flex justify-between items-center">

            <div className="flex flex-row h-15">
                <div className="flex flex-row items-center md:gap-2 text-black w-max">
                    <button title="Localizações" onClick={() => setMostrarTodos(!mostrarTodos)} className="active:bg-black/10 bg-white border p-1 md:px-2 md:gap-1 rounded-md md:rounded-sm flex w-full items-center justify-between cursor-pointer text-[10px]">
                        <img title="Localizações" className="h-5 w-5" src={data["foto-localizacao"]} alt="localização" />

                        <div className="flex flex-row items-center justify-between md:w-15">
                            <span className="hidden md:block text-[17px] font-bold">
                                {data.localidade[localAtual].nome}
                            </span>
                        </div>

                        <span className="hidden md:block text-[10px] md:text-[12px]">
                            {mostrarTodos ? "▲" : "▼"}
                        </span>
                    </button>
                </div>

                {mostrarTodos && (
                    <div className="fixed inset-0 bg-black/30" onClick={() => setMostrarTodos(false)}>
                        <div className="animate-fadeleft absolute pl-5 mt-17 bg-white rounded-r-lg py-1.5 px-2 gap-1 flex flex-col w-30">
                            {data.localidade.map((local, index) => (
                                <a title={`Polo de ${local.nome}`} target="_blank" className="flex items-center flex-row" key={index} href={local.local} >
                                    {local.nome}
                                    <img className="ml-1 h-3" src={data["img-link-externo"]} alt="" />
                                </a>
                            ))}
                        </div>

                    </div>
                )}
            </div>

            <h1>
                <Link to={"/"} title="Ir para página inicial" className="text-3xl uppercase font-bold text-[#bc2c2d]">{data["titulo-site"]}</Link>
            </h1>

            <div className="flex flex-row items-center">

                <div className="flex items-center flex-row">

                    <div className="hidden md:flex items-center flex-row">
                        {data.rede.map((social, index) => (
                            <a title={social.nome} target="_blank" key={index} href={social.url}>
                                <img loading="lazy" className="rounded-2xl h-7" src={social.icon} alt={social.nome} />
                            </a>
                        ))}
                    </div>

                    <button title={dadosSobre.matricula[0].button} className="static right-13 md:ml-0.5 flex flex-row items-center">
                        <a target="_blank" className="text-[18px]" href={dadosSobre.matricula[0].url}>
                            <img className="h-7" src={dadosSobre.matricula[0].icon} alt={dadosSobre.matricula[0].button} />
                        </a>
                    </button>
                </div>

                <button title="Login" className="cursor-pointer">
                    <img className="h-8 bg-white rounded-full" src="https://img.icons8.com/material-sharp/90/user-male-circle.png" alt="login" />
                </button>
            </div>
        </div>
    )
}

export default Div