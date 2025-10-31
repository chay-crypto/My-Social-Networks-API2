import express from "express";
import Album from "../models/Album.js";
const router = express.Router();

//Créer un album
router.post("/", async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json(album);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Récup tous les albums
router.get("/", async (req, res) => {
  try {
    const albums = await Album.find().populate("photos");
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Récup un album par ID
router.get("/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).populate("photos");
    if (!album) return res.status(404).json({ message: "Album non trouvé" });
    res.json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Mettre à jour un album
router.put("/:id", async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(album);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Supp un album
router.delete("/:id", async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.id);
    res.json({ message: "Album supprimé" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
