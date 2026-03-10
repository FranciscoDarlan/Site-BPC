import { logo } from "../../config/imagem";

export default function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className="flex flex-col justify-center items-center gap-1 py-2 md:py-4 px-1 md:px-2">
            <img className="h-10 w-10" src={logo} alt="Logo" />
            
            <p className="text-sm">{`© copyright ${anoAtual}`}</p>

            <span className="text-[75%]">Polo Profissionalizante - Todos os direitos reservados.</span>
        </footer>
    )
}