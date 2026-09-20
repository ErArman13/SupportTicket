const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, default: "Uncategorized" },
  priority: { type: String, default: "Medium" },
  status: { type: String, enum: ["Open", "In Progress", "Resolved"], default: "Open" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Ticket", ticketSchema);