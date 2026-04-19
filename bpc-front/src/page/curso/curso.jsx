import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../../componetes/header/header";
import Footer from "../../componetes/footer/footer";
import { gifCarregando } from "../../config/imagem";

export default function Curso() {
    const { slug } = useParams()
    const [curso, setCurso] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/cursos/curso?slug=${slug}`).then(res => { return res.json(); })
            .then(data => {
                setCurso(data);
                setLoading(false);
            })
            .catch(err => {
                if (err) {
                    console.error("Erro ao buscar curso:", err);
                    return <Navigate to={"/404"} />
                }
            });
    }, [slug]);

    useEffect(() => {
        if (curso) {
            document.title = curso.nome
        }
    }, [curso])

    if (loading) {
        if (loading) {
            document.title = "Carregando..."
        }

        return (
            <div className="flex justify-center mt-15">
                <img src={gifCarregando} alt="Carregando dados do curso..." />
            </div>
        )
    }

    if (!curso) {
        return <Navigate to={"/404"} />
    }

    const temPromocao = curso.promocao?.ativa;
    const precoOriginal = curso.preco;
    const precoFinal = temPromocao ? curso.promocao.valor : curso.preco;
    const descontoPercentual = temPromocao ? Math.round(100 - (precoFinal * 100) / precoOriginal) : 0;
    const parcela = (precoFinal / 12).toFixed(2)

    const compartilhar = () => {
        navigator.share ? navigator.share({ title: curso.nome, url: window.location.href }) : navigator.clipboard.writeText(window.location.href)
    }

    return (
        <main>
            <Header />

            <section className="mt-3 md:mt-10 pb-2 px-3 md:px-6">
                <div className="flex flex-col md:flex-row gap-10 justify-center">

                    <div className="max-w-sm">
                        <p className="flex text-yellow-400 text-lg">
                            5 ★★★★★
                        </p>

                        <p className="text-3xl font-bold mt-2 wrap-break-word leading-tight">
                            {curso.nome}
                        </p>

                        {curso.maisVendido && (
                            <div className="mt-2 inline-block bg-[#f67734] text-white text-xs font-bold px-2 py-1 rounded">
                                Mais vendido
                            </div>
                        )}

                        <p className="mt-4 text-gray-600 text-base leading-relaxed wrap-break-word">
                            {curso.sobre}
                        </p>
                    </div>

                    <div className="md:max-w-md w-full">
                        <div className="relative">
                            {curso.imagem && (
                                <img src={curso.imagem} alt={curso.nome} className="w-full h-60 object-contain" />
                            )}

                            <button onClick={compartilhar} className="cursor-pointer absolute top-3 right-3 bg-black/40 rounded-full p-1" title="Compartilhar">
                                🔗
                            </button>
                        </div>

                        <div className="px-2 md:px-4 py-2">
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

                            <button className="mt-7">
                                <a href={curso.whatsapp} target="_blank" className="w-full h-full bg-black text-white px-4 py-2 rounded-md" >
                                    Comprar pelo WhatsApp
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}