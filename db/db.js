const mysql = require('mysql');

let connection;
try {
       connection = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "",
              database: "tienda",
              port: 3306
       })
       connection.on('error', (err) => {
              console.error("Error de conexión a la base de datos:", err);
          });
          connection.connect((err) => {
              if (err) {
                  console.error("Error al conectar a la base de datos:", err);
              } else {
                  console.log("Conexión exitosa a la base de datos");
              }
          });
} catch (error) {
       
}
module.exports = connection;
