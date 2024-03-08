import { Request, Response } from "express";
import db from "../../db/db.json";
import { UsuarioModel } from "../../Models/Usuario.model";
import { baseUrlImages } from "../../Share/Constants";

export const login = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  const usuarios = db.usuarios;
  const usuarioEncontrado = usuarios.find((usuario) => {
    return usuario.user === user && usuario.password === password;
  });

  if (usuarioEncontrado) {
    const tempUsuario: UsuarioModel = {
      ...usuarioEncontrado,
      imgProfile: `${baseUrlImages}/userProfilePicture/${usuarioEncontrado.imgProfile}`,
    };
    console.log("tempUsuario", JSON.stringify(tempUsuario));
    return res.json({
      message: `Bienvenido ${tempUsuario.nombre}`,
      user: { ...tempUsuario, password: undefined },
    });
  } else {
    return res.status(423).json({
      message: `Usuario no encontrado`,
    });
  }
};
