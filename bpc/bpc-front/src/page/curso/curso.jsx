import { useParams, Navigate } from "react-router-dom";

import dadosCursos from "../../data/cursos.json";

import Header from "../../componetes/header/header";
import Footer from "../../componetes/footer/footer";
import { useEffect } from "react";

function Curso() {
    const { slug } = useParams()
    const todosCursos = dadosCursos.flatMap(secao => secao.cursos)

    const curso = todosCursos.find(
        c => c.slug === slug
    )

    if (!curso) {
        return <Navigate to={"/404"} />
    }

    const temPromocao = curso.promocao?.ativa;
    const precoOriginal = curso.preco;
    const precoFinal = temPromocao ? curso.promocao.valor : curso.preco;
    const descontoPercentual = temPromocao ? Math.round(100 - (precoFinal * 100) / precoOriginal) : 0;
    const estrelas = Math.round(curso.avaliacao)
    const parcela = (precoFinal / 12).toFixed(2)

    const compartilhar = () => {
        navigator.share ? navigator.share({ title: curso.nome, url: window.location.href }) : navigator.clipboard.writeText(window.location.href)
    }

    useEffect(() => {
        document.title = curso.nome
    })

    return (
        <main>
            <Header></Header>

            <section className="mt-40 px-6">
                <div className="flex flex-col md:flex-row gap-10 justify-center">

                    <div className="max-w-sm">
                        <div className="flex text-yellow-400 text-lg">
                            <span className="mr-1">{curso.avaliacao}</span>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>
                                    {`${i < estrelas ? "★" : "☆"}`}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl font-bold mt-2">
                            {curso.nome}
                        </h1>

                        {curso.vendido && (
                            <div className="mt-2 inline-block bg-[#f67734] text-white text-xs font-bold px-2 py-1 rounded">
                                Mais vendido
                            </div>
                        )}

                        <p className="mt-4 text-gray-600">
                            {curso.resumo}
                        </p>
                    </div>

                    <div className="md:max-w-md w-full">
                        <div className="relative">
                            {curso.imagem?.length > 0 && (
                                <img src={curso.imagem[0]} alt={curso.nome} className="w-full h-60 object-contain" />
                            )}

                            <button onClick={compartilhar} className="cursor-pointer absolute top-2 right-2 bg-black/40 rounded-full p-1 shadow" title="Compartilhar">
                                🔗
                            </button>
                        </div>

                        <div className="mt-4 px-4 py-2">
                            <div className="mt-4">
                                {temPromocao && (
                                    <p className="text-sm text-gray-500 line-through">
                                        {`R$ ${precoOriginal.toFixed(2)}`}
                                    </p>
                                )}

                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-bold text-green-600">
                                        {`R$ ${precoFinal.toFixed(2)}`}
                                    </p>

                                    {temPromocao && (
                                        <span className="text-sm font-semibold text-green-700">
                                            {`${descontoPercentual}% OFF`}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm text-gray-600">
                                {`12x R$ ${parcela} sem juros`}
                            </p>

                            <button className="mt-5">
                                <a href={curso.whatsapp} target="_blank" className="w-full h-full bg-black text-white px-4 py-2 rounded-md" >
                                    Comprar pelo WhatsApp
                                </a>
                            </button>
                        </div>

                        <div className="px-4 py-2">
                            <h4 className="font-bold mb-1">Detalhes</h4>
                            <p className="text-sm text-gray-600">
                                {curso.sobre}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </main>
    )
}

export default Curso