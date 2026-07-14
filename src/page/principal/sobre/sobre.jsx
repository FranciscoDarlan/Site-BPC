import { useState } from "react";
import { matricula, perguntas } from "../../../config/dados";

function Perguntas({ items }) {
    const [aberta, setAberta] = useState(null)

    const toggle = (index) => {
        setAberta((prev) => (prev === index ? null : index))
    }

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="border-b border-white">
                    <button onClick={() => toggle(index)} className="cursor-pointer  bg-[#86221d] w-full flex items-center px-3 py-2 text-left" >
                        <span className={`text-white text-sm transition-transform duration-300 ${aberta === index ? "rotate-180" : "rotate-0"}`} >▼</span>

                        <span className="ml-2 text-white text-sm">
                            {item.pergunta}
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${aberta === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`} >
                        <p className="px-3 py-2 text-sm">
                            {item.resposta}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Conteudo() {
    return (
        <section className="w-full py-5 md:py-10 flex justify-center">
            <div className="w-full max-w-7xl px-4 md:px-10 flex flex-col items-center">
                <div className="p-2 flex items-center flex-col text-center gap-1 mb-6">
                    <h2 className="text-3xl uppercase font-black text-gray-800">
                        CURSO PROFISSIONALIZANTE BOMBEIRO CIVIL
                    </h2>

                    <div className="h-1 w-20 bg-[#bc2c2d] rounded-full mb-2" />

                    <p className="text-base font-medium text-[#bc2c2d]">
                        Conheça o Curso Profissionalizante em Bombeiro Civil
                    </p>
                </div>

                <div className="w-full flex gap-8 flex-col md:flex-row items-start lg:items-center">
                    <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                            Seja um profissional em salvar vidas! O Bombeiro Civil é o profissional responsável pelos planos de emergência e gestão de riscos onde atua. O Bombeiro Civil atua em empresas, shows e eventos e fica responsável pela gestão dos riscos e situações com potencial de gerar uma emergência. Desenvolva na prática as atividades do dia-a-dia do Bombeiro Civil.
                        </p>

                        <a href={matricula} target="_blank" rel="noreferrer" className="bg-[#40c351] hover:bg-[#34a843] rounded-lg text-white flex gap-3 flex-row items-center px-6 py-3">
                            <img className="h-8 w-8" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="" />
                            <span className="text-lg font-bold">Matricule-se pelo WhatsApp</span>
                        </a>

                        <div className="mt-8">
                            {true > 0 && (
                                <Perguntas items={perguntas} />
                            )}
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <img className="w-full max-w-70 h-auto rounded-lg object-cover" src="/formados.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}