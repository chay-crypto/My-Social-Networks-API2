import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//Partie SOCIAL API2
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";



const app = express();
app.use(express.json());
//Partie Social API2
app.use("/users", userRoutes);
app.use("/events", eventRoutes);
app.use("/groups", groupRoutes);


app.use(cors());

// --- Connexion MongoDB ---
mongoose.connect("mongodb+srv://chaima:12345@cluster0.lrzzyun.mongodb.net/albumsdb")
  .then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur MongoDB :", err));

// --- Import des routes ---
import albumRoutes from "./routes/albumRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";

app.use("/album", albumRoutes);
app.use("/photo", photoRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenue sur My Social Networks API");
});

app.listen(3000, () => console.log("Serveur lancé sur le port 3000"));
