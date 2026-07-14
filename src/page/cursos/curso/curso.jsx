import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../../componetes/header/header";
import Footer from "../../../componetes/footer/footer";
import dados from "../../../config/cursos.json";

export default function Curso() {
    const { slug } = useParams();
    const curso = dados?.find(c => c.slug === slug);

    useEffect(() => {
        if (curso) {
            document.title = curso.nome;
        }
    }, [curso]);

    if (!curso) return <Navigate to="/404" />;

    const temPromocao = curso.promocao?.ativa;
    const precoOriginal = curso.preco;
    const precoFinal = temPromocao ? curso.promocao.valor : curso.preco;
    const descontoPercentual = temPromocao ? Math.round(100 - (precoFinal * 100) / precoOriginal) : 0;
    const parcela = (precoFinal / 12).toFixed(2);

    return (
        <main>
            <Header />

            <section className="mt-3 md:mt-10 pb-2 px-3 md:px-6">
                <div className="flex flex-col md:flex-row gap-10 justify-center">
                    <div className="max-w-sm">
                        <p className="flex text-yellow-400 text-lg">★★★★★</p>
                        <h1 className="text-3xl font-bold mt-2 wrap-break-word leading-tight">{curso.nome}</h1>
                        <p className="mt-4 text-gray-600 text-base leading-relaxed wrap-break-word">{curso.sobre}</p>
                    </div>

                    <div className="w-full md:max-w-md">
                        <div className="relative">
                            {curso.imagem && <img src={curso.imagem} alt={curso.nome} className="w-full h-60 object-contain" />}
                            <button onClick={() => navigator.share({ title: curso.nome, url: window.location.href })} className="cursor-pointer absolute top-3 right-3 bg-black/40 rounded-full p-1" title="Compartilhar">🔗</button>
                        </div>

                        <div className="px-2 py-2">
                            <div className="mt-4">
                                {temPromocao && <p className="text-sm text-gray-500 line-through">{`R$ ${precoOriginal.toFixed(2)}`}</p>}

                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-bold text-green-600">{`R$ ${precoFinal.toFixed(2)}`}</p>
                                    {temPromocao && <span className="text-sm font-semibold text-green-700">{`${descontoPercentual}% OFF`}</span> }
                                </div>
                            </div>

                            <p className="text-sm text-gray-600">{`12x R$ ${parcela} sem juros`}</p>
                            <a href={curso.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-3 rounded-md transition-colors">Comprar pelo WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}