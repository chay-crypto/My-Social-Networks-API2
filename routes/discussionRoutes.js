import express from "express";
import Discussion from "../models/Discussion.js";

const router = express.Router();

//Créer un fil de discussion
router.post("/", async (req, res) => {
  try {
    const discussion = new Discussion(req.body);
    await discussion.save();
    res.status(201).json(discussion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Récup tous les fils de discussion
router.get("/", async (req, res) => {
  try {
    const discussions = await Discussion.find();
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
