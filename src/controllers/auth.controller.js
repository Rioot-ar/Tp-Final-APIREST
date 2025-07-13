import { generateToken } from "../utils/token-generator.js";
import { getUserByName } from "../models/user.model.js";

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await getUserByName(userName);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error("Error en login:", error.message);
    res.status(500).json({ error: "Error del servidor" });
  }
};