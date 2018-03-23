//Se recomienda generar las variables de entorno para las diferentes credenciales de la aplicación
//de tal manera que no se pueda alterar las bases de datos de la aplicación.

module.exports = {
 	"port": process.env.PORT || 5000,
 	"database": "mongodb://user:user@ds249418.mlab.com:49418/dcapan",
  "secret": "webDevUniandesSuperSecret"
 };
