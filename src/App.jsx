import { Routes, Route } from "react-router-dom";
import Principal from "./page/principal/principal";
import Erro from "./page/erro/erro";
import Cursos from "./page/cursos/curso";
import CursoDetalhe from "./page/cursos/curso/curso";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/cursos/:slug" element={<CursoDetalhe />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}