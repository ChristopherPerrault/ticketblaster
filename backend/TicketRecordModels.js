const mongoose = require("mongoose");
const TicketRecordSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  ticketLevel: {
    type: String,
    required: true,
  },
  totalTickets: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
});

// Mongoose will assume there is a collection called the plural of this name (i.e., 'users' in this case).
const TicketRecord = mongoose.model("TicketRecord", TicketRecordSchema);
module.exports = TicketRecord;
