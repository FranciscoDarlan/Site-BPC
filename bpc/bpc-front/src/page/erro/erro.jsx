import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function erro() {
    const [contador, setContador] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Erro 404"
    }, [])

    useEffect(() => {
        if (contador === 0) {
            navigate("/")
            return
        }

        const timer = setTimeout(() => {
            setContador((prev) => prev - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [contador, navigate])

    return (
        <div>
            <div className="flex h-screen justify-center flex-col items-center">
                <p className="text-7xl">404</p>
                <p className="text-sm">Página não encontrada.</p>

                <p className="text-sm mt-4">
                    Voltando para a página inicial em{" "}
                    <span className="font-bold text-[#5b88c3]">{contador}</span> segundos...
                </p>

                <Link to="/" className="text-sm text-[#5b88c3] mt-2">
                    Voltar agora
                </Link>
            </div>
        </div>
    )
}

export default erro