const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    performer: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
    availableTickets: {
        type: Number,
        required: true,
    },
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;