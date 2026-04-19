import dadosCursos from '../../src/data/cursos.json' with { type: 'json' };

export default function handler(req, res) {
  // Pega o slug que vem na URL (ex: /api/curso?slug=produto-1)
  const { slug } = req.query;

  const curso = dadosCursos.find(c => c.slug === slug);

  if (!curso) {
    return res.status(404).json({ error: "Curso não encontrado" });
  }

  // Retorna apenas o objeto do curso encontrado
  return res.status(200).json(curso);
}