import dadosCursos from '../../src/data/cursos.json' with { type: 'json' };

export default function handler(req, res) {
  const { slug } = req.query;

  const curso = dadosCursos.find(c => c.slug === slug);

  if (!curso) {
    return res.status(404).json({ error: "Curso não encontrado" });
  }

  return res.status(200).json(curso);
}