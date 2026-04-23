import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../componetes/header/header";

export default function PainelAdmin() {
    useEffect(() => {
        document.title = "BPC - Administrador"
    })

    return (
        <main>
            <header className="h-14 bg-[#86221d]">
                <Link className="text-white uppercase font-bold hover:text-white/60 transition-colors" to={"/"}>Início</Link>
            </header>

            <section></section>
        </main>
    )
}