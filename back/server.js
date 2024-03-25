express = require("express");
const cors = require("cors");

const dataBaseRoute = require("./routes/databaseRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/database", dataBaseRoute);

app.listen(8000, () => {
  console.log("Serveur lancé sur le port 8000");
});