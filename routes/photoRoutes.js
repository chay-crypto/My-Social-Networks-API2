import express from "express";
import Photo from "../models/Photo.js";

const router = express.Router();

//Récup toutes les photos
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Ajt une photo
router.post("/", async (req, res) => {
  try {
    const { title, url, albumId } = req.body;

    if (!title || !url || !albumId) {
      return res.status(400).json({ message: "Champs manquants (title, url, albumId)" });
    }

    const newPhoto = new Photo({ title, url, albumId });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Récup toutes les photos d'un album
router.get("/album/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const photos = await Photo.find({ albumId });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Modif d'une photo existante
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url } = req.body;

    const updatedPhoto = await Photo.findByIdAndUpdate(
      id,
      { title, url },
      { new: true }
    );

    res.json(updatedPhoto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Supp une photo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Photo.findByIdAndDelete(id);
    res.json({ message: "Photo supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
