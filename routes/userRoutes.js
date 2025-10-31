import express from "express";
import User from "../models/User.js";

const router = express.Router();

//Créer un user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Lister tous les users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
