import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  messages: [
    {
      author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      content: { type: String, required: true },
      date: { type: Date, default: Date.now }
    }
  ]
});

const Discussion = mongoose.model("Discussion", discussionSchema);
export default Discussion;
