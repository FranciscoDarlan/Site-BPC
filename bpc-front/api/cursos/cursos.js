import dadosCursos from '../../src/data/cursos.json' with { type: 'json' };

export default function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Método não permitido' });
  }

  const { busca } = request.query;
  let cursos = dadosCursos;

  if (busca) {
    cursos = cursos.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()));
  }

  return response.status(200).json(cursos);
}