export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-1 py-4 px-1 md:px-2">
            <img className="h-10 w-10" src="/favicon.ico" alt="" />
            <p className="text-sm">{`© copyright ${new Date().getFullYear()}`}</p>
            <span className="text-[75%]">Polo Profissionalizante - Todos os direitos reservados.</span>
        </footer>
    )
}