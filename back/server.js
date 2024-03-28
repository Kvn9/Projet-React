const express = require("express");
const cors = require("cors");


const utilisateurRoute = require("./routes/utilisateurRoute");
const cabinetRoute = require("./routes/cabinetRoute");
const animauxRoute = require("./routes/animauxRoute");

const app = express();


app.use(express.json());
app.use(cors());

app.use("/utilisateur", utilisateurRoute);
app.use("/cabinet", cabinetRoute);
app.use("/animaux", animauxRoute);

app.listen(8000, () => {
  console.log("Serveur lancé sur le port 8000");
});