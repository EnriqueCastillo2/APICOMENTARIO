// Importamos el modulo express 
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

var corsOptions={
  origin: process.env.FRONTND_URL||"http://localhost:5173"
}
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");
// db.sequelize.sync();

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
// Conexión a la base de datos
const db = require("./app/models");
db.sequelize.sync()
.then(() => {
console.log("Database synchronized successfully.");
})
.catch((err) => {
console.error("Error connecting to the database:", err);
});


// Ruta base de prueba
app.get("/", (req, res) => {
res.json({ message: "UMG Web Application" });
});

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "UMG Web Application" });
// });

require("./app/routes/comentario.routes.js")(app);
require("./app/routes/stripe.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});