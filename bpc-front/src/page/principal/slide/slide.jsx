import { useEffect, useState } from "react";
import dadosIMG from "../../../data/slide.json";

const TEMPO_TOTAL = 4000
const FPS = 30
const STEP = 100 / (TEMPO_TOTAL / (1000 / FPS))

export default function Slide() {
    const [index, setIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setIndex((old) => (old === dadosIMG.length - 1 ? 0 : old + 1))
                    return 0
                }

                return prev + STEP
            })
        }, 1000 / FPS)

        return () => clearInterval(timer)
    }, [index])

    const irPara = (i) => {
        setIndex(i)
        setProgress(0)
    }

    return (
        <div className="w-full bg-[#1e1e1e]">
            <div className="max-w-7xl mx-auto h-[60vh] md:h-[65vh] overflow-hidden relative">

                <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }} >
                    {dadosIMG.map((img, i) => (
                        <img key={i} src={img} loading="lazy" className="w-full h-full object-contain shrink-0" alt={`Slide ${i + 1}`} />
                    ))}
                </div>

                <div className="w-full flex-wrap justify-center absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-1">
                    {dadosIMG.map((_, i) => (
                        <button key={i} onClick={() => irPara(i)} className="cursor-pointer relative w-4.5 h-2.5 md:h-1.5 rounded-full bg-white/45 overflow-hidden" >
                            {i === index && (
                                <span className="absolute left-0 top-0 h-full bg-white transition-all" style={{ width: `${progress}%` }} />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}