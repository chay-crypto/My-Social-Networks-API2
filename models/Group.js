import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  members: [String] //juste une liste de noms
});

export default mongoose.model("Group", groupSchema);
