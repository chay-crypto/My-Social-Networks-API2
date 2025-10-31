import express from "express";
import Group from "../models/Group.js";

const router = express.Router();

//Créer un grp
router.post("/", async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Lister tous les grp
router.get("/", async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
