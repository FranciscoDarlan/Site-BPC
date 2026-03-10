import Conteudo from "./Conteudo/Conteudo.jsx";
import Navegacao from "./navegacao/navegacao";

export default function Header() {

    return (
        <>
            <header className="absolute z-10 h-max top-0 w-full bg-white">
                <Conteudo />
                <Navegacao />
            </header>

            <div className="h-33"></div>
        </>
    )
}