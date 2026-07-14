import { useEffect, useState } from "react";

export default function Erro() {
    const [contador, setContador] = useState(10);

    useEffect(() => {
        document.title = "Erro 404";

        const timer = setInterval(() => {
            setContador((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    window.location.href = "/";
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="flex h-screen justify-center flex-col items-center">
                <p className="text-7xl">404</p>
                <p className="text-sm">Página não encontrada.</p>
                <p className="text-sm mt-4">
                    Voltando para a página inicial em{" "}
                    <span className="font-bold text-[#5b88c3]">{contador}</span> segundos...
                </p>
                <a href="/" className="text-sm text-[#5b88c3] mt-2 hover:underline">Voltar agora</a>
            </div>
        </div>
    )
}
