// backend/models/Chat.js
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    latestMessage: {
      type: String,
      default: "New Chat",
    },
  },
  {
    timestamps: true,
  }
);

// Default export (recommended for consistency)
export default mongoose.model("Chat", schema);
