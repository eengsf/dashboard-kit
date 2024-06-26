import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
  {
    ticketDetail: String,
    customerName: String,
    Priority: String,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
