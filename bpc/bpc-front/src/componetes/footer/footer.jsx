import dadosFooter from "../../data/footer.json";

function Footer(params) {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className="flex flex-col justify-center items-center gap-1 py-4 px-2">
            <img className="h-10 w-10" src={dadosFooter.icon} alt="Logo" />
            
            <p className="text-sm">
                {dadosFooter.copyright} {anoAtual}
            </p>

            <span className="text-[75%]">{dadosFooter.texto}</span>
        </footer>
    )
}

export default Footer