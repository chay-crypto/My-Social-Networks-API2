import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  members: [String] // <-- ici, juste une liste de noms simples
});

export default mongoose.model("Group", groupSchema);
