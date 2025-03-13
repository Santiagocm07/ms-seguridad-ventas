export namespace ConfiguracionSeguridad {
  export const claveJWT = process.env.SECRET_PASSWORD_JWT;
  export const menuUsuarioId = "67c88cffa19e421300923c32";
  export const listarAccion = "listar";
  export const guardarAccion = "guardar";
  export const editarAccion = "editar";
  export const eliminarAccion = "eliminar";
  export const descargarAccion = "descargar";
  export const mongodbConnectionString = process.env.CONNECTION_STRING_MONGODB;
}
