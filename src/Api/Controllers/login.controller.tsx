import { Request, Response } from "express";
import { usuarios } from "../../db/db";

export const login = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  const usuarioEncontrado = usuarios.find((usuario) => {
    return usuario.user === user && usuario.password === password;
  });

  if (usuarioEncontrado) {
    return res.json({
      message: `Bienvenido ${usuarioEncontrado.nombre}`,
      user: { ...usuarioEncontrado, password: undefined },
    });
  } else {
    return res.status(423).json({
      message: `Usuario no encontrado`,
    });
  }
};
