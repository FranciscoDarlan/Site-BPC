import ConteudoHeader from "./divs/div";
import Nav from "./nav/nav";

function Header(params) {

    return (
        <header className="absolute z-10 h-max top-0 w-full bg-white">
            <ConteudoHeader />
            <Nav />
        </header>
    )
}

export default Header