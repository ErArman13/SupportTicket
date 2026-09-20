const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket", required: true },
  message: { type: String, required: true },
  sentBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  aiGenerated: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Reply", replySchema);