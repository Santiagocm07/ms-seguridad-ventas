export namespace ConfiguracionNotificaciones {
  export const contenidoCorreo: string = "Su código de segundo factor de autenticación es:";
  export const asunto2fa: string = "Código de verificación";
  export const asuntoVerificacionCorreo: string = "Verificación de correo";
  export const urlNotificaciones2fa: string = "http://localhost:5020/enviar-correo-2fa";
  export const urlNotificacionesSms: string = "http://localhost:5020/enviar-sms";
  export const urlValidacionCorreoFrontend: string = "http://localhost:4200/validar-hash-usuario-publico";
}
