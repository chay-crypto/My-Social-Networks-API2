import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },        // nom ou description de la photo
  url: { type: String, required: true },          // lien vers l’image
  albumId: { type: String, required: true }       // id de l’album lié
});

export default mongoose.model("Photo", photoSchema);
