import { useState } from "react";

function Perguntas({ items }) {
    const [aberta, setAberta] = useState(null)

    const toggle = (index) => {
        setAberta((prev) => (prev === index ? null : index))
    }

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="border-b border-white">
                    <button onClick={() => toggle(index)} className="cursor-pointer  bg-[#86221d] w-full flex items-center px-3 py-2 text-left" >
                        <span className={`text-white text-sm transition-transform duration-300 ${aberta === index ? "rotate-180" : "rotate-0"}`} >▼</span>

                        <span className="ml-2 text-white text-sm">
                            {item.pergunta}
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${aberta === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`} >
                        <p className="px-3 py-2 text-sm">
                            {item.resposta}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Perguntas