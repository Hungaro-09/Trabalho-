import mysql from "mysql";

const connectionConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "senha",
  database: "my_database",
};

const connection = mysql.createConnection(connectionConfig);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conexão com o banco de dados estabelecida");
  }
});