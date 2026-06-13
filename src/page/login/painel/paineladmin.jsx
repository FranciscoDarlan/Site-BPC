import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { gifCarregando } from "../../../config/imagem";

export default function PainelAdmin() {
    const [aba, setAba] = useState("info");
    const [infoData, setInfoData] = useState(null);
    const [cursosData, setCursosData] = useState(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        document.title = "BPC - Administrador";
        fetch("/api/principal/info").then(res => res.json()).then(setInfoData);
        fetch("/api/cursos/cursos").then(res => res.json()).then(setCursosData);
    }, []);

    const salvar = async (endpoint, payload) => {
        setStatus("Salvando...");
        const token = localStorage.getItem("token");

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setStatus("✅ Atualizado com sucesso!");
                setTimeout(() => setStatus(""), 3000);
            } else {
                setStatus("❌ Erro ao salvar.");
            }
        } catch (err) {
            setStatus("❌ Erro de conexão.");
        }
    };

    if (!infoData || !cursosData) return <div className="flex justify-center p-10"><img src={gifCarregando} alt="Carregando..." /></div>;

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            <header className="h-14 bg-[#86221d] flex items-center justify-between px-6 shadow-lg sticky top-0 z-50">
                <Link className="text-white font-bold hover:text-white/60" to="/">Início</Link>
                <div className="flex gap-2">
                    <button onClick={() => setAba("info")} className={`cursor-pointer px-4 py-1 rounded text-xs font-bold transition-all ${aba === "info" ? "bg-white text-[#86221d]" : "text-white border border-white/30"}`}>Configurações Gerais</button>
                    <button onClick={() => setAba("cursos")} className={`cursor-pointer px-4 py-1 rounded text-xs font-bold transition-all ${aba === "cursos" ? "bg-white text-[#86221d]" : "text-white border border-white/30"}`}>Gerenciar Cursos</button>
                </div>
            </header>

            <section className="max-w-6xl mx-auto p-6">
                {status && (
                    <div className="fixed bottom-5 right-5 rounded bg-white border-l-4 border-green-500 p-3 shadow-2xl z-50 animate-fadein">
                        {status}
                    </div>
                )}

                {/* --- ABA INFO --- */}
                {aba === "info" && (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center border-b pb-4">
                            <h3 className="text-2xl font-black text-gray-800">Informações do Site</h3>
                            <button onClick={() => salvar("/api/admin/save-info", infoData)} className="cursor-pointer bg-green-600 text-white px-6 py-2 rounded-lg font-bold">Salvar</button>
                        </div>

                        {/* SLIDE */}

                        {/* WHATSAPP GERAL */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border">
                            <label className="block font-bold text-gray-700 mb-2">WhatsApp de Matrícula</label>
                            <input type="text" value={infoData.matricula} onChange={(e) => setInfoData({ ...infoData, matricula: e.target.value })} className="w-full p-3 bg-gray-50 border rounded-lg outline-none focus:border-red-500" />
                        </div>

                        {/* POLOS */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border">
                            <h4 className="font-bold text-lg mb-4">Polos / Localidades</h4>
                            {infoData.localidade.map((loc, idx) => (
                                <div key={idx} className="flex gap-4 mb-4 pb-4 border-b last:border-0">
                                    <input className="flex-1 p-2 border rounded" value={loc.nome} placeholder="Nome do Polo" onChange={(e) => {
                                        const newLoc = [...infoData.localidade];
                                        newLoc[idx].nome = e.target.value;
                                        setInfoData({ ...infoData, localidade: newLoc });
                                    }} />
                                    <input className="flex-1 p-2 border rounded" value={loc.local} placeholder="Link Google Maps" onChange={(e) => {
                                        const newLoc = [...infoData.localidade];
                                        newLoc[idx].local = e.target.value;
                                        setInfoData({ ...infoData, localidade: newLoc });
                                    }} />
                                </div>
                            ))}
                        </div>

                        {/* REDES SOCIAIS */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border">
                            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
                            {infoData.rede.map((r, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 pb-4 border-b last:border-0">
                                    <input className="p-2 border rounded" value={r.nome} placeholder="Nome (Ex: Instagram)" onChange={(e) => {
                                        const newRede = [...infoData.rede];
                                        newRede[idx].nome = e.target.value;
                                        setInfoData({ ...infoData, rede: newRede });
                                    }} />
                                    <input className="p-2 border rounded" value={r.url} placeholder="URL da página" onChange={(e) => {
                                        const newRede = [...infoData.rede];
                                        newRede[idx].url = e.target.value;
                                        setInfoData({ ...infoData, rede: newRede });
                                    }} />
                                    <input className="p-2 border rounded" value={r.icon} placeholder="URL do Ícone" onChange={(e) => {
                                        const newRede = [...infoData.rede];
                                        newRede[idx].icon = e.target.value;
                                        setInfoData({ ...infoData, rede: newRede });
                                    }} />
                                </div>
                            ))}
                        </div>

                        {/* PERGUNTAS FREQUENTES */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border">
                            <div className="flex justify-between mb-4">
                                <h4 className="font-bold text-lg">Perguntas Frequentes</h4>
                                <button onClick={() => setInfoData({ ...infoData, perguntas: [...infoData.perguntas, { pergunta: "", resposta: "" }] })} className="text-blue-600 font-bold text-sm">+ Adicionar Pergunta</button>
                            </div>
                            {infoData.perguntas.map((p, idx) => (
                                <div key={idx} className="space-y-2 mb-4 pb-4 border-b">
                                    <input className="w-full p-2 border rounded font-bold" value={p.pergunta} placeholder="Pergunta" onChange={(e) => {
                                        const newP = [...infoData.perguntas];
                                        newP[idx].pergunta = e.target.value;
                                        setInfoData({ ...infoData, perguntas: newP });
                                    }} />
                                    <textarea className="w-full p-2 border rounded text-sm" value={p.resposta} placeholder="Resposta" onChange={(e) => {
                                        const newP = [...infoData.perguntas];
                                        newP[idx].resposta = e.target.value;
                                        setInfoData({ ...infoData, perguntas: newP });
                                    }} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- ABA CURSOS --- */}
                {aba === "cursos" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b pb-4">
                            <h3 className="text-2xl font-black text-gray-800">Cursos Disponíveis</h3>
                            <button onClick={() => salvar("/api/admin/save-cursos", cursosData)} className="cursor-pointer bg-green-600 text-white px-6 py-2 rounded-lg font-bold">Salvar</button>
                        </div>

                        {cursosData.map((curso, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 space-y-4">
                                    <label className="block text-xs font-black text-gray-400">NOME E DESCRIÇÃO</label>
                                    <input className="text-xl font-bold w-full border-b p-1 outline-none focus:border-red-500" value={curso.nome} onChange={(e) => {
                                        const newC = [...cursosData];
                                        newC[idx].nome = e.target.value;
                                        setCursosData(newC);
                                    }} />
                                    <textarea className="w-full text-sm text-gray-600 border rounded p-2 h-24" value={curso.sobre} onChange={(e) => {
                                        const newC = [...cursosData];
                                        newC[idx].sobre = e.target.value;
                                        setCursosData(newC);
                                    }} />
                                    <input className="w-full text-xs p-2 bg-gray-50 border rounded" value={curso.whatsapp} placeholder="Link WhatsApp específico deste curso" onChange={(e) => {
                                        const newC = [...cursosData];
                                        newC[idx].whatsapp = e.target.value;
                                        setCursosData(newC);
                                    }} />
                                </div>

                                <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                                    <label className="block text-xs font-black">CONFIGURAÇÕES DE PREÇO</label>
                                    <div>
                                        <span className="text-[10px] text-gray-400">VALOR BASE</span>
                                        <input type="number" className="w-full p-2 border rounded" value={curso.preco} onChange={(e) => {
                                            const newC = [...cursosData];
                                            newC[idx].preco = parseFloat(e.target.value);
                                            setCursosData(newC);
                                        }} />
                                    </div>

                                    <div className="flex items-center gap-2 p-2 border rounded bg-white">
                                        <input type="checkbox" checked={curso.promocao.ativa} onChange={(e) => {
                                            const newC = [...cursosData];
                                            newC[idx].promocao.ativa = e.target.checked;
                                            setCursosData(newC);
                                        }} />
                                        <span className="text-xs font-bold">EM PROMOÇÃO?</span>
                                    </div>

                                    {curso.promocao.ativa && (
                                        <div className="animate-fadein">
                                            <span className="text-[10px] font-bold">VALOR PROMOCIONAL</span>
                                            <input type="number" className="w-full p-2 border border-red-200 rounded font-bold" value={curso.promocao.valor} onChange={(e) => {
                                                const newC = [...cursosData];
                                                newC[idx].promocao.valor = parseFloat(e.target.value);
                                                setCursosData(newC);
                                            }} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}