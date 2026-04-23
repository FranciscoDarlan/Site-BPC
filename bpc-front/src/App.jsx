import { Routes, Route } from "react-router-dom";
import Principal from "./page/principal/principal";
import Erro from "./page/erro/erro";
import Cursos from "./page/cursos/curso";
import CursoDetalhe from "./page/curso/curso";
import TelaLogin from "./page/login/Login";
import PainelAdmin from "./page/login/painel/paineladmin";
import ProtectedRoute from "./componetes/ProtectedRoute/ProtectedRoute";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/cursos/:slug" element={<CursoDetalhe />} />
      <Route path="/login" element={<TelaLogin />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <PainelAdmin />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}