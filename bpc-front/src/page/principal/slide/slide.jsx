import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export default function Slide() {
    const { data, loading } = useContext(AppContext);
    const dadosIMG = data?.slide || [];

    const [tempoDecorrido, setTempoDecorrido] = useState(0);
    const TEMPO_POR_SLIDE = 4000; 

    useEffect(() => {
        if (loading || dadosIMG.length <= 1) return;

        let lastTime = performance.now();
        let frameId;

        const animate = (now) => {
            const delta = now - lastTime;
            lastTime = now;

            setTempoDecorrido((prev) => (prev + delta) % (dadosIMG.length * TEMPO_POR_SLIDE));

            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [loading, dadosIMG.length]);

    const index = Math.floor(tempoDecorrido / TEMPO_POR_SLIDE);
    const progress = ((tempoDecorrido % TEMPO_POR_SLIDE) / TEMPO_POR_SLIDE) * 100;

    const irPara = (i) => {
        setTempoDecorrido(i * TEMPO_POR_SLIDE);
    };

    if (loading) return (
        <div className="w-full bg-[#1e1e1e] h-[50vh] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
        </div>
    );

    if (dadosIMG.length === 0) return null;

    return (
        <div className="w-full bg-[#1e1e1e]">
            <div className="max-w-7xl mx-auto h-[50vh] overflow-hidden relative">
                <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }} >
                    {dadosIMG.map((img, i) => (
                        <img key={i} src={img} className="w-full h-full object-contain shrink-0" alt={`Slide ${i + 1}`} />
                    ))}
                </div>

                <div className="w-full flex-wrap justify-center absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-2">
                    {dadosIMG.map((_, i) => (
                        <button key={i} onClick={() => irPara(i)} className="cursor-pointer relative w-10 md:w-7 h-2 rounded-full bg-white/60 overflow-hidden" >
                            {i === index && (
                                <span className="absolute left-0 top-0 h-full bg-white" style={{ width: `${progress}%` }} />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}