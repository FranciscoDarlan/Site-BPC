import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Não autorizado' });

    try {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET);

        const filePath = path.join(process.cwd(), 'src', 'data', 'cursos.json');
        fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));

        return res.status(200).json({ message: 'Sucesso' });
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}