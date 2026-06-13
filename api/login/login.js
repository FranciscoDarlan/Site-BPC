import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Método não permitido" });

  const { email, password } = req.body;
  
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD; 
  const jwtSecret = process.env.JWT_SECRET;

  if (email === adminEmail && password === adminPassword) {
    const token = jwt.sign(
        { role: "admin", email: adminEmail }, jwtSecret, { expiresIn: "1h" }
    );

    return res.status(200).json({ 
        token, user: { role: "admin" }
    });
  }
  
  return res.status(401).json({ message: "E-mail ou senha incorretos" });
}