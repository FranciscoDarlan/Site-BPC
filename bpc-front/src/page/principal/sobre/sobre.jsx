import dadosSobre from "../../../data/sobre.json";
import Perguntas from "../../../componetes/perguntas/perguntas";

import { zap } from "../../../config/imagem";

export default function Conteudo() {
    const sobre = dadosSobre.conteudo[0]

    return (
        <section className="w-full py-5 md:py-10 flex justify-center">
            <div className="w-full max-w-7xl px-4 md:px-10 flex flex-col items-center">

                <div className="p-2 flex items-center flex-col text-center gap-1 mb-6">
                    <h2 className="text-3xl uppercase font-black text-gray-800">
                        CURSO PROFISSIONALIZANTE BOMBEIRO CIVIL
                    </h2>

                    <div className="h-1 w-20 bg-[#bc2c2d] rounded-full mb-2"></div>

                    <p className="text-base font-medium text-[#bc2c2d]">
                        Conheça o Curso Profissionalizante em Bombeiro Civil
                    </p>
                </div>

                <div className="w-full flex gap-8 flex-col md:flex-row items-start lg:items-center">

                    <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                            {sobre.texto}
                        </p>

                        <button className="group cursor-pointer bg-[#40c351] hover:bg-[#34a843] text-white rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95 border-none outline-none">
                            <a href={dadosSobre.matricula} target="_blank" rel="noreferrer" className="flex gap-3 flex-row items-center px-6 py-3">
                                <img className="h-8 w-8" src={zap} alt="whatsApp" />
                                <span className="text-lg font-bold">Matricule-se pelo WhatsApp</span>
                            </a>
                        </button>

                        <div className="mt-8 w-full">
                            {dadosSobre.perguntas && (
                                <Perguntas items={dadosSobre.perguntas} />
                            )}
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <img className="w-full max-w-85 h-auto rounded-lg object-cover rotate-355" src={sobre.imagem} alt="FORMADOS" />
                    </div>
                </div>
            </div>
        </section>
    )
}