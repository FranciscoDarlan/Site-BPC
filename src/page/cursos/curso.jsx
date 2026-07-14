import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../componetes/header/header";
import Footer from "../../componetes/footer/footer";
import dados from "../../config/cursos.json";

export default function Curso() {
    const [cursos] = useState(dados || []);

    const [busca, setBusca] = useState("");
    const [visiveis, setVisiveis] = useState(9);

    useEffect(() => {
        document.title = "BPC - Cursos";
    }, []);

    const cursosFiltrados = cursos.filter(curso =>
        curso.nome?.toLowerCase().includes(busca.toLowerCase()) ||
        curso.sobre?.toLowerCase().includes(busca.toLowerCase())
    );
    
    const cursosExibidos = cursosFiltrados.slice(0, visiveis);

    return (
        <>
            <Header />

            <main className="mt-10 flex flex-col items-center">
                <div className="w-full max-w-7xl px-0 md:px-5">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl md:text-2xl uppercase font-bold">Cursos Disponíveis</h2>
                        <p className="text-sm md:text-base text-[#bc2c2d]">Curso Profissionalizante em Bombeiro Civil</p>

                        <div className="mt-4 w-[80%] max-w-md">
                            <input id="buscar-curso" name="busca" type="search" placeholder="Buscar curso..." value={busca} onChange={(e) => setBusca(e.target.value)} className="w-full px-4 py-2 border border-[#999] rounded-md focus:outline-none focus:ring-2" />
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 mx-5 sm:my-6 sm:grid-cols-2 sm:mx-6 md:grid-cols-3 md:mx-6">
                        {cursosExibidos.map((curso, index) => {
                            const temPromocao = curso.promocao?.ativa;
                            const precoFinal = temPromocao ? curso.promocao?.valor : curso.preco;
                            const desconto = temPromocao ? Math.round(100 - (precoFinal * 100) / curso.preco) : 0;
                            const parcela = (precoFinal / 12).toFixed(2);

                            return (
                                <Link className="mx-1.5 my-1" key={index} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} to={`/cursos/${curso.slug}`}>
                                    <div className="border border-[#999] rounded-md w-full overflow-hidden">
                                        {curso.imagem?.length && (
                                            <img className="w-full h-45 object-contain border-b border-[#999]" src={curso.imagem} alt={curso.nome} />
                                        )}

                                        <div className="py-4 px-3 bg-white">
                                            <div className="flex flex-col gap-0.5">
                                                {temPromocao && (
                                                    <span className="line-through text-xs text-gray-500">
                                                        {`R$ ${curso.preco.toFixed(2)}`}
                                                    </span>
                                                )}

                                                <div className="flex gap-2 items-center">
                                                    <span className="font-bold text-lg">
                                                        {`R$ ${precoFinal.toFixed(2)}`}
                                                    </span>

                                                    {temPromocao && (
                                                        <span className="text-green-600 text-sm font-semibold">
                                                            {`${desconto}% OFF`}
                                                        </span>
                                                    )}
                                                </div>

                                                <span className="text-sm text-gray-600">
                                                    {`12x R$ ${parcela} sem juros`}
                                                </span>
                                            </div>

                                            <p className="text-sm text-yellow-500">5 ★</p>
                                            <h2 className="mt-2 font-semibold wrap-break-word">{curso.nome}</h2>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex justify-center">
                        {cursosFiltrados.length > visiveis && (
                            <button onClick={() => setVisiveis(prev => prev + 6)} className="cursor-pointer my-5 px-8 py-2 bg-[#bc2c2d] text-white rounded-md font-bold hover:bg-red-800 transition-colors">
                                MOSTRAR MAIS CURSOS
                            </button>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}