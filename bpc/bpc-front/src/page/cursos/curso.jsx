import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { slugify } from "../../utils/slugify";
import Header from "../../componetes/header/header";
import Footer from "../../componetes/footer/footer";

import dadosCursos from "../../data/cursos.json";

function Curso(params) {
    const secao = dadosCursos[0]
    const maisVendidos = secao.cursos.filter(c => c.vendido)
    const [busca, setBusca] = useState("")
    const cursosFiltrados = secao.cursos.filter(curso => curso.nome.toLowerCase().includes(busca.toLowerCase()) || curso.resumo?.toLowerCase().includes(busca.toLowerCase()));

    useEffect(() => {
        document.title = "BPC - Cursos"
    })

    return (
        <main>
            <Header></Header>

            <section className="mt-40">

                <div className="flex flex-col items-center">
                    <h2 className="text-xl md:text-2xl uppercase font-bold">{secao.titulo}</h2>

                    {secao.descricao && (
                        <p className="text-sm md:text-base text-[#bc2c2d]">{secao.descricao}</p>
                    )}

                    <div className="mt-4 w-[80%] max-w-md">
                        <input type="text" placeholder="Buscar curso..." value={busca} onChange={(e) => setBusca(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2" />
                    </div>

                </div>

                <div className="mt-4 grid grid-cols-1 mx-5 sm:my-6 sm:grid-cols-2 sm:mx-6 md:grid-cols-3 md:mx-6 ">
                    {cursosFiltrados.map((curso, index) => {
                        const rank = maisVendidos.findIndex(c => c.slug === curso.slug);
                        const temPromocao = curso.promocao?.ativa;
                        const precoFinal = temPromocao ? curso.promocao?.valor : curso.preco;
                        const desconto = temPromocao ? Math.round(100 - (precoFinal * 100) / curso.preco) : 0;
                        const parcela = (precoFinal / 12).toFixed(2);

                        return (
                            <Link className="mx-1.5 my-1" title={curso.resumo} key={index} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} to={`/cursos/${slugify(curso.slug)}`}>
                                <div className="shadow-2xl rounded-md w-full overflow-hidden">
                                    {curso.imagem?.length > 0 && (
                                        <img className="w-full h-45 object-contain bg-[#e7e7e7]" src={curso.imagem[0]} alt={curso.nome} />
                                    )}

                                    <div className="py-4 px-3 bg-white">

                                        {curso.vendido && rank !== -1 && (
                                            <div className="bg-[#f67734] text-white text-[12px] font-bold px-2 py-1 rounded-md w-fit mb-2">
                                                {`${rank + 1}º Mais vendido`}
                                            </div>
                                        )}

                                        <div className="flex flex-col gap-1">

                                            {temPromocao && (
                                                <span className="line-through text-sm text-gray-500">
                                                    {`R$ ${curso.preco.toFixed(2)}`}
                                                </span>
                                            )}

                                            <div className="flex gap-2 items-center">
                                                <span className="font-bold text-lg">
                                                    {`R$ ${precoFinal.toFixed(2)}`}
                                                </span>

                                                {temPromocao && (
                                                    <span className="text-green-600 text-sm font-semibold">
                                                        {`${desconto} % OFF`}
                                                    </span>
                                                )}
                                            </div>

                                            <span className="text-xs text-gray-600">
                                                {`12x R$ ${parcela} sem juros`}
                                            </span>
                                        </div>

                                        <p className="mt-1 text-yellow-500 text-sm">
                                            {`★ ${curso.avaliacao}`}
                                        </p>

                                        <h2 className="mt-2 font-semibold">{curso.nome}</h2>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <Footer></Footer>
        </main>
    )
}

export default Curso