import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

//Créer un billet
router.post("/", async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Lister tous les billets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find().populate("event");
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
