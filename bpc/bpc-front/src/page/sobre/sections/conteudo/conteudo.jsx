import dadosSobre from "../../../../data/sobre.json";
import Perguntas from "../../../../componetes/perguntas/perguntas";

import Footer from "../../../../componetes/footer/footer";

function Conteudo(params) {
    const sobre = dadosSobre.conteudo[0]
    const social = dadosSobre.matricula[0]

    return (
        <section className="flex justify-center flex-col items-center">

            <div className="w-[75%]">
                <div className="p-2 flex items-center flex-col gap-0.5">
                    <h1 className="text-xl md:text-2xl uppercase font-bold">{dadosSobre.titulo}</h1>
                    <p className="text-sm md:text-base text-[#bc2c2d]">{dadosSobre.paragrafo}</p>
                </div>

                <div className="w-full mt-2 flex gap-5 flex-col md:flex-row p-2">
                    <div>
                        <p className="text-sm md:text-md px-2 py-1">{sobre.texto}</p>

                        <button className="cursor-pointer mx-2 my-3 bg-[#40c351] rounded-md border">
                            <a href={social.url} className="flex gap-2 flex-row items-center px-2 py-1">
                                <img className="h-7" src={social.icon} alt="Foto-WhatsApp" />

                                <span className="text-[18px] font-medium">
                                    {social.button}
                                </span>
                            </a>
                        </button>

                        {dadosSobre.perguntas && (
                            <Perguntas items={dadosSobre.perguntas} />
                        )}

                    </div>

                    <img className="h-100 rounded-md object-contain" src={sobre.imagem} alt="foto-1" />
                </div>
            </div>

            <Footer />

        </section>
    )
}

export default Conteudo