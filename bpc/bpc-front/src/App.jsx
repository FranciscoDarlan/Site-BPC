import { Routes, Route } from "react-router-dom";

import Principal from "./page/principal/principal";
import Erro from "./page/erro/erro";
import Sobre from "./page/sobre/sobre";
import Cursos from "./page/cursos/curso";
import CursoDetalhe from "./page/curso/curso";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/cursos/:slug" element={<CursoDetalhe />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}

export default App