import dadosEmpresa from '../../src/data/info.json' with { type: 'json' };

export default function handler(request, response) {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Método não permitido' });
  }

  response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  return response.status(200).json(dadosEmpresa);
}