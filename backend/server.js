const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

app.use(cors());
app.use(express.json());
app.use("/api/users", require("./routes/user.routes"));

db.sequelize.sync().then(() => {
  console.log("Banco conectado!");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
