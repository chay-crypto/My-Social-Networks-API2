import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  buyerName: { type: String, required: true },
  buyerSurname: { type: String, required: true },
  address: { type: String, required: true },
  purchaseDate: { type: Date, default: Date.now }
});

export default mongoose.model("Ticket", ticketSchema);
