import { useEffect } from "react";

import Header from "../../componetes/header/header";
import Sobre from "./sobre/sobre";
import Footer from "../../componetes/footer/footer";

export default function Principal() {
    useEffect(() => {
        document.title = "BPC - Principal"
    }, [])

    return (
        <>
            <Header />

            <div className="w-full bg-[#1e1e1e]">
                <div className="max-w-7xl mx-auto h-[50vh] overflow-hidden">
                    <div className="flex h-full transition-transform duration-700 ease-in-out" >
                        <img src="/banner/banner1.jpg" className="w-full h-full object-contain shrink-0" alt="" />
                    </div>
                </div>
            </div>

            <Sobre />

            <Footer />
        </>
    )
}