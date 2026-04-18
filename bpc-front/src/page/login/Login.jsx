import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componetes/header/header";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState({ type: "", message: "" });
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Login"
    }, [])

    const submit = async (e) => {
        e.preventDefault();
        setStatus({ type: "", message: "Verificando credenciais..." });

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: "success", message: "Login realizado! Redirecionando..." });
                localStorage.setItem("user", JSON.stringify(data.user));

                setTimeout(() => { navigate("/"); }, 1500);
            } else {
                setStatus({ type: "error", message: "Erro ao fazer login." });
            }
        } catch (error) {
            setStatus({ type: "error", message: "Erro ao conectar com o servidor." });
        }
    };

    return (
        <>
            <Header />

            <main className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Painel BPC</h2>
                        <p className="text-gray-500 mt-2">Acesse o painel de controle BPC</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                            <input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" placeholder="example@email.com" required />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                            <input value={password} id="password" type="password" onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" placeholder="••••••••" required />
                        </div>

                        <button type="submit" className="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md active:transform active:scale-[0.98]" >
                            Entrar
                        </button>
                    </form>

                    <div className={`fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-40 md:max-w-xs transition-all duration-500 transform ${status.message ? "translate-y-4 opacity-100" : "-translate-y-full opacity-0"}`}>
                        <div className={`text-center p-3 border rounded-sm text-sm font-bold uppercase tracking-wider ${status.type === "success" ? "bg-green-50 text-green-700 border-green-200" : status.type === "error" ? "bg-red-50 text-red-700 border-red-200" : "bg-blue-50 text-blue-700 border-blue-200"}`}>
                            {status.message}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}